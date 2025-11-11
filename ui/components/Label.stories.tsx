import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./Label";

const meta = {
    title: "Components/Label",
    component: Label,
    tags: ['autodocs']
} satisfies Meta<typeof Label>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { 
    args: { 
        children: "Your email address",
        htmlFor: 'email',
    }
}

export const RequiredLabel: Story = {
    args: {
        children: "Required"
    },
    decorators: [
        (Story) => (
            <div className="group" data-required="true">
                <Story/>
            </div>
        )
    ]
}