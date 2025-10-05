const defineRoute = <T extends string>(path: T) => path;
export const defineDynamicRoute = <T extends string>(pattern: T) =>
    <P extends Record<string, string>>(params: P) =>
        pattern.replace(/\[([^\]]+)\]/g, (_, key) => {
            const value = params[key as keyof P];
            if (!value) {
                throw new Error(`Missing param "${key}" for route "${pattern}"`);
            }
            return value;
        });


export const routes = {
    home: defineRoute('/'),

    auth: {
        sign_in: defineRoute('/sign-in'),
        sign_up: defineRoute('/sign-up'),
        forgot_password: defineRoute('/forgot-password'),
    },

    profile: {
        root: defineRoute('/profile'),
        //profile: defineDynamicRoute('/profile/[id]'),
        //settings: defineDynamicRoute('/profile/[id]/settings'),
    }
} as const;


type ExtractRoutes<T> =
    T extends (...args: any[]) => string
        ? ReturnType<T>
        : T extends string
            ? T
            : { [K in keyof T]: ExtractRoutes<T[K]> }[keyof T];

export type AppRoute = ExtractRoutes<typeof routes>;

