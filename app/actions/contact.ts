"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Tell us your name.").max(200),
  email: z.email("That email doesn't look right.").max(320),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "A sentence or two about the job, please.").max(5000),
});

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>;
    };

const HOURLY_LIMIT = 5;

export async function submitInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real people never see this field. Pretend it worked.
  if (formData.get("website")) return { status: "success" };

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
    };
  }
  const { name, email, company, message } = parsed.data;

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  const ipHash = createHash("sha256")
    .update(`${process.env.IP_HASH_SALT ?? "workpool"}:${ip}`)
    .digest("hex");

  const sql = getSql();
  let id: number | null = null;

  if (sql) {
    try {
      const [{ count }] = (await sql`
        select count(*)::int as count from inquiries
        where ip_hash = ${ipHash} and created_at > now() - interval '1 hour'
      `) as { count: number }[];
      if (count >= HOURLY_LIMIT) {
        return { status: "error", message: `That's a lot of messages. Email us directly at ${site.email}.` };
      }
      const [row] = (await sql`
        insert into inquiries (name, email, company, message, ip_hash)
        values (${name}, ${email}, ${company ?? null}, ${message}, ${ipHash})
        returning id
      `) as { id: number }[];
      id = row.id;
    } catch (err) {
      console.error("[contact] database write failed", err);
    }
  }

  let emailed = false;
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? `Workpool <${site.email}>`,
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Company: ${company ?? "-"}`, "", message].join("\n"),
    });
    if (error) console.error("[contact] email send failed", error);
    else emailed = true;
  }

  if (sql && id !== null && emailed) {
    await sql`update inquiries set emailed = true where id = ${id}`.catch(() => {});
  }

  // Succeed if the inquiry landed somewhere we'll see it.
  if (id !== null || emailed) return { status: "success" };
  return {
    status: "error",
    message: `Something went wrong on our end. Please email us at ${site.email}.`,
  };
}
