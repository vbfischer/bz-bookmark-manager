'use client'

import { GetFilteredBookmarksResult, SortBy } from "@/db";
import { cn } from "@/lib/utils";
import {
  DropdownMenuTrigger, DropdownMenu, DropdownMenuContent,
  DropdownMenuCheckboxItem
} from "@/ui/components";
import { Button } from "@/ui/components/Button";
import { Toolbar } from "@/ui/components/Toolbar";
import { IconSort } from "@/ui/icons";
import { useArchived } from "@/hooks/use-archived";
import { useSortBy } from "@/hooks/use-sortby";
import { BookmarkItem } from "@/ui/components/BookmarkItem";
export interface DashboardClientProps {
  bookmarks: GetFilteredBookmarksResult
  archived: boolean;
  selectedTags: string[];
  searchTerm?: string;
}

const getTitle = (selectedTags: string[], archived: boolean, searchTerm?: string) => {
  if (selectedTags.length === 0) {
    if (archived) {
      return "Archived bookmarks"
    } else {
      return "All bookmarks";
    }
  }
  if (selectedTags.length > 0) {
    if (archived) {
      return `Archived bookmarks tagged: ${selectedTags.join(", ")}`;
    }

    return `Bookmarks tagged: ${selectedTags.join(", ")}`;
  }
};

const DashboardClient = ({ bookmarks, selectedTags, searchTerm }: DashboardClientProps) => {
  const [sortByValue, setSortBy] = useSortBy();
  const [archived] = useArchived()

  const title = getTitle(selectedTags, archived, searchTerm);

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy as SortBy);
  }

  return (
    <main className="flex flex-col w-full flex-1">
      <Toolbar />
      <div className={cn(
        "px-8 pt-8 pb-16 flex flex-col gap-5 flex-1"
      )}>
        <div className={cn(
          "flex justify-between items-center"
        )}>
          <h2 className={cn(
            "text-[24px] font-bold"
          )}>{title}</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button label="Sort by" variant="secondary" size="sm" contentLeft={<IconSort />} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem onCheckedChange={() => handleSortChange("recently_added")} checked={sortByValue === "recently_added"}>Recently added</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onCheckedChange={() => handleSortChange("recently_visited")} checked={sortByValue === "recently_visited"}>Recently visited</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onCheckedChange={() => handleSortChange("most_visited")} checked={sortByValue === "most_visited"}>Most visited</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className={cn(
          "flex flex-wrap gap-8"
        )}>
          {bookmarks.map(bookmark => (
            <BookmarkItem 
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              url={bookmark.url}
              favicon={bookmark.favicon}
              description={bookmark.description}
              tags={bookmark.bookmarkTags.map(tag => ({ 
                tagId: tag.tagId, 
                name: tag.tag.name 
              }))}
              visitCount={bookmark.visitCount}
              lastVisited={bookmark.lastVisited}
              createdAt={bookmark.createdAt}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default DashboardClient;