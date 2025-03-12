import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 py-12 gap-12 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 flex items-center gap-3 text-center">
        <span className="inline-block wave-animation">👋</span>
        Welcome to My Task
      </h1>

      {/* Button */}
      <Link
        href="/dashboard"
        className="relative px-6 py-3 text-base sm:text-lg font-semibold shadow-sidebar-accent-foreground text-white bg-[var(--main-color)] rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-10"
      >
        Go to Task
      </Link>
    </div>
  );
}
