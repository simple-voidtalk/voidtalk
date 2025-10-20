import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@voidtalk/ui/components/sidebar";
import {
    ChevronRightIcon,
    Home
} from "lucide-react";
import { FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@voidtalk/ui/components/item";
import { Separator } from "@voidtalk/ui/components/separator";
import { SidebarTrigger } from "@/components/sidebartrigger";
import { TypedLink } from "@/lib/typedLink";
import { routes, socialRoutes } from "@/lib/routes";
import LoginButton from "@/components/login-button";

export default function Page() {
    const items = [
        {
            title: "Home",
            url: "#",
            icon: Home,
        }
    ];

    return (
        <SidebarProvider defaultOpen={false}>
            <Sidebar variant={"sidebar"}>
                <SidebarHeader>Voidtalk</SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <LoginButton/>
                </SidebarFooter>
            </Sidebar>
            <div className={"flex flex-col w-full"}>
                <header className={"flex justify-end items-center p-4"}>
                    <SidebarTrigger />
                </header>
                <main className={"h-full flex flex-col items-center"}>
                    <div className={"m-4 flex flex-col items-center gap-4"}>
                        <h1 className={"text-3xl text-center"}>
                            Voidtalk <br /> make it Simple
                        </h1>
                        <div>
                            <LoginButton/>
                        </div>
                    </div>
                    <div className={"flex flex-col m-4 gap-4 w-full max-w-90"}>
                        <h3 className={"text-xl"}>Projects</h3>
                        <Item variant="outline" asChild>
                            <TypedLink href={routes.home}>
                                <ItemContent>
                                    <ItemTitle>Project-1</ItemTitle>
                                    <ItemDescription>This Project is the first</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <ChevronRightIcon className="size-4" />
                                </ItemActions>
                            </TypedLink>
                        </Item><Item variant="outline" asChild>
                            <TypedLink href={routes.home}>
                                <ItemContent>
                                    <ItemTitle>Project-2</ItemTitle>
                                    <ItemDescription>This Project is the second</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <ChevronRightIcon className="size-4" />
                                </ItemActions>
                            </TypedLink>
                        </Item>
                    </div>
                </main>
                <footer>
                    <div className={"flex flex-col m-4 gap-4"}>
                        <Separator />
                        <h3 className={"text-xl"}>voidtalk</h3>
                        <p>Socials</p>
                        <div className={"flex gap-4"}>
                            <a href={socialRoutes.tiktok}><FaTiktok/></a>
                            <a href={socialRoutes.instagram}><FaInstagram/></a>
                            <a href={socialRoutes.youtube}><FaYoutube/></a>
                        </div>
                        <p>Community</p>
                        <div className={"flex gap-4"}>
                            <a href={socialRoutes.discord}><FaDiscord/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </SidebarProvider>
    );
}
