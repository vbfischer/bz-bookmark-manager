import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as authSchema from "../auth-schema";
import * as bookmarkSchema from "../bookmark-schema";
import json from '../data/data.json';
import { createBookmark } from '@/db';

const sql = neon(process.env.DATABASE_URL!);
const userId = "gzeFIl3yhzMbK4IzH3jkuISVzzZ6c0Gi";

export const db = drizzle({
  client: sql,
  schema: { ...authSchema, ...bookmarkSchema }
});

async function main() {
  const newBookmarks = json.bookmarks.map(bm => ({
    title: bm.title,
    url: bm.url,
    favicon: bm.favicon,
    description: bm.description,
    pinned: bm.pinned,
    isArchived: bm.isArchived,
    visitCount: bm.visitCount,
    tags: bm.tags.join(','),
    userId
  }));

  for (const b of newBookmarks) {
    await createBookmark(b.title, b.url, b.favicon, b.description, b.pinned, b.isArchived, b.visitCount, b.tags, userId)
    console.log('processed')
  }
}

main()