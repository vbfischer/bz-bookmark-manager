"use client";

import { useState } from "react";
import { signIn, signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Logo } from "@/ui/components/Logo";
import { Input } from "@/ui/components/Input";
import { clsx } from "clsx";
import { Button } from "@/ui/components/Button";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {

      await signIn.email({
        email,
        password,
      });
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx(
      "min-h-screen flex items-center justify-center p-4",
      "bg-neutral-100 dark:bg-neutral-900"
    )}>
      <div className={clsx(
        "w-full flex flex-col px-5 py-8 gap-8",
        "rounded-xl",
        "bg-neutral-0 dark:bg-neutral-800"
      )}>
        <Logo />
        <div>
          <h2 className="text-neutral-900 font-bold text-[24px]">
            Log in to your account
          </h2>
          <p className={clsx(
            "text-neutral-800 text-[14px]"
          )}>
            Welcome back! Please enter your details.
          </p>

        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className={clsx(
            "flex flex-col gap-4"
          )}>
            <Input
              labelText="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <Input
              labelText="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              disabled={loading}
            >
              Sign in
            </Button>
          </div>


          <div className="text-center">
            <button
              type="button"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}