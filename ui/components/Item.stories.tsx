import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ItemGroup, Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, ItemHeader, ItemFooter, ItemActions } from "./Item";
import { IconArchive } from "../icons";
import { Count } from "./Count";
import { Checkbox } from "./Checkbox";

const meta = {
    title: "Components/Item",
    component: Item,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            options: {
                gray: { name: 'Gray', value: '#CCC' },
            }
        }
    }
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        return (
            <Item>
                <ItemContent>
                    <ItemTitle>Basic Item</ItemTitle>
                    <ItemDescription>
                        A simple item with title and description.
                    </ItemDescription>
                </ItemContent>
            </Item>
        )
    }
}

export const WithMedia: Story = {
    render: () => {
        return (
            <Item asChild className="w-[280px]">
                <a href="#">
                    <ItemMedia variant="icon">
                        <IconArchive />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                    </ItemContent>
                    <ItemContent>
                        <ItemDescription>
                            <Count label="6" />
                        </ItemDescription>
                    </ItemContent>
                </a>
            </Item>
        )
    }
}

export const WithItemGroup: Story = {
    render: () => {
        return (
            <ItemGroup className="w-[280px] gap-2">
                <Item>
                    <ItemContent>
                        <ItemTitle>Item 1</ItemTitle>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemContent>
                        <ItemTitle>Item 2</ItemTitle>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemContent>
                        <ItemTitle>Item 3</ItemTitle>
                    </ItemContent>
                </Item>
            </ItemGroup>
        )
    }
}

export const WithItemHeaderAndFooter: Story = {
    render: () => {
        return (
            <Item>
                <ItemHeader>Header</ItemHeader>
                <ItemContent>
                    <ItemTitle>Title</ItemTitle>
                </ItemContent>
                <ItemFooter>Footer</ItemFooter>
            </Item>
        )
    }
}

export const WithActionItem: Story = {
    render: () => {
        return (
            <Item>
                <ItemActions>
                   <Checkbox/> 
                </ItemActions>
                <ItemContent>
                    <ItemTitle>Title</ItemTitle>
                </ItemContent>
            </Item>
        )
    }
}