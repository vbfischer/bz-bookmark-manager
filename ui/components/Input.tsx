import React from 'react';
import clsx from 'clsx'
import { HintText } from './HintText';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    hintText?: string;
    errorText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ labelText, hintText, contentLeft, errorText, contentRight, ...props }, ref) => {
    return (
        <div className={clsx("flex flex-col gap-1.5")}>
            {labelText && (
                <label className={clsx("text-[14px] font-semibold")}>{labelText}</label>
            )}
            <div className={
                clsx(
                    "inline-flex p-3",
                    "border border-neutral-500 rounded-lg"
                )
            }>
                {contentLeft && (<div>{contentLeft}</div>)}
                <input ref={ref} className={clsx(
                    "flex-1 text-[14px]",
                    "bg-neutral-0 dark:bg-neutral-600"
                )} {...props} />
                {contentRight && (<div>{contentRight}</div>)}
            </div>

            {
                hintText && (
                    <HintText>{hintText}</HintText>
                )
            }

            {
                errorText && (
                    <HintText variant="error">{errorText}</HintText>
                )
            }
        </div>
    )
});

Input.displayName = "Input"
