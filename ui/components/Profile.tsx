import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/components/Avatar";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "./Item"
import { cn } from "@/lib/utils";
import { IconLogout, IconTheme } from "../icons";
import { ThemeToggle } from "./ThemeToggle";

export interface ProfileProps {
    name: string;
    emailAddress: string;
}

export const Profile = ({ className, name, emailAddress, ...props }: React.ComponentProps<typeof ItemGroup> & ProfileProps) => {
    return (
        <ItemGroup className={cn(
            "bg-background rounded-lg",
            "text-foreground",
            "border border-accent-secondary shadow-dropdown",
            className
        )}
            {...props}
        >
            <Item className={cn(
                "flex items-center gap-3 p-4",
            )}>
                <ItemMedia>
                    <Avatar className="size-10">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                    <ItemTitle>{name}</ItemTitle>
                    <ItemDescription>{emailAddress}</ItemDescription>
                </ItemContent>
            </Item>
            <ItemSeparator/>
            <Item className="p-2 mx-2 my-1.5 ">
                <ItemMedia variant="icon">
                    <IconTheme />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Theme</ItemTitle>
                </ItemContent>
                <ItemActions>
                    <ThemeToggle/>
                </ItemActions>
            </Item>
            <ItemSeparator/>
            <Item className="p-2 mx-2 my-1.5">
                <ItemMedia variant="icon">
                    <IconLogout/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Logout</ItemTitle>
                </ItemContent>
            </Item>
        </ItemGroup>
    )
}