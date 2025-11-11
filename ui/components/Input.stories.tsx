import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta = {
    title: "Components/Input",
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter text",
    }
}

export const WithError: Story = {
    args: {
        value: "Is Error"
    },
    decorators: [
        (Story) => (
            <div className="group" data-invalid="true">
                <Story/>
            </div>
        )
    ]
}