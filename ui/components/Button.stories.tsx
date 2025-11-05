import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { IconAdd } from "@/ui/icons";


const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: false,
            table: { disable: true }
        },
        size: {
            control: 'inline-radio',
            options: ['sm', 'md']
        },
        contentLeft: {
            control: false,
            table: { disable: true }
        },
        contentRight: {
            control: false,
            table: { disable: true }
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        variant: "primary",
        size: "md",
        label: "Primary Button"
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        size: "md",
        label: "Secondary Button"
    }
}

export const IconLeft: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        label: 'Icon Button',
        contentLeft: <IconAdd />
    }
}

export const IconRight: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        label: 'Icon Button',
        contentRight: <IconAdd />
    }
}

export const IconOnly: Story = {
    args: {
        variant: 'secondary',
        size: 'icon',
        contentLeft: <IconAdd />,
    },
    argTypes: {
        label: {
            control: false,
            table: { disable: true }
        }
    }
}