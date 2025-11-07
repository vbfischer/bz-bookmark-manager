import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "./Separator";

const meta = {
    title: 'Components/Separator',
    component: Separator,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
    },
};

export const Vertical: Story = {
    args: {
        className: "h-screen",
        orientation: 'vertical',
    },
};