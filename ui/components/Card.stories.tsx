import { Meta } from "@storybook/nextjs-vite";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";

const meta = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

export const Default = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>This is the title</CardTitle>
                    <CardDescription>This is the description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>This is the content for now</div>
                </CardContent>
                <CardFooter>
                    Footer
                </CardFooter>
            </>
        )
    }
}