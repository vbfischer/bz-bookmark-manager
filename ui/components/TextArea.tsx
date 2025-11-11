import { cn } from "@/lib/utils"

export const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex-1 text-[14px] p-3",
                "bg-background text-foreground placeholder:text-foreground",
                "border border-input rounded-lg",
                "hover:bg-accent-secondary hover:shadow-xs",
                "focus-visible:outline-hidden",
                "focus:shadow-focus-ring",
                className
            )}
            {...props}
        />
    )
}