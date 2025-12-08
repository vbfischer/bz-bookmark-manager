import { cn } from "@/lib/utils";
import {
  Item,
  ItemMedia,
  ItemTitle,
  ItemContent,
  ItemDescription,
  ItemActions,
  ItemSeparator
} from "@/ui/components";
import { Button } from "@/ui/components/Button";
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/components/Card";
import Image from "next/image";
import { Stat } from "@/ui/components/Stat";
import { Badge } from "@/ui/components/Badge";
import { IconCreated, IconLastVisited, IconMenuBookmark, IconVisitCount } from "@/ui/icons";

type BookmarkItemProps = {
  title: string;
  url: string;
  favicon: string;
  description: string;
  tags: { tagId: string; name: string }[];
  visitCount: number;
  lastVisited?: Date | null;
  createdAt?: Date | null;
};

export const BookmarkItem = ({ 
  title, 
  url, 
  favicon, 
  description, 
  tags, 
  visitCount, 
  lastVisited, 
  createdAt 
}: BookmarkItemProps) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
  });

  return (
    <Card className={cn(
      "w-[336px]",
      "p-0"
    )}>
      <CardHeader className={cn(
        "p-4"
      )}>
        <Item className={cn(
          "p-0 flex justify-center"
        )}>
          <ItemMedia variant="image" className={cn(
            "border border-accent-secondary rounded-lg"
          )}>
            <Image src={favicon} alt={`${title} favicon`} width={32} height={32} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className={cn(
              "text-[20px]"
            )}>{title}</ItemTitle>
            <ItemDescription className={cn(
              "text-[12px]"
            )}>{url}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="secondary" size="icon" contentLeft={<IconMenuBookmark />} />
          </ItemActions>
        </Item>
        <ItemSeparator />
      </CardHeader>
      <CardContent className={cn(
        "p-0 px-4 flex-1"
      )}>
        {description}
        <div className={cn(
          "flex gap-2"
        )}>
          {tags.map(tag => (
            <Badge key={tag.tagId}>{tag.name}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-0 flex flex-col">
        <div className={cn(
          "flex gap-4 flex-wrap text-[12px] border-t w-full p-4 pt-3"
        )}>
          <Stat
            icon={<IconVisitCount />}
            value={visitCount}
          />
          {lastVisited && (
            <Stat
              icon={<IconLastVisited />}
              value={dateFormatter.format(lastVisited)}
            />
          )}
          {createdAt && (
            <Stat
              icon={<IconCreated />}
              value={dateFormatter.format(createdAt)}
            />
          )}
        </div>
      </CardFooter>
    </Card>
  );
};