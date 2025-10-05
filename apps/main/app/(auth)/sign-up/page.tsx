"use client";
import { SignUpForm } from "@voidtalk/auth/components/sign-up-form";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@voidtalk/ui/components/card";

export default function SignUpPage() {
  const router = useRouter();

  const handleSwitchToSignIn = () => {
    router.push("/sign-in");
  };

  const handleNavigateAfterSignIn = () => {
    router.push("/profile");
  };

  return (
    <div className={"flex items-center justify-center min-h-svh"}>
      <Card>
        <CardContent>
          <SignUpForm
            handleSwitchToSignIn={handleSwitchToSignIn}
            handleNavigateAfterSignIn={handleNavigateAfterSignIn}
          ></SignUpForm>
        </CardContent>
      </Card>
    </div>
  );
}
