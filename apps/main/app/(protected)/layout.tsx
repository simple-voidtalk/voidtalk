"use client"
import React from "react";
import { RequireAuth } from "@voidtalk/auth/components/require-auth";

export default function ProtectedLayout({children}: { children: React.ReactNode }) {
    return (
        <RequireAuth navigateToLogin={() => console.log("navigateToLogin") /*TODO implement*/}>
            {children}
        </RequireAuth>
    );
}