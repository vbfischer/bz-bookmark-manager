import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavItem } from "./NavItem";
import { IconHome } from "../icons";

const meta = {
    title: "Components/NavItem",
    component: NavItem,
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: <IconHome/>,
        title: "Home",
        href: "#"
    }
}