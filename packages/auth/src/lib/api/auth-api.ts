import { supabaseClient } from "../supabase-client.js";

export class AuthApi {
  async signOut(): Promise<void> {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  async getSession() {
    return supabaseClient.auth.getSession();
  }

  onAuthStateChange(callback: (event: any, session: any) => void) {
    return supabaseClient.auth.onAuthStateChange(callback);
  }
}
