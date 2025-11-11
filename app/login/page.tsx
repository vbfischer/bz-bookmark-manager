import { redirectIfAuthenticated } from "@/lib/session";
import { cn } from "@/lib/utils";
import { LoginForm } from "@/ui/components/forms/LoginForm";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
    <div className={cn(
      "min-h-screen flex justify-center items-center"
    )}>
      <LoginForm />
    </div>
  );
}