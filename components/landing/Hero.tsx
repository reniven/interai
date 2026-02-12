import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-4 pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #FEF3C7 0%, #FFF7ED 40%, #fafaf9 80%)",
        }}
      />

      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
        style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L10.09 5.26L14.72 5.96L11.36 9.22L12.18 13.82L8 11.62L3.82 13.82L4.64 9.22L1.28 5.96L5.91 5.26L8 1Z"
            fill="#F59E0B"
            stroke="#F59E0B"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        AI-Powered Interview Practice
      </span>

      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance leading-[1.1]"
        style={{ color: "#1c1917" }}
      >
        Nail Your Next Interview with{" "}
        <span style={{ color: "#f97316" }}>Confidence</span>
      </h1>

      <p
        className="mt-6 text-lg md:text-xl max-w-2xl text-pretty leading-relaxed"
        style={{ color: "#57534e" }}
      >
        Practice with an AI interviewer that adapts to your role, gives
        real-time feedback, and helps you improve -- so you walk in prepared and
        walk out hired.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 font-bold text-base h-12 shadow-md hover:shadow-lg transition-shadow"
          style={{ backgroundColor: "#f97316", color: "#ffffff" }}
        >
          <Link href="/sign-up">Get Started Free</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full px-8 font-bold text-base h-12"
          style={{
            borderColor: "#e7e5e4",
            color: "#1c1917",
            backgroundColor: "#ffffff",
          }}
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl"
          style={{ border: "1px solid #e7e5e4" }}
        >
          <Image
            src="/hero-illustration.jpg"
            alt="AI interview practice session showing a confident candidate with supportive AI coaching"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
