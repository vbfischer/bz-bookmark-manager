import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ isError = false, ...props }, ref) => {
    return (
        <input ref={ref} className={cn(
            "flex-1 text-[14px] p-3", 
            "bg-neutral-0 dark:bg-neutral-dark-600",
            "dark:text-neutral-dark-100",
            "border border-neutral-500 rounded-lg",
            "hover:bg-neutral-100 hover:shadow-hover dark:hover:shadow-hover-dark",
            "dark:hover:bg-neutral-dark-500",
            "focus-visible:outline-hidden",
            "focus:shadow-focus dark:focus:border-neutral-dark-600 dark:focus:shadow-focus-dark",
            isError && "border-red-800",

        )} {...props} />
    )
});

Input.displayName = "Input"
