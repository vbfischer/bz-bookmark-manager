# Bookmark Manager AI Coding Instructions

## Project Overview
A Next.js 16 bookmark manager app implementing a Frontend Mentor challenge. Uses modern React 19, TypeScript, Better Auth for authentication, Drizzle ORM with Neon PostgreSQL, and Tailwind CSS v4.

## Architecture & Key Components

### Authentication Stack
- **Better Auth** (`lib/auth.ts`) - Modern authentication library with Drizzle adapter
- **Route Handler**: `app/api/auth/[...all]/routes.ts` - Catch-all Next.js API route using `toNextJsHandler`
- **Database Schema**: `auth-schema.ts` - Defines user, session, account, and verification tables
- **Pattern**: Import auth instance from `@/lib/auth` and use Drizzle adapter with PostgreSQL provider

### Database & ORM
- **Drizzle ORM** with Neon serverless PostgreSQL (`db.ts`)
- **Connection**: Uses `@neondatabase/serverless` with connection pooling
- **Schema Files**: `auth-schema.ts` (user management) and `bookmark-schema.ts` (bookmarks)
- **Configuration**: `drizzle.config.ts` defines migration settings and schema locations
- **Environment**: Requires `DATABASE_URL` in `.env` file
- **Query Pattern**: Import `db` from `@/db` for database operations

### Styling & UI
- **Tailwind CSS v4** with inline theme configuration in `globals.css`
- **Theme System**: CSS custom properties with automatic dark mode via `prefers-color-scheme`
- **Font Setup**: Geist Sans & Geist Mono loaded via `next/font/google` with CSS variables
- **PostCSS**: Uses `@tailwindcss/postcss` plugin (no separate tailwind.config file needed)

## Development Workflow

### Package Manager
- **pnpm** is the required package manager (see `packageManager` field in package.json)
- Use `pnpm dev` for development, `pnpm build` for production builds

### Key Commands
```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm lint         # ESLint with Next.js TypeScript config
```

### Database Setup
1. Set `DATABASE_URL` in `.env` file pointing to Neon PostgreSQL
2. Generate migrations: `pnpm drizzle-kit generate`
3. Push schema to database: `pnpm drizzle-kit push`
4. Better Auth will auto-create auth tables via the adapter

## Project-Specific Patterns

### File Structure Conventions
- **Root-level configs**: Database (`db.ts`), auth schema (`auth-schema.ts`), Next.js configs
- **App Router**: Using Next.js 16 app directory structure
- **Path Aliases**: `@/` maps to project root (configured in tsconfig.json)

### Authentication Integration
- Better Auth handles OAuth, email/password, sessions automatically
- Database adapter pattern: `drizzleAdapter(db, { provider: "pg" })`
- API routes use catch-all pattern for auth endpoints
- Import pattern: `import { auth } from "@/lib/auth"`

### TypeScript Configuration
- Strict mode enabled with ES2017 target
- Bundler module resolution for modern tooling compatibility
- Next.js plugin integration for optimal type checking

## Feature Requirements (from README)
Users should be able to:
- Add/edit/archive bookmarks with title, description, URL, tags
- Search and filter bookmarks by title and tags
- Sort by recently added/visited or most visited
- Toggle light/dark themes
- View bookmark details with favicon, view count, visit dates
- Copy URLs and visit bookmarked sites directly
- Pin/unpin important bookmarks

## External Dependencies
- **Neon**: Serverless PostgreSQL database
- **Better Auth**: Modern authentication with multiple providers
- **Drizzle Kit**: Database migrations and schema management
- **Tailwind CSS v4**: Utility-first CSS with new architecture
- **Vercel**: Likely deployment target (references in default page)

## Data Structure & Example Content

### Bookmark Schema (from `data/data.json`)
```typescript
interface Bookmark {
  id: string;           // Format: "bm-001"
  title: string;        // Display name
  url: string;          // Full URL with protocol
  favicon: string;      // Path to favicon image
  description: string;  // Detailed description
  tags: string[];       // Filterable tag array
  pinned: boolean;      // Priority bookmark flag
  isArchived: boolean;  // Soft delete status
  visitCount: number;   // Usage analytics
  createdAt: string;    // ISO 8601 timestamp
  lastVisited: string | null; // ISO 8601 or null for unvisited
}
```

### Example Data Patterns
- **IDs**: Sequential format `bm-001`, `bm-002`, etc.
- **Tags**: Common categories include "Tools", "Community", "CSS", "JavaScript", "Learning", "Practice"
- **Favicons**: Stored in `./assets/images/favicon-{service}.png`
- **Analytics**: Track `visitCount` and `lastVisited` for sorting features
- **States**: Use `pinned` for priority display, `isArchived` for soft deletion

## Critical Notes
- Auth infrastructure is set up with bookmark schema now defined in `bookmark-schema.ts`
- Database includes user relationships for multi-user bookmark support
- Example data shows 18 bookmarks with realistic web development resources
- Use `pnpm drizzle-kit push` to sync schema changes to Neon database