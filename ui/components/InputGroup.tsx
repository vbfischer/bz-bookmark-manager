import { cn } from "@/lib/utils"
import { Input } from "./Input"
import { cva, VariantProps } from "class-variance-authority"

export const InputGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="input-group"
            role="group"
            className={cn(
                "group/input-group border-input relative flex w-full items-center rounded-md border transition-[color,box-shadow] outline-none",
                "bg-neutral-0 dark:bg-neutral-dark-600 hover:bg-neutral-100 p-1 dark:text-neutral-dark-100 dark:placeholder:text-neutral-dark-100 dark:hover:bg-neutral-dark-500",
                "min-w-0 has-[>textarea]:h-auto",
                // Variants based on alignment.
                "has-[>[data-align=inline-start]]:[&>input]:pl-2",
                "has-[>[data-align=inline-end]]:[&>input]:pr-2",
                "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
                "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
                // Focus state.
                "has-[[data-slot=input-group-control]:focus-visible]:border-neutral-500 has-[[data-slot=input-group-control]:focus-visible]:shadow-focus",
                // Error state.
                "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
                // Group Addons
                className
            )}
            {...props}
        />
    )
}

export const InputGroupInput = ({ className, ...props }: React.ComponentProps<"input">) => {
    return (
        <Input
            data-slot="input-group-control"
            className={
                cn(
                    "flex-1 focus:shadow-none dark:focus:shadow-none rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",

                    className
                )
            }
            {...props}
        />
    )
}

const inputGroupAddonVariants = cva(
    "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-[20px] [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
    {
        variants: {
            align: {
                "inline-start":
                    "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
                "inline-end":
                    "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
                "block-start":
                    "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
                "block-end":
                    "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
            },
        },
        defaultVariants: {
            align: "inline-start",
        },
    }
)

export const InputGroupAddon = ({ className, align = "inline-start", ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) => {
    return (
        <div
            role="group"
            data-slot="input-group-addon"
            data-align={align}
            className={cn(inputGroupAddonVariants({ align }), className)}
            onClick={(e) => {
                if ((e.target as HTMLElement).closest("button")) {
                    return
                }
                e.currentTarget.parentElement?.querySelector("input")?.focus()
            }}
            {...props}
        />
    )
}