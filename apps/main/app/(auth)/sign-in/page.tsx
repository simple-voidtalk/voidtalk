"use client";
import { SignInForm } from "@voidtalk/auth/components/sign-in-form";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@voidtalk/ui/components/card";

export default function SignInPage() {
  const router = useRouter();

  const handleSwitchToSignUp = () => {
    router.push("/sign-up");
  };

  const handleNavigateAfterSignIn = () => {
    router.push("/profile");
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <div className={"flex items-center justify-center min-h-svh"}>
      <Card>
        <CardContent>
          <SignInForm
            handleSwitchToSignUp={handleSwitchToSignUp}
            handleNavigateAfterSignIn={handleNavigateAfterSignIn}
            handleForgotPassword={handleForgotPassword}
          ></SignInForm>
        </CardContent>
      </Card>
    </div>
  );
}
