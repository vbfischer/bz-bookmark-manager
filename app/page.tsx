import { redirectIfAuthenticated } from "@/lib/session";

export default async function Home() {
  await redirectIfAuthenticated();

  return (
    <div className="min-h-screen flex justify-center items-center">
    </div>
  )
}
