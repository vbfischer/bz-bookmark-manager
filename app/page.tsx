import { redirectIfAuthenticated } from "@/lib/session";
import { ThemeToggle } from "@/ui/components/ThemeToggle";
export default async function Home() {
  await redirectIfAuthenticated();

  return (
    <div className="h-screen bg-neutral-0 dark:bg-neutral-dark-900">
      <ThemeToggle />
    </div>
  )
}
