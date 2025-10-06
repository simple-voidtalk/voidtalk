"use client";

import { createClient } from "../lib/supabase-client";
import { cn } from "@voidtalk/ui/lib/utils";
import React, { useState } from "react";
import { Button } from "@voidtalk/ui/components/button";
import { Input } from "@voidtalk/ui/components/input";
import { Label } from "@voidtalk/ui/components/label";

type SignUpFormProps = React.ComponentPropsWithoutRef<"div"> & {
    handleSwitchToSignIn: () => void;
    handleNavigateAfterSignIn: () => void;
};

export function SignUpForm(prop: SignUpFormProps) {
    const { handleSwitchToSignIn, handleNavigateAfterSignIn, className, ...props } = prop;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();
        setIsLoading(true);
        setError(null);

        if (password !== repeatPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/protected`,
                },
            });
            if (error) {
                console.error("Failed to SignUp", error);
            }
            handleNavigateAfterSignIn();
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Create your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Enter your email below to create a new account
                    </p>
                </div>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="repeat-password">Repeat Password</Label>
                        <Input
                            id="repeat-password"
                            type="password"
                            required
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Sign up"}
                    </Button>
                </div>
                <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Button
                        type="button"
                        variant="link"
                        className="pl-0 h-auto p-0 underline underline-offset-4"
                        onClick={handleSwitchToSignIn}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}
