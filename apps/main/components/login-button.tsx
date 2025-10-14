"use client"
import { Button } from "@voidtalk/ui/components/button";
import { useAuth } from "@voidtalk/auth/context/use-auth";
import { useTypedRouter } from "@/lib/typedRouter";
import { routes } from "@/lib/routes";
import { useEffect, useState } from "react";

const LoginButton = () => {

    const {user, loading} = useAuth()
    const router = useTypedRouter()
    const [text,setText] = useState("Login")

    useEffect(() => {
        if (!loading && user) {
            setText("View Profile")
        } else {
            setText("Login")
        }
    },[user, loading])

    const handleClick = () => {
        if (!loading && user) {
            router.push(routes.profile.root)
        } else {
            router.push(routes.auth.sign_in)
        }
    }

    return (
        <Button onClick={handleClick}>{text}</Button>
    )
}

export default LoginButton;