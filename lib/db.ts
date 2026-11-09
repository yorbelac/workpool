import "server-only";
import { neon } from "@neondatabase/serverless";

/** Returns a Neon SQL tag, or null when DATABASE_URL isn't configured (e.g. a fresh local checkout). */
export function getSql() {
  const url = process.env.DATABASE_URL;
  return url ? neon(url) : null;
}
