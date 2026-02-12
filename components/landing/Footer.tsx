import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="InterAI logo" width={24} height={20} />
          <span className="text-sm font-semibold text-foreground">InterAI</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <p className="text-sm text-muted-foreground">
          Built with care for job seekers everywhere.
        </p>
      </div>
    </footer>
  );
}
