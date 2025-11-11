'use client'

import { useForm } from '@tanstack/react-form';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../Card';
import { Logo } from '../Logo';
import { cn } from '@/lib/utils';
import { Field, FieldError, FieldGroup, FieldLabel } from '../Field';
import { Input } from '../Input';
import { Button } from '../Button';
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const loginSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

export const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        validators: {
            onSubmit: loginSchema
        },
        onSubmit: async ({ value }) => {
            setLoading(true);
            try {
                const { email, password } = value;

                await signIn.email({
                    email,
                    password
                });
                router.push("/dashboard")

            } finally {
                setLoading(false)
            }
        }
    });

    return (
        <Card className={cn(
            "w-md py-10"
        )}>
            <CardHeader>
                <Logo />
                <CardTitle className={cn()}>Log in to your account</CardTitle>
                <CardDescription>Welcome back! Please enter your details.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="login-form"
                    className={cn()}
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}
                >
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
                <Button disabled={loading} className="w-full" type="submit" form="login-form" label="Log in" />
            </CardFooter>
            <CardFooter className={cn(
                "flex flex-col gap-3"
            )}>
                <div>Forgot Password? Reset it </div>
                <div>Dont have an account? Sign up</div>
            </CardFooter>
        </Card>
    )
}