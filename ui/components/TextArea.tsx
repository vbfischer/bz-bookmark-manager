import { cn } from "@/lib/utils"

export const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex-1 text-[14px] p-3",
                "bg-neutral-0 dark:bg-neutral-dark-600",
                "dark:text-neutral-dark-100",
                "border border-neutral-500 rounded-lg",
                "hover:bg-neutral-100 hover:shadow-hover dark:hover:shadow-hover-dark",
                "dark:hover:bg-neutral-dark-500",
                "focus-visible:outline-hidden",
                "focus:shadow-focus dark:focus:border-neutral-dark-600 dark:focus:shadow-focus-dark",
                className
            )}
            {...props}
        />
    )
}