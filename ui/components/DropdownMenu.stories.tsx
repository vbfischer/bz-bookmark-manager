import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "./DropdownMenu";
import { Button } from "./Button";
import { IconArchive, IconCopy, IconEdit, IconPin, IconVisit } from "../icons";

const meta = {
    title: "Components/DropdownMenu",
    component: DropdownMenu,
    parameters: {
        layout: "centered",
    },
    subcomponents: {
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuCheckboxItem,
    },

} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        return (
            <DropdownMenu open>
                <DropdownMenuTrigger><Button label="Open Menu">Open Menu</Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
}

export const WithIcons: Story = {
    render: () => {
        return (
            <DropdownMenu open>
                <DropdownMenuTrigger asChild><Button label="Open Menu">Open Menu</Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><div className="flex items-center"><IconVisit /></div> <div>Visit</div></DropdownMenuItem>
                    <DropdownMenuItem><div className="flex items-center"><IconCopy /></div> <div>Copy URL</div></DropdownMenuItem>
                    <DropdownMenuItem><div className="flex items-center"><IconPin /></div> <div>Pin</div></DropdownMenuItem>
                    <DropdownMenuItem><div className="flex items-center"><IconEdit /></div> <div>Edit</div></DropdownMenuItem>
                    <DropdownMenuItem><div className="flex items-center"><IconArchive /></div> <div>Archive</div></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
}

export const WithCheckbox: Story = {
    render: () => {
        return (
            <DropdownMenu open>
                <DropdownMenuTrigger><Button label="Open Menu">Open Menu</Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>Recently added</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Recently visited</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Most visited</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
}