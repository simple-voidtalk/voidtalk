import { supabaseClient } from "../supabase-client";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

export class AuthApi {
    static async signOut(): Promise<void> {
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
            throw error;
        }
    }

    static async getSession() {
        return supabaseClient.auth.getSession();
    }

    static onAuthStateChange(
        callback: (event: AuthChangeEvent, session: Session | null) => void
    ) {
        return supabaseClient.auth.onAuthStateChange(callback);
    }
}
