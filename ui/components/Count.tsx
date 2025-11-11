import { cn } from "@/lib/utils"

export const Count = ({ className, label, ...props }: React.ComponentProps<"span"> & { label?: string | number }) => {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center",
                "px-2 py-0.5 text-xs font-medium",
                "min-w-6 min-h-6",
                "bg-badge text-badge-foreground",
                "rounded-full border border-badge-border",
                "hover:border-badge-border-accent",
                className
            )}
            {...props}
        >{label}</span>
    )
}