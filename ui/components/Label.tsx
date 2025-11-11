import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

export const Label = ({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        // Color
        "text-secondary-foreground",
        // Layout
        "flex items-center gap-2",
        // Typography
        "text-sm font-medium leading-none",
        // Interactivity
        "select-none",
        // Disabled states
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        // Required
        "group-data-[required=true]:after:content-['_*']",
        className
      )}
      {...props}
    />
  )
}