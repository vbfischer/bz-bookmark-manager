import { requireAuth } from "@/lib/session";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const session = await requireAuth();

  return <DashboardClient session={session} />;
}