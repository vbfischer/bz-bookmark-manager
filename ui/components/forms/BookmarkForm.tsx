import { useForm } from "@tanstack/react-form"

import * as z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../Field";
import { Input } from "../Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../Card";
import { cn } from "@/lib/utils";
import { toast } from "../Toast";
import { Button } from "../Button";
import { Textarea } from "../TextArea";
import { useSession } from "@/lib/auth-client";

const bookmarkSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).max(100),
    description: z.string().min(1, { message: "Description is required" }).max(500),
    url: z.httpUrl().min(1, { message: "URL is required" }),
    tags: z.string().min(1, { message: "At least one tag is required" }).transform(t => {
        const vals = t.split(',');
        return vals.map(v => v.trim());
    }).pipe(
        z.array(z.string()).min(1, { message: "At least one tag is required" })
    )
});

export const BookmarkForm = () => {
    const session = useSession();
    console.log("SESSION", session)

    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            url: "",
            tags: ""
        },
        validators: {
            onSubmit: bookmarkSchema
        },
        onSubmit: async ({ value, meta }) => {
            const result = bookmarkSchema.parse(value);
            console.log('RESULT', result)
            toast({
                title: "Bookmark Updated",
                description: "Your bookmark has been successfully updated.",
                button: {
                    onClick: () => { }
                }
            })
        }
    });

    return (
        <Card className={cn("w-[570px]")}>
            <CardHeader>
                <CardTitle>Edit Bookmark</CardTitle>
                <CardDescription>Update your saved link details — change the title, description, URL, or tags anytime.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="bookmark-form"
                    className={cn(
                        "grid grid-col gap-5"
                    )}
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}
                >
                    <FieldGroup>
                        <form.Field name="title">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid

                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        </form.Field>
                    </FieldGroup>
                    <FieldGroup>
                        <form.Field name="description">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid

                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                                        <Textarea
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        </form.Field>
                    </FieldGroup>
                    <FieldGroup>
                        <form.Field name="url">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid

                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Website URL</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        </form.Field>
                    </FieldGroup>
                    <FieldGroup>
                        <form.Field name="tags">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid

                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Tags</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        </form.Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className={cn(
                "flex justify-end gap-4"
            )}>
                <Button variant="secondary" onClick={() => form.reset()} label="Cancel" />
                <Button type="submit" label="Save Changes" form="bookmark-form" />
            </CardFooter>
        </Card>
    )
}