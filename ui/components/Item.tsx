import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

import { cva, VariantProps } from "class-variance-authority"
import { Separator } from "./Separator"

export const ItemGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            role="list"
            data-slot="item-group"
            className={cn("group/item-group flex flex-col", className)}
            {...props}
        />
    )
}

export const Item = ({ className, asChild = false, ...props }: React.ComponentProps<"div"> & { asChild?: boolean }) => {
    const Comp = asChild ? Slot : "div"

    return (
        <Comp
            data-slot="item"
            className={cn(
                // Layout & Flexbox
                "group/item flex items-center flex-wrap gap-2",
                // Sizing & Spacing
                "py-2 px-3",
                // Color & Background
                "bg-background text-foreground text-sm ",
                // Border & Border Radius
                "border border-transparent rounded-md",
                // Hover
                "hover:bg-accent-secondary",
                // Active
                "active:bg-accent-secondary",
                // Focus & Ring
                "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                // Transitions & Animations
                "transition-colors duration-100",
                // Hover States
                "[a]:hover:bg-accent/50 [a]:transition-colors",
                className
            )}
            {...props}
        />
    )
}

const itemMediaVariants = cva(
    [
        // Layout & Positioning
        "flex shrink-0 items-center justify-center",
        // Sizing & Spacing
        "gap-2",
        // Transforms & Positioning
        "group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5",
        // Pointer Events
        "[&_svg]:pointer-events-none",
    ],
    {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "size-4 [&_svg:not([class*='size-'])]:size-5",
                image:
                    "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const ItemMedia = ({ className, variant = "default", ...props }: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) => {
    return (
        <div
            data-slot="item-media"
            data-variant={variant}
            className={cn(itemMediaVariants({ variant, className }))}
            {...props}
        />
    )
}

export const ItemContent = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-content"
            className={cn(
                "flex flex-1 gap-1 flex-col",
                "[&+[data-slot=item-content]]:flex-none",
                className
            )}
            {...props}
        />
    )
}

export const ItemTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-title"
            className={cn(
                "flex w-fit items-center gap-2 text-sm leading-snug font-semibold text-[16px]",
                className
            )}
            {...props}
        />
    )
}

export const ItemDescription = ({ className, ...props }: React.ComponentProps<"p">) => {
    return (
        <p
            data-slot="item-description"
            className={cn(
                "text-neutral-800 line-clamp-2 text-sm leading-normal font-normal text-balance",
                "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                className
            )}
            {...props}
        />
    )
}

export const ItemActions = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-actions"
            className={cn("flex items-center gap-2", className)}
            {...props}
        />
    )
}

export const ItemHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-header"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    )
}

export const ItemFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="item-footer"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    )
}

export const ItemSeparator = ({ className, ...props }: React.ComponentProps<typeof Separator>) => {
    return (
        <Separator
            data-slot="item-separator"
            orientation="horizontal"
            className={cn("my-0", className)}
            {...props}
        />
    )
}