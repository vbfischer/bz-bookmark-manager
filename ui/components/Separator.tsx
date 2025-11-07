import { cn } from '@/lib/utils';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Separator = ({
    className,
    orientation = "horizontal",
    decorative = true,
    ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) => {
    return (
        <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn(
                // Layout & Sizing
                "shrink-0",
                // Background
                "bg-neutral-300 dark:bg-neutral-dark-500",
                // Horizontal orientation
                "data-[orientation=horizontal]:h-px",
                "data-[orientation=horizontal]:w-full",
                // Vertical orientation  
                "data-[orientation=vertical]:w-px",
                "data-[orientation=vertical]:h-full",
                className
            )}
            {...props}
        />
    )
}