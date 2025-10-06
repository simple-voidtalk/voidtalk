"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { Profile } from "../types/profile";
import { ProfileApi } from "../lib/api/profile-api";
import { AuthApi } from "../lib/api/auth-api";

type AuthProviderProps = {
    children: React.ReactNode;
    navigateToLogin: () => void;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
    userProfile: Profile | null;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    logout: async () => {},
    userProfile: null,
});

export const AuthProvider = (props: AuthProviderProps) => {
    const { children, navigateToLogin } = props;
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const fetchUserData = async (currentUser: User | null) => {
            if (currentUser) {
                const profile = await ProfileApi.getCurrentUserProfile();
                setUserProfile(profile);
            } else {
                setUserProfile(null);
            }
            setLoading(false);
        };

        // Initial session check
        AuthApi.getSession().then(({ data: { session } }) => {
            const currentUser = session?.user ?? null;
            setUser(currentUser);
            fetchUserData(currentUser);
        });

        // Listen for auth changes
        const { data: listener } = AuthApi.onAuthStateChange((_event, session) => {
            const currentUser = session?.user ?? null;
            setUser(currentUser);
            fetchUserData(currentUser);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const logout = async () => {
        try {
            await AuthApi.signOut();
            setUser(null);
            setUserProfile(null);
            navigateToLogin();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout, userProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
