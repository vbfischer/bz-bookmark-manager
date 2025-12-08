'use client'

import { Checkbox } from "./Checkbox";
import { Item } from "./Item";
import { Count } from "./Count";
import { ItemActions, ItemContent, ItemDescription } from "./Item";

export const TagItem = ({ 
    name, 
    count, 
    checked,
    onCheckedChange, 
    ...props }: React.ComponentProps<typeof Item> & { name: string; count: number; checked: boolean; onCheckedChange: (checked: boolean) => void }) => {
    return (
        <Item {...props}>
            <ItemActions>
                <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
            </ItemActions>
            <ItemContent>
                <ItemDescription>{name}</ItemDescription>
            </ItemContent>
            <ItemContent>
                <ItemDescription>
                    <Count label={count} />
                </ItemDescription>
            </ItemContent>
        </Item>
    )
}