import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "./Item";
import { IconArchive } from "../icons";
import { Count } from "./Count";

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
            <div className="bg-neutral-100 p-8">
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
                                <Count label="6"/>
                            </ItemDescription>
                        </ItemContent>
                    </a>
                </Item>
            </div>
        )
    }
}
