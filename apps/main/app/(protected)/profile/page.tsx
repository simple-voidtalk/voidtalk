"use client"
import { useAuth } from "@voidtalk/auth/context/use-auth";
import { Button } from "@voidtalk/ui/components/button";

export default function ProfilePage() {

    const {loading, user,logout} = useAuth();

    return (
        <>
            <p>Loading: {loading.toString()}</p>
            <p>Email: {user?.email}</p>
            <p>UUID: {user?.id}</p>

            <Button onClick={logout}>Logout</Button>
        </>
    );
}
