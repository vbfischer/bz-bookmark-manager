import { toStringArray } from "@/lib/utils";
import DashboardClient from "./dashboard-client";
import { getFilteredBookmarks, SortBy } from "@/db";
import { getSession } from "@/lib/session";
import { SearchParams } from "nuqs";
import { loadSearchParams } from "@/lib/search-params";

type PageProps = {
  searchParams: Promise<SearchParams>
}

const DashboardPage = async ({ searchParams }: PageProps) => {
  const {tags, archived, sortBy} = await loadSearchParams(searchParams);

  const session = await getSession();
  if (!session) {
    throw new Error("No Session")
  }

  const userId = session.user.id;
  const selectedTags = toStringArray(tags);

  console.log('DASHBOARD PAGE ***************');
  const bookmarks = await getFilteredBookmarks({ userId, tags: selectedTags, sortBy: sortBy as SortBy});

  return <DashboardClient bookmarks={bookmarks} archived={archived} selectedTags={selectedTags} />;
}

export default DashboardPage; 