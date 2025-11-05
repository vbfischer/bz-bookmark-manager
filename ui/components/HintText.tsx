import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const hintTextVariants = cva(
    "flex gap-100 text-neutral-800",
    {
        variants: {
            variant: {
                default: "dark:text-neutral-100",
                error: "text-red-800 dark:text-red-600"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface HintTextProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof hintTextVariants> { }


export const HintText = ({ className, variant, ...props }: HintTextProps) => {
    return (
        <span className={clsx(hintTextVariants({ variant, className }))} {...props} />
    )
}