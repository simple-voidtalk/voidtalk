import { supabaseClient } from "../supabase-client";
import { Profile } from "../../types/profile";

export class ProfileApi {
    static async getCurrentUserProfile(): Promise<Profile | null> {
        const { data, error } = await supabaseClient.rpc("get_current_user_profile");

        if (error) {
            console.error("Error fetching profile:", error);
            return null;
        }

        return data as Profile;
    }
}
