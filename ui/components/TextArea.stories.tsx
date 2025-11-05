import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./TextArea";

const meta = {
    title: "Components/Textarea",
    component: Textarea,
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Textarea className="w-full" placeholder="Enter text here" />
    )
}
