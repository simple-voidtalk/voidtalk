"use client"
import React from "react";
import { RequireAuth } from "@voidtalk/auth/components/require-auth";
import { useTypedRouter } from "@/lib/typedRouter";
import { routes } from "@/lib/routes";

export default function ProtectedLayout({children}: { children: React.ReactNode }) {
    const router = useTypedRouter();

    return (
        <RequireAuth navigateToLogin={() => router.push(routes.auth.sign_in)}>
            {children}
        </RequireAuth>
    );
}