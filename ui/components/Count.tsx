import { cn } from "@/lib/utils"

export const Count = ({ className, label, ...props }: React.ComponentProps<"span"> & { label?: string | number }) => {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center",
                "px-2 py-0.5 text-xs font-medium",
                "min-w-6 min-h-6",
                "bg-neutral-100 dark:bg-neutral-dark-600",
                "text-neutral-800 dark:text-neutral-0",
                "rounded-full border border-neutral-300 dark:border-neutral-dark-400",
                "hover:border-neutral-400 hover:text-neutral-900",
                "active:border-neutral-400 active:text-neutral-900",
                className
            )}
            {...props}
        >{label}</span>
    )
}