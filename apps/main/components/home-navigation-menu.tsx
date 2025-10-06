"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@voidtalk/ui/components/navigation-menu";
import { TypedLink } from "@/lib/typedLink";
import { routes } from "@/lib/routes";
import { useAuth } from "@voidtalk/auth/context/use-auth";
import { ModeToggle } from "@voidtalk/ui/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@voidtalk/ui/components/avatar";

export function HomeNavigationMenu() {
    const { user, loading } = useAuth();

    return (
        <div className={"flex items-center justify-between gap-4 m-4"}>
            <div className={"flex items-center gap-4"}>
                <TypedLink href={routes.home}>
                    <Avatar className={"rounded-lg"}>
                        <AvatarImage src={"vt-logo-border.svg"} />
                        <AvatarFallback>VT</AvatarFallback>
                    </Avatar>
                </TypedLink>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <TypedLink href={routes.home}>Home</TypedLink>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <TypedLink href={routes.home}>About</TypedLink>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <TypedLink href={routes.home}>Legal</TypedLink>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Test</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className={"flex items-center gap-4"}>
                {!user && !loading ? <TypedLink href={routes.auth.sign_in}>Login</TypedLink> : null}
                <ModeToggle />
            </div>
        </div>
    );
}
