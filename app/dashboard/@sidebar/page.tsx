import { getTags } from "@/db";
import { getSession } from "@/lib/session";
import { toStringArray } from "@/lib/utils";
import { SidebarClient } from "./sidebar-client";

interface SidebarPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const SidebarPage = async ({ searchParams }: SidebarPageProps) => {
  const params = await searchParams;

  const { tags: rawTags } = params;
  const selectedTags = toStringArray(rawTags);

  const session = await getSession();
  if (!session) {
    throw new Error("No Session")
  }

  const userId = session.user.id;

  const tags = await getTags(userId);

  return (
    <SidebarClient tags={tags} selectedTags={selectedTags} />
  )
}

export default SidebarPage;