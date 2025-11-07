import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Count } from "./Count";

const meta = {
    title: 'Components/Count',
    component: Count,
    tags: ['autodocs'],
} satisfies Meta<typeof Count>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 6 
    }
}