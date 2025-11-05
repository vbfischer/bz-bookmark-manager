import { pgTable, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const bookmark = pgTable("bookmark", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  favicon: text("favicon").notNull(),
  description: text("description").notNull(),
  tags: text("tags").array().notNull().default([]), // PostgreSQL array of strings
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

// Type inference for TypeScript
export type Bookmark = typeof bookmark.$inferSelect;
export type NewBookmark = typeof bookmark.$inferInsert;