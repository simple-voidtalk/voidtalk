'use client';

import React, { JSX, useEffect } from "react";
import { useAuth } from "@voidtalk/auth/context/use-auth";
import LoadingProfile from "@voidtalk/auth/components/loading-profile";

export type RequireAuthProps = {
    children: React.ReactNode;
    navigateToLogin: () => void;
    loadingPage?: JSX.Element;
};

export function RequireAuth(props: RequireAuthProps): JSX.Element {
    const { children, navigateToLogin, loadingPage } = props;
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            navigateToLogin();
        }
    }, [loading, user, navigateToLogin]);

    if (loading || !user) {
        return loadingPage ?? <LoadingProfile />;
    }

    return <>{children}</>;
}
