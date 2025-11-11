'use client'

import { useForm } from '@tanstack/react-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signUp } from '@/lib/auth-client';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../Card';
import { Logo } from '../Logo';
import { cn } from '@/lib/utils';
import { Button } from '../Button';
import { FieldGroup, FieldLabel, FieldError, Field } from '../Field';
import { Input } from '../Input';

const signupSchema = z.object({
    fullName: z.string().min(1, { message: "Full name is required" }).max(100),
    email: z.email({ message: "Enter a valid email address." }),
    password: z.string().min(8, { message: "Must be at least 8 characters long." }),
});

export const SignupForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: ''
        },
        validators: {
            onSubmit: signupSchema
        },
        onSubmit: async ({ value }) => {
            setLoading(true)
            try {
                const { fullName, email, password } = value
                await signUp.email({
                    name: fullName,
                    email,
                    password,
                    callbackURL: "/dashboard"
                });

                router.push("/dashboard")
            } finally {
                setLoading(false)
            }
        }
    })

    return (
        <Card className={(
            "w-md py-10"
        )}>
            <CardHeader>
                <Logo />
                <CardTitle>Create your account</CardTitle>
                <CardDescription>Join us and start saving your favorite links — organized, searchable, and always within reach.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="signup-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup>
                        <form.Field name="fullName">
                            {(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
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
                        <form.Field name="email">
                            {(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
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
                        <form.Field name="password">
                            {(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                        <Input
                                            type="password"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
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
            <CardFooter>
                <Button disabled={loading} className="w-full" type="submit" form="signup-form" label="Create account" />
            </CardFooter>
            <CardFooter className={cn(
                "flex flex-col gap-3"
            )}>
                <div>Already have an account? Log in </div>
            </CardFooter>
        </Card>
    )
}