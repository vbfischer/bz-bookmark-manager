import { cn } from "@/lib/utils"
import { Item, ItemContent, ItemDescription, ItemMedia } from "./Item"
import Link from "next/link";

export const NavItem = ({ className, icon, title, active = false, href, ...props }: React.ComponentProps<typeof Item> & {
    icon?: React.ReactNode,
    title: string,
    href: string,
    active?: boolean
}) => {
    return (
        <Item className={cn(
            "text-secondary-foreground",
            active && "bg-accent-secondary text-accent-foreground",
            className
        )}
            asChild
            {...props}
        >
            <Link href={href} className={cn(
            )}>
                <ItemMedia variant="icon">
                    {icon}
                </ItemMedia>
                <ItemContent>
                    <ItemDescription>{title}</ItemDescription>
                </ItemContent>
            </Link>
        </Item>
    )
}