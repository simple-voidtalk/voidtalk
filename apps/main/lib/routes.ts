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

export type AppRoute = ExtractRoutes<typeof routes>;
