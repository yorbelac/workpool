"use client";

import { useActionState } from "react";
import { submitInquiry, type ContactState } from "@/app/actions/contact";
import { Dots } from "./Dots";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-2xl bg-paper px-4 py-3.5 text-floor ring-1 ring-transparent transition placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-accent aria-invalid:ring-accent-deep";

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string[];
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 flex items-baseline justify-between text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-ink-muted">Optional</span>}
      </label>
      {children}
      {error?.[0] && (
        <p id={`${name}-error`} className="mt-2 text-sm text-accent-deep">
          {error[0]}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start py-6">
        <Dots size="1.5rem" />
        <h3 className="mt-6 text-2xl font-semibold tracking-tight">Got it. Thanks.</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Your message is in. We&apos;ll reply to the email you gave us.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined;
  const invalid = (name: keyof NonNullable<typeof errors>) =>
    errors?.[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors?.name}>
          <input id="name" name="name" autoComplete="name" required className={inputClass} {...invalid("name")} />
        </Field>
        <Field label="Email" name="email" error={errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            {...invalid("email")}
          />
        </Field>
      </div>
      <Field label="Company" name="company" optional error={errors?.company}>
        <input id="company" name="company" autoComplete="organization" className={inputClass} />
      </Field>
      <Field label="What do you need built?" name="message" error={errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${inputClass} resize-y`}
          placeholder="The job, who does it today, and what's getting in the way."
          {...invalid("message")}
        />
      </Field>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent-deep disabled:opacity-70"
        >
          {pending ? (
            <>
              Sending <Dots size="0.5rem" pulse tone="white" />
            </>
          ) : (
            "Send message"
          )}
        </button>
        {state.status === "error" && (
          <p role="alert" className="text-sm text-accent-deep">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
