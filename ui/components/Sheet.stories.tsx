import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./Sheet";
import { Button } from "./Button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./Input";

const meta = {
    title: "components/Sheet",
    component: Sheet
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        return (
            <Sheet>
                <SheetTrigger asChild>
                    <Button label="Edit" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>SHeet Title</SheetTitle>
                        <SheetDescription>Sheet description</SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">Name</Label>
                            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Username</Label>
                            <Input id="sheet-demo-username" defaultValue="@peduarte" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit" label="Save Changes" />
                        <SheetClose asChild>
                            <Button variant="secondary" label="Close" />
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        )
    }
}