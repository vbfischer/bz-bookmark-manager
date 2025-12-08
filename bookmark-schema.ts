import { pgTable, text, timestamp, boolean, integer, primaryKey } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";
import { relations } from "drizzle-orm";

export const bookmark = pgTable("bookmark", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  url: text("url").notNull(),
  favicon: text("favicon").notNull(),
  description: text("description").notNull(),
  pinned: boolean("pinned").default(false).notNull(),
  isArchived: boolean("is_archived").default(false).notNull(),
  visitCount: integer("visit_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastVisited: timestamp("last_visited"), // nullable for unvisited bookmarks
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  // Foreign key to user table for multi-user support
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const tag = pgTable("tag", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  userId: text('userId').notNull().references(() => user.id)
})

export const bookmarksToTags = pgTable("bookmarks_to_tags", {
  bookmarkId: text("bookmark_id").notNull().references(() => bookmark.id),
  tagId: text("tag_id").notNull().references(() => tag.id),
  userId: text("userId").notNull().references(() => user.id)
}, (t) => [{
  pk: primaryKey({ columns: [t.bookmarkId, t.tagId, t.userId] })
}]);

/**
 * RELATIONSHIPS
 */
export const userRelations = relations(user, ({ many }) => ({
  tags: many(tag),
  bookmarks: many(bookmarksToTags)
}));

export const tagRelations = relations(tag, ({ one, many }) => ({
  user: one(user, {
    fields: [tag.userId],
    references: [user.id]
  }),
  tagBookmarks: many(bookmarksToTags)
}));

export const bookmarkRelations = relations(bookmark, ({ one, many }) => ({
  bookmarkTags: many(bookmarksToTags),
  user: one(user, {
    fields: [bookmark.userId],
    references: [user.id]
  })
}))

export const bookmarkToTagsRelations = relations(bookmarksToTags, ({ one }) => ({
  bookmark: one(bookmark, {
    fields: [bookmarksToTags.bookmarkId],
    references: [bookmark.id]
  }),
  tag: one(tag, {
    fields: [bookmarksToTags.tagId],
    references: [tag.id]
  }),
}));

// Type inference for TypeScript
export type Bookmark = typeof bookmark.$inferSelect;
export type NewBookmark = typeof bookmark.$inferInsert;