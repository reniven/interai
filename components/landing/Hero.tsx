import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-20 pb-16 md:pt-32 md:pb-24">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
        AI-Powered Interview Practice
      </span>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl text-balance leading-tight">
        Nail Your Next Interview with Confidence
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
        Practice with an AI interviewer that adapts to your role, gives real-time
        feedback, and helps you improve -- so you walk in prepared and walk out
        hired.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button
          asChild
          size="lg"
          className="bg-primary-200 text-white hover:bg-primary-200/90 rounded-full px-8 font-bold text-base h-12"
        >
          <Link href="/sign-up">Get Started Free</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full px-8 font-bold text-base h-12 border-border text-foreground"
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
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
