import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 flex items-center gap-3">
        Welcome to My Task
        <span className="inline-block wave-animation">👋</span>
      </h1>
      <Link
        href="/dashboard"
        className="relative px-6 py-3 text-lg font-semibold shadow-sidebar-accent-foreground text-white bg-[var(--main-color)] rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-10"
      >
        Go to Task
      </Link>
    </div>
  );
}
