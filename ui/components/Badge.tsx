import { cn } from "@/lib/utils"

export const Badge = ({className, ...props}: React.ComponentProps<"span">) => {
    return (
        <span 
            data-slot="badge"
            className={cn(
                "py-0.5 px-2",
                "text-[12px] bg-badge-background rounded-sm",
               className 
            )}
            {...props}
        />
    )
}