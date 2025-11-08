'use client'

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"
import { IconCheck } from "../icons"
import {useTheme} from 'next-themes';

export const DropdownMenu = ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) => {
    return (
        <DropdownMenuPrimitive.Root data-slot="dropdown-menu-portal" {...props} />
    )
}

export const DropdownMenuPortal = ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) => {
    return (
        <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
    )
}

export const DropdownMenuTrigger = ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => {
    return (
        <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
    )
}

export const DropdownMenuContent = ({
    className,
    sideOffset = 4,
    align = 'start',
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
    const {theme} = useTheme();

    console.log('THEME', theme)
    return (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                data-slot="dropdown-menu-content"
                sideOffset={sideOffset}
                align={align}
                className={cn(
                    [
                        // Layout & Positioning
                        "z-50 min-w-[200px] max-h-(--radix-dropdown-menu-content-available-height)",
                        "origin-(--radix-dropdown-menu-content-transform-origin)",
                        "overflow-x-hidden overflow-y-auto",
                        "flex flex-col gap-1",

                        // Appearance
                        "rounded-lg border p-2 border-neutral-100",
                        "bg-neutral-0 text-neutral-800 dark:bg-neutral-dark-600 dark:text-neutral-dark-100",
                        "shadow-dropdown text-[14px] *:rounded-md",
                        "*:bg-neutral-0 dark:*:bg-neutral-dark-600",

                        // Animations - Open/Close States
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",

                        // Animations - Directional Slides
                        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
                        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                    ],
                    className
                )}
                {...props}
            />
        </DropdownMenuPrimitive.Portal>
    )
}

export const DropdownMenuGroup = ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) => {
    return (
        <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
    )
}

export const DropdownMenuItem = ({
    className,
    inset,
    variant = "default",
    ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean; variant?: "default" | "destructive" }) => {
    return (
        <DropdownMenuPrimitive.Item
            data-slot="dropdown-menu-item"
            data-inset={inset}
            data-variant={variant}
            className={cn(
                [
                    // Layout & Interaction
                    "select-none outline-hidden p-2",
                    "flex gap-2.5 [&_svg]:size-4 content-center h-9",
                    "cursor-default",
                    
                    // States
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-disabled:pointer-events-none"
                ],
                className
            )}
            {...props}
        />
    )
}

export const DropdownMenuCheckboxItem = ({
    className,
    children,
    checked,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => {
    return (
        <DropdownMenuPrimitive.CheckboxItem
            data-slot="dropdown-menu-checkbox-item"
            className={cn(
                [
                    // Layout & Positioning
                    "relative flex items-center gap-2",
                    "py-1.5 pr-2 pl-2",

                    // Typography
                    "text-sm",

                    // Interaction & States
                    "cursor-default select-none outline-hidden",
                    "focus:bg-accent focus:text-accent-foreground",

                    // Visual Styling
                    "rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-dark-800 cursor-default",

                    // Disabled States
                    "data-disabled:pointer-events-none data-disabled:opacity-50",

                    // Child Element Styling
                    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
                    "[&_svg:not([class*='size-'])]:size-4"
                ],
                className
            )}
            checked={checked}
            {...props}
        >
            {children}
            <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <IconCheck className="size-4" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>

        </DropdownMenuPrimitive.CheckboxItem>
    )
}
