import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: "rgba(250, 250, 249, 0.85)",
        borderBottom: "1px solid #e7e5e4",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="InterAI logo"
            width={32}
            height={28}
            style={{ width: "32px", height: "auto" }}
          />
          <span
            className="text-xl font-bold"
            style={{ color: "#1c1917" }}
          >
            InterAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "#78716c" }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "#78716c" }}
          >
            How it Works
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="text-sm font-medium"
            style={{ color: "#78716c" }}
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            asChild
            className="rounded-full px-5 font-bold text-sm"
            style={{ backgroundColor: "#f97316", color: "#ffffff" }}
          >
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
