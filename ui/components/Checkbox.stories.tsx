import { Meta } from "@storybook/nextjs-vite";
import { Checkbox } from "./Checkbox";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = Meta<typeof meta>;

export const Default: Story = {
    args: {
        
    }
}