import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast, toast } from "./Toast";
import { Button } from "./Button";
import { Toaster } from "sonner";

const meta = {
    title: 'Components/Toast',
    component: Toast,
    decorators: [
        Story => (
            <div>
                <Story/>
                <Toaster position="top-right"/>
            </div>
        )
    ]
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "1",
        title: "Toast Title",
        description: "Toast Description",
        button: {
            onClick: () => console.log("Button clicked"),
        },
    },

    render: ({ title, description, button }) => {
        return (
            <Button
                onClick={
                    () => {
                        toast({
                            title,
                            description,
                            button
                        })
                    }
                }
                label="Render Toast"
            />
        )
    }
}