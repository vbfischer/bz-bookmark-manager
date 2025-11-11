import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "next-themes";

const meta = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
    argTypes: {
        onCheckedChange: { action: "is checked" }
    },
    decorators: [
        (Story) => (
            <ThemeProvider attribute="data-theme" enableSystem={false}>
                <Story />
            </ThemeProvider>
        )

    ]
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
}

export const DefaultChecked: Story = {
    args: {
        defaultChecked: true,
    },
}