export const defineRoute = <T extends string>(path: T) => path;
export const defineDynamicRoute =
    <T extends string>(pattern: T) =>
        <P extends Record<string, string>>(params: P) =>
            pattern.replace(/\[([^\]]+)]/g, (_, key) => {
                const value = params[key as keyof P];
                if (!value) {
                    throw new Error(`Missing param "${key}" for route "${pattern}"`);
                }
                return value;
            });

export type ExtractRoutes<T> = T extends (...args: any[]) => string
    ? ReturnType<T>
    : T extends string
        ? T
        : { [K in keyof T]: ExtractRoutes<T[K]> }[keyof T];
