import { createBrowserClient } from "@supabase/ssr";

export function createClient(): ReturnType<typeof createBrowserClient> {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

    return createBrowserClient(url, key);
}

export const supabaseClient = createClient();
