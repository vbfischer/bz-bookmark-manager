import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BookmarkForm } from "./BookmarkForm";
import { Toaster } from "sonner";

const meta = {
    title: "components/forms/BookmarkForm",
    component: BookmarkForm,
    decorators: [
        (Story) => (
            <div>
                <Toaster />
                <Story />
            </div>
        )

    ]
} satisfies Meta<typeof BookmarkForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {}