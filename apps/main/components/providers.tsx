"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthProvider } from "@voidtalk/auth/context/use-auth";
import { useTypedRouter } from "@/lib/typedRouter";
import { routes } from "@/lib/routes";

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useTypedRouter();

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
        >
            <AuthProvider navigateToLogin={() => router.push(routes.auth.sign_in)}>
                {children}
            </AuthProvider>
        </NextThemesProvider>
    );
}
