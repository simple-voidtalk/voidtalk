"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthProvider } from "@voidtalk/auth/context/use-auth";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
        >
            <AuthProvider
                navigateToLogin={() => console.log("Navigate to login") /*TODO: implement*/}
            >
                {children}
            </AuthProvider>
        </NextThemesProvider>
    );
}
