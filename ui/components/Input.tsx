import React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({className, ...props }, ref) => {
    return (
        <input ref={ref} className={cn(
            "flex-1 text-[14px] p-3", 
            "bg-background text-foreground placeholder:text-foreground",
            "border border-input rounded-lg",
            "hover:bg-accent-secondary hover:shadow-xs",
            "focus-visible:outline-hidden",
            "focus:shadow-focus-ring",
            "group-data-[invalid=true]:border-destructive",
            className
        )} {...props} />
    )
});

Input.displayName = "Input"
