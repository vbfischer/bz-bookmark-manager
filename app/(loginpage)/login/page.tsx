import { redirectIfAuthenticated } from "@/lib/session";
import { LoginForm } from "@/ui/components/forms/LoginForm";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
      <LoginForm />
  );
}