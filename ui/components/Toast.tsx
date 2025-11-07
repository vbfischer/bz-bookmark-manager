import { cn } from "@/lib/utils";
import { IconCheck, IconClose } from "../icons";
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "./Item";
import { toast as sonnerToast } from 'sonner';

export const toast = (toast: Omit<ToastProps, 'id'>) => {
    return sonnerToast.custom((id) => (
        <Toast
            id={id}
            title={toast.title}
            description={toast.description}
            button={{
                onClick: () => console.log('Button clicked'),
            }}
        />
    ))
}
export const Toast = ({ id, title, button }: ToastProps) => {
    return (
        <Item >
            <ItemMedia variant="icon">
                <IconCheck />
            </ItemMedia>
            <ItemContent>
                <ItemTitle>
                    {title}
                </ItemTitle>
            </ItemContent>
            <ItemActions>
                <button className={cn(
                    "text-teal-800"
                )}
                    onClick={() => {
                        button.onClick();
                        sonnerToast.dismiss(id)
                    }}>
                    <IconClose className="size-4 text-neutral-900" />
                </button>
            </ItemActions>
        </Item>
    )
}

export interface ToastProps {
    id: string | number;
    title: string;
    description: string;
    button: {
        onClick: () => void;
    };
}