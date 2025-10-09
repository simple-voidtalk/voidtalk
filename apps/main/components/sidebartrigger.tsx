"use client"
import { useSidebar } from "@voidtalk/ui/components/sidebar";
import {Menu, X } from "lucide-react";

export function SidebarTrigger() {
    const { toggleSidebar,open, openMobile } = useSidebar()

    return (
        <button onClick={toggleSidebar}>
            {open || openMobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
    )
}