import { Meta } from "@storybook/nextjs-vite";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./InputGroup";
import { IconSearch } from "../icons";

const meta = {
    title: "Components/InputGroup",
    component: InputGroup,
} satisfies Meta<typeof InputGroup>

export default meta;

type Story = Meta<typeof meta>;

export const Default: Story = {
    render: () => (
        <InputGroup>
            <InputGroupInput placeholder="Enter text here" />
            <InputGroupAddon>
                <IconSearch />
            </InputGroupAddon>
        </InputGroup>
    )
}

export const AddonRight: Story = {
    render: () => (
        <InputGroup>
            <InputGroupInput placeholder="Enter text here" />
            <InputGroupAddon align="inline-end">
                <IconSearch />
            </InputGroupAddon>
        </InputGroup>
    )
}