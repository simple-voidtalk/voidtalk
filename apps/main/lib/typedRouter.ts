import { useRouter } from "next/navigation";
import { AppRoute } from "./routes";

export function useTypedRouter() {
    const router = useRouter();

    return {
        ...router,
        push: (href: AppRoute) => router.push(href),
        replace: (href: AppRoute) => router.replace(href),
    };
}
