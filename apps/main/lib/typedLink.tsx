import Link, { LinkProps } from "next/link";
import { AppRoute } from "./routes";

type TypedLinkProps = Omit<LinkProps, "href"> & {
    children?: React.ReactNode;
    href: AppRoute;
};

export const TypedLink: React.FC<TypedLinkProps> = ({ href,children, ...props }) => {
    return <Link href={href} {...props}>{children}</Link>;
};
