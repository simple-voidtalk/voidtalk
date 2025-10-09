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
    SidebarTrigger,
} from "@voidtalk/ui/components/sidebar";
import { Home, Search, Settings } from "lucide-react";

export default function Page() {
    const items = [
        {
            title: "Home",
            url: "#",
            icon: Home,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ];

    return (
        <SidebarProvider>
            <Sidebar variant={"inset"}>
                <SidebarHeader>"Logo"</SidebarHeader>
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
                <SidebarFooter>"Profile"</SidebarFooter>
            </Sidebar>
            <div className={"flex flex-col w-full"}>
                <header className={"flex justify-end items-center"}>
                    <SidebarTrigger variant={"secondary"}/>
                </header>
            </div>
        </SidebarProvider>
    );
}
