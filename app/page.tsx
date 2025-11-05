import { redirectIfAuthenticated } from "@/lib/session";

export default async function Home() {
  await redirectIfAuthenticated();

  return <div>Hello</div>
}
