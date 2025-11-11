import { Button } from "./Button"
import { Dialog, DialogTitle, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./Dialog"

export const AddBookmarkModal = ({ children, ...props }: React.ComponentProps<typeof Dialog>) => {
    return (
        <Dialog {...props}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Bookmark</DialogTitle>
                    <DialogDescription>Save a link with details to keep your collection organized.</DialogDescription>
                </DialogHeader>
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