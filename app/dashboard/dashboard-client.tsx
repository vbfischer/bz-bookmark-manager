"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface DashboardClientProps {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
    };
  };
}

export default function DashboardClient({ session }: DashboardClientProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-0 dark:bg-neutral-900">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Bookmark Manager
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Welcome, {session.user.name || session.user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                Your Bookmarks
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                This is your protected dashboard. Only authenticated users can see this page.
              </p>
              
              {/* Bookmark List Placeholder */}
              <div className="bg-white dark:bg-zinc-900 shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-4">
                  Recent Bookmarks
                </h3>
                <div className="text-zinc-500 dark:text-zinc-400">
                  No bookmarks yet. Start adding some!
                </div>
                
                {/* Add Bookmark Button */}
                <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Bookmark
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}