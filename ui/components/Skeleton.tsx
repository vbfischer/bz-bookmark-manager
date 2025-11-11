import { cn } from "@/lib/utils"

export const Skeleton = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="skeleton"
            className={cn("bg-accent-secondary animate-pulse rounded-full", className)}
            {...props}
        />
    )
}