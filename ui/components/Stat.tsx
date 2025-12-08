import { cn } from "@/lib/utils"

export const Stat = ({ icon, value, className, ...props }: React.ComponentProps<"span"> & {
    icon: React.ReactNode,
    value: string | number,
}) => {
    return (
        <span className={cn(
            "flex gap-1.5 items-center",
            className
        )}
            {...props}
        >{icon} {`${value}`}</span>
    )
}