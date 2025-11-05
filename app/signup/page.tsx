import { redirectIfAuthenticated } from "@/lib/session";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return <div>signup</div>
}