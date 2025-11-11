import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Field, FieldDescription, FieldError, FieldLabel } from "./Field";
import { Input } from "./Input";

const meta = {
    title: "Components/Field",
    component: Field,
    tags: ['autodocs']
} satisfies Meta<typeof Field>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Field data-required>
            <FieldLabel htmlFor="fieldId">Label</FieldLabel>
            <Input id="fieldId" placeholder="Enter text here" />
        </Field>
    )
}

export const WithDescription: Story = {
    render: () => ( 
        <Field>
            <FieldLabel htmlFor="fieldId">Label</FieldLabel>
            <Input id="fieldId" placeholder="Enter text here" />
            <FieldDescription>
                This is a description for the field.
            </FieldDescription>
        </Field>
    )
}

export const WithFieldError: Story = {
    render: () => (
        <Field data-invalid>
            <FieldLabel htmlFor="fieldId">Label</FieldLabel>
            <Input id="fieldId" placeholder="Enter text here" />
            <FieldError>
                This is a description for the field.
            </FieldError>
        </Field>
    )
}