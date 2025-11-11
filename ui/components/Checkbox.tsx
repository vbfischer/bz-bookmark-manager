'use client'

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { IconCheck } from "../icons"
import { cn } from "@/lib/utils"

export const Checkbox = ({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                "peer bg-white text-white border-input",
                // Hover State
                "hover:bg-accent-secondary",

                // Checked State
                "data-[state=checked]:text-white data-[state=checked]:bg-primary ", 
                "focus:shadow-focus-ring", 

                // Invalid State
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", 
                "aria-invalid:border-destructive size-4 shrink-0 rounded-sm border shadow-xs", 

                "transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                data-slot="checkbox-indicator"
                className="grid place-content-center text-current transition-none"
            >
                <IconCheck className="size-3.5" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}