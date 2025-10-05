import { supabaseClient } from "../supabase-client";

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

    static onAuthStateChange(callback: (event: any, session: any) => void) {
        return supabaseClient.auth.onAuthStateChange(callback);
    }
}
