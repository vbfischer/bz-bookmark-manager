import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Profile } from "./Profile";

const meta = {
    title: "Components/Profile",
    component: Profile,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Profile>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "John Doe",
        emailAddress: "john.doe@example.com",
    },  
}