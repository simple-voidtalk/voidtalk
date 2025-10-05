import Link, { LinkProps } from "next/link";
import { AppRoute } from "./routes";

type TypedLinkProps = Omit<LinkProps, "href"> & {
    href: AppRoute;
};

export const TypedLink: React.FC<TypedLinkProps> = ({ href, ...props }) => {
    return <Link href={href} {...props} />;
};
