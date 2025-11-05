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
                    "bg-teal-700 text-neutral-0 inset-shadow-[0_0_0_1x_rgba(34,38,39,0.12)]",
                    "border-2 border-[rgb(255,255,255,0.12)] dark:border-neutral-dark-400",
                    "hover:bg-teal-800",
                    "focus:[box-shadow:0_0_0_1px_rgba(10,13,18,0.18)_inset,0_0_0_2px_#FFF,0_0_0_4px_#014745]"
                ],
                secondary: [
                    "bg-neutral-0 text-neutral-900 dark:bg-neutral-dark-800 dark:text-neutral-0",
                    "border border-neutral-400",
                    "hover:bg-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-dark-500 dark:hover:bg-neutral-dark-600",
                    "focus:border-neutral-300 dark:focus:border-neutral-dark-500 dark:focus:bg-neutral-dark-800",
                    "focus:[box-shadow:0_0_0_1px_rgba(10,13,18,0.18)_inset,0_0_0_2px_#FFF,0_0_0_4px_#014745]",
                    "dark:focus:[box-shadow:0_0_0_1px_rgba(10,13,18,0.18)_inset,0_0_0_2px_#001F1F,0_0_0_4px_#B1B9B9]",
                    "active:border-teal-700 dark:active:border-neutral-0"
                ],

            },
            size: {
                sm: "px-[12px] py-[10px]",
                md: "px-[16px] py-[12px]",
                icon: "flex justify-center items-center p-0 w-[32px] h-[32px]"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        },
        compoundVariants: [
            {
                variant: ["primary", "secondary"],
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
