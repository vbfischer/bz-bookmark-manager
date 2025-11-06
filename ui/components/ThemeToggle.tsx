import { cn } from '@/lib/utils';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { IconDarkTheme, IconLightTheme } from '../icons';

export const ThemeToggle = ({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) => {
    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            className={cn(
                "peer group relative p-0.5",
                "data-[state=checked]:bg-neutral-dark-500",
                "data-[state=unchecked]:bg-neutral-300",
                "focus-visible:border-ring",
                "focus-visible:ring-ring/50",
                "dark:data-[state=unchecked]:bg-input/80",
                "inline-flex h-[30px] w-16 shrink-0 items-center",
                "rounded-sm border border-transparent shadow-xs",
                "transition-all outline-none",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <div className={cn(
                "fixed z-40 w-[60px] flex justify-around [&>svg]:size-3.5",
                "[&>svg]:group-data-[state=checked]:text-neutral-0"
            )}>
                <IconLightTheme className={cn(
                    ' left-[18px]',
                )}
                />
                <IconDarkTheme className={cn(
                    ' left-[50px]',

                )} />
            </div>
            <SwitchPrimitive.Thumb
                data-slot="switch-thumb"
                className={cn(
                    "bg-neutral-0",
                    "data-[state=unchecked]:bg-neutral-0 data-[state=checked]:bg-neutral-dark-600",
                    "dark:data-[state=unchecked]:bg-neutral-dark-0",
                    "dark:data-[state=checked]:bg-primary-dark-600",
                    "pointer-events-none block w-[30px] h-[26px] rounded-[4px] ring-0",
                    "transition-transform",
                    "data-[state=checked]:translate-x-[calc(100%-2px)]",
                    "data-[state=unchecked]:translate-x-0"
                )}
            />
        </SwitchPrimitive.Root>
    )
}