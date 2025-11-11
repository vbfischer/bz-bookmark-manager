import { redirectIfAuthenticated } from "@/lib/session";
import { SignupForm } from "@/ui/components/forms/SignupForm";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return <SignupForm/> 
}