import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

const meta = {
    title: "Components/Avatar",
    component: Avatar,
    subcomponents: {
        AvatarImage,
        AvatarFallback
    }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    render: () => {
        return (
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        )
    }
}

export const WithOpen: Story = {
    render: () => {
        return (
            <div className="group" data-state="open">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
        )
    }
}

export const WithFallback: Story = {
    render: () => {
        return (
            <Avatar>
                <AvatarImage src="" alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        )
    }
}