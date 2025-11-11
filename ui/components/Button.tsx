'use client'

import React from 'react'
import { cva, VariantProps } from "class-variance-authority";
import { clsx } from 'clsx';

const buttonVariants = cva(
    [
        "rounded-lg cursor-pointer",
        "text-[16px] font-semibold",
        "[&>svg]:w-5 [&>svg]:h-5"
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-primary text-primary-foreground shadow-button",
                    "border-2 border-background/12",
                    "hover:bg-teal-800",
                    "focus:shadow-focus-ring"
                ],
                secondary: [
                    "bg-secondary text-secondary-foreground",
                    "border border-secondary-btn-border",
                    "hover:bg-accent-secondary hover:border-secondary-btn-border-accent",
                    "focus:border-neutral-300 dark:focus:border-neutral-dark-500 dark:focus:bg-neutral-dark-800",
                    "focus:shadow-focus-ring",
                    "active:border-secondary-btn-active"
                ],
                destructive: [
                    "bg-destructive text-primary-foreground shadow-button",
                    "border-2 border-background/12",
                    "focus:shadow-focus-ring-destructive"

                ]
            },
            size: {
                sm: "px-3 py-2.5",
                md: "px-4 py-3",
                icon: "flex justify-center items-center p-0 w-8 h-8"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        },
        compoundVariants: [
            {
                variant: ["primary", "secondary", "destructive"],
                size: ["sm", "md"],
                class: [
                    "flex justify-center items-center gap-1 py-2.5 px-3",

                ]
            }
        ]
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    label?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, label, contentLeft, contentRight, ...props }, ref) => {
        return (
            <button
                className={clsx("", buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {contentLeft && <>{contentLeft}</>}
                {label && <>{label}</>}
                {contentRight && <>{contentRight}</>}
            </button>
        )
    }
)
Button.displayName = "Button"
