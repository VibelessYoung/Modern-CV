import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-background text-foreground px-4">
      <h1 className="text-8xl font-bold text-black/60 dark:text-white/60 animate-pulse">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-black dark:text-white">
        This page could not be found.
      </h2>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition"
      >
        Return to home page
      </Link>
    </div>
  );
}
