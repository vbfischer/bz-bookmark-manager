import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card"
            className={cn(
                // Layout & Flex
                "flex flex-col gap-6",
                // Spacing
                "p-4",
                // Border & Radius
                "rounded-xl",
                // Background & Text
                "bg-card text-card-foreground",
                // Shadow
                "shadow-card",
                className
            )}
            {...props}
        />
    )
}

export const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card-header"
            className={cn(
                // Container Query
                "@container/card-header",
                // Grid Layout
                "grid auto-rows-min grid-rows-[auto_auto] has-data-[slot=card-action]:grid-cols-[1fr_auto]",
                // Alignment & Spacing
                "items-start gap-2 px-6",
                // Border & Padding
                "[.border-b]:pb-6",
                className
            )}
            {...props}
        />
    )
}
export const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card-title"
            className={cn("text-secondary-foreground leading-none font-bold text-[24px]", className)}
            {...props}
        />
    )
}

export const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card-description"
            className={cn("text-foreground text-sm", className)}
            {...props}
        />
    )
}

export const CardAction = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

export const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    )
}

export const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props}
        />
    )
}