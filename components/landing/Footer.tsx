import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{ borderTop: "1px solid #e7e5e4" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="InterAI logo"
            width={24}
            height={20}
            style={{ width: "24px", height: "auto" }}
          />
          <span className="text-sm font-semibold" style={{ color: "#1c1917" }}>
            InterAI
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: "#78716c" }}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: "#78716c" }}
          >
            Get Started
          </Link>
        </nav>

        <p className="text-sm" style={{ color: "#78716c" }}>
          Built with care for job seekers everywhere.
        </p>
      </div>
    </footer>
  );
}
