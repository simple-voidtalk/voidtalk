import {defineRoute, defineDynamicRoute, ExtractRoutes} from "@voidtalk/shared/lib/routes"

export const routes = {
    home: defineRoute("/"),

    auth: {
        sign_in: defineRoute("/sign-in"),
        sign_up: defineRoute("/sign-up"),
        forgot_password: defineRoute("/forgot-password"),
    },

    profile: {
        root: defineRoute("/profile"),
        profile: defineDynamicRoute('/profile/[id]'),
    },
} as const;

export const socialRoutes = {
    tiktok: "https://www.tiktok.com/@simplevoidtalk",
    youtube: "https://www.youtube.com/@simplevoidtalk",
    instagram: "https://www.instagram.com/simplevoidtalk/",
}

export type AppRoute = ExtractRoutes<typeof routes>;
