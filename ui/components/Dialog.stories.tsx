import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dialog, DialogTitle, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./Dialog";
import { Button } from "./Button";

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dialog open>
            <DialogTrigger asChild>
                <Button label="Open Dialog" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a description of the dialog content.</DialogDescription>
                </DialogHeader>
                <div>This is the dialog content.</div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary" label="Cancel" />
                    </DialogClose>
                    <Button variant="primary" label="Confirm" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}