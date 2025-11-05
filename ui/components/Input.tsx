import React from 'react';
import clsx from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ isError = false, ...props }, ref) => {
    return (
        <input ref={ref} className={clsx(
            "flex-1 text-[14px] bg-neutral-0 dark:bg-neutral-600 dark:text-neutral-100 p-3",
            "border border-neutral-500 rounded-lg",
            isError && "border-red-800",
            "hover:bg-neutral-100 hover:shadow-hover",
            "dark:hover:bg-neutral-500",
            "focus-visible:outline-hidden",
            "focus:shadow-focus dark:focus:shadow-focus-dark"

        )} {...props} />
    )
});

Input.displayName = "Input"
