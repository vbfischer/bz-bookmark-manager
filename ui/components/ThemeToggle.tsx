'use client'

import { cn } from '@/lib/utils';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { IconDarkTheme, IconLightTheme } from '../icons';
import { useTheme } from 'next-themes';

export const ThemeToggle = ({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) => {
    const {theme, setTheme} = useTheme();

    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            className={cn(
                "peer group relative p-0.5",
                "bg-toggle-unchecked border-transparent",
                "data-[state=checked]:bg-toggle-checked",
                "inline-flex h-[30px] w-16 shrink-0 items-center",
                "rounded-sm border shadow-xs",
                "transition-all outline-none",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <div className={cn(
                "fixed z-40 w-[60px] flex justify-around [&>svg]:size-3.5",
                "[&>svg]:group-data-[state=checked]:text-white"
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
                    "data-[state=unchecked]:bg-toggle-thumb-unchecked", 
                    "data-[state=checked]:bg-toggle-thumb-checked",
                    "pointer-events-none block w-[30px] h-[26px] rounded-sm ring-0",
                    "transition-transform",
                    "data-[state=checked]:translate-x-[calc(100%-2px)]",
                    "data-[state=unchecked]:translate-x-0"
                )}
            />
        </SwitchPrimitive.Root>
    )
}