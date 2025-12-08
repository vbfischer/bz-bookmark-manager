// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as authSchema from "./auth-schema";
import * as bookmarkSchema from "./bookmark-schema";
import { and, eq, desc } from "drizzle-orm";
import { tag } from "./bookmark-schema";

config({ path: ".env" }); // or .env.local

const { bookmark } = bookmarkSchema;
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({
  client: sql,
  schema: { ...authSchema, ...bookmarkSchema },
  logger: true
});

export const getTag = async (tagName: string, userId: string) => {
  return await db.query.tag.findFirst({
    where: and(eq(tag.name, tagName), eq(tag.userId, userId))
  })
}

export const getTags = async (userId: string) => {
  return await db.query.tag.findMany({
    where: eq(tag.userId, userId),
    with: {
      tagBookmarks: {
        with: {
          bookmark: {
            columns: {
              title: true,
              isArchived: true
            },
          }
        },
      }
    },
    orderBy: tag.name,

  });
}

export type GetTagsResult = Awaited<ReturnType<typeof getTags>>;
// To get the type of a single tag object:
export type Tag = GetTagsResult extends Array<infer T> ? T : never;

export const createTag = async (tagName: string, userId: string) => {
  const tag = await getTag(tagName, userId);

  if (tag) {
    return tag;
  }

  return await db.insert(bookmarkSchema.tag).values({ name: tagName, userId: userId }).returning({ id: bookmarkSchema.tag.id })
}

export interface GetFilteredBookmarksProps {
  userId: string;
  tags?: string[];
  archived?: boolean;
  sortBy?: SortBy;
}

export const sortBy = ["recently_added", "recently_visited", "most_visited"] as const;

export type SortBy = (typeof sortBy)[number];

export const getFilteredBookmarks = async ({
  userId,
  tags = [],
  archived = false,
  sortBy = "recently_added"
}: GetFilteredBookmarksProps) => {
  let orderBy = desc(bookmark.createdAt);

  if (sortBy === "recently_visited") {
    orderBy = desc(bookmark.lastVisited);
  } else if (sortBy === "most_visited") {
    orderBy = desc(bookmark.visitCount);
  }
  console.log('sortBy', sortBy, orderBy)

  // const orderBy = sortBy === "recently_added" ? desc(bookmark.createdAt) : (sortBy === "recently_visited" ? desc(bookmark.lastVisited) : desc(bookmark.visitCount));

  // If no tag filters are specified, return all bookmarks with the archived filter
  if (tags.length === 0) {
    return await db.query.bookmark.findMany({
      where: and(
        eq(bookmark.userId, userId),
        eq(bookmark.isArchived, archived)
      ),
      with: {
        bookmarkTags: {
          with: {
            tag: {
              columns: {
                name: true
              }
            }
          }
        }
      },
      orderBy
    });
  }

  // When tag filters are specified, we need to find bookmarks that have those tags
  const bookmarksWithTags = await db.query.bookmark.findMany({
    where: and(
      eq(bookmark.userId, userId),
      eq(bookmark.isArchived, archived)
    ),
    with: {
      bookmarkTags: {
        with: {
          tag: {
            columns: {
              name: true
            }
          }
        }
      }
    },
    orderBy
  });

  // Filter bookmarks that have at least one of the specified tags
  return bookmarksWithTags.filter(bookmark => {
    const bookmarkTagNames = bookmark.bookmarkTags.map(bt => bt.tag.name);
    return tags.some(tag => bookmarkTagNames.includes(tag));
  });
}

export type GetFilteredBookmarksResult = Awaited<ReturnType<typeof getFilteredBookmarks>>;

export const getBookmarks = async (userId: string) => {
  return await db.query.bookmark.findMany({
    where: and(eq(bookmark.userId, userId), eq(bookmark.isArchived, false)),
    with: {
      bookmarkTags: {
        with: {
          tag: {
            columns: {
              name: true
            }
          }
        }
      }
    }
  })
}

export const createBookmark = async (
  title: string, url: string, favicon: string, description: string,
  pinned: boolean, isArchived: boolean, visitCount: number,
  tags: string,
  userId: string) => {

  const newBookmark = (await db.insert(bookmarkSchema.bookmark).values({
    title,
    url,
    favicon,
    description,
    pinned,
    isArchived,
    visitCount,
    userId
  }).returning({
    bookmarkId: bookmarkSchema.bookmark.id
  }))[0];

  const tagEntries = tags.split(',').map(tag => ({
    name: tag.trim(),
    userId: userId
  }));

  const newTags = (await Promise.all(tagEntries.map(t => createTag(t.name, userId)))).flat();

  await Promise.all(newTags.map(t => db.insert(bookmarkSchema.bookmarksToTags).values({
    bookmarkId: newBookmark.bookmarkId,
    tagId: t.id,
    userId
  })));

  return newBookmark.bookmarkId;
}
