import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AddBookmarkModal } from "./AddBookmarkModal";
import { Button } from "./Button";

const meta = {
    title: 'Components/AddBookmarkModal',
    component: AddBookmarkModal,
    tags: ['autodocs'],
} satisfies Meta<typeof AddBookmarkModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <AddBookmarkModal open>
            <Button label="Open Add Bookmark Modal" />
        </AddBookmarkModal>
    )
}