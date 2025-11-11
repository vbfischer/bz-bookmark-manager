'use client'
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { IconClose } from "../icons";
import { Button } from "./Button";

export const Dialog = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) => {
    return <DialogPrimitive.Root data-slot="dialog-root" {...props} />;
}

export const DialogTrigger = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export const DialogPortal = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

export const DialogClose = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => {
    return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export const DialogOverlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
    return (
        <DialogPrimitive.Overlay
            data-slot="dialog-overlay"
            className={cn(
                // Position & Layout
                "fixed inset-0",
                // Z-Index
                "z-50",
                // Appearance
                "bg-overlay/50",
                // Animations & Transitions
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                className
            )}
            {...props}
        />
    )
}

export const DialogContent = ({
    className,
    children,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}) => {
    return (
        <DialogPortal data-slot="dialog-portal">
            <DialogOverlay />
            <DialogPrimitive.Content
                onOpenAutoFocus={(event) => event.preventDefault()}
                data-slot="dialog-content"
                className={cn(
                    // Position & Transform
                    "fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-100",

                    // Layout & Sizing
                    "flex flex-col max-w-lg w-full gap-8 p-8",

                    // Appearance
                    "bg-background text-foreground rounded-2xl",

                    // Animations & Transitions
                    "duration-200",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                    "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",

                    // Responsive
                    "sm:max-w-lg",

                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-slot="dialog-close"
                        className={cn(
                            // Position & Transform
                            "absolute top-4 right-4",
                            // Layout & Sizing
                            "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
                            // Appearance
                            "rounded-xs opacity-70",
                            // Interactions & States
                            "transition-opacity hover:opacity-100",
                            "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            "disabled:pointer-events-none [&_svg]:pointer-events-none",
                            // Focus & Accessibility
                            "ring-offset-background focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
                        )}
                    >
                        <Button size="icon" variant="secondary" contentLeft={<IconClose/>}/>
                        <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPortal>
    )
}

export const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="dialog-header"
            className={cn(
                "flex flex-col gap-2",
                className
            )}
            {...props}
        />
    )
}

export const DialogTitle = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn(
                "text-[24px] leading-none font-bold",
                "text-secondary-foreground",
                className
            )}
            {...props}
        />
    )
}

export const DialogDescription = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) => {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn(
                "text-foreground text-[14px]",
                className
            )}
            {...props}
        />
    )
}

export const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="dialog-footer"
            className={cn(
                "flex flex-col-reverse gap-4 sm:flex-row sm:justify-end",
                className
            )}
            {...props}
        />
    )
}