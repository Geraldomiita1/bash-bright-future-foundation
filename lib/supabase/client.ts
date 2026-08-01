import { createBrowserClient } from "@supabase/ssr";

// Client-side Supabase instance. Uses public (anon) env vars only —
// never expose the service role key in client code.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
