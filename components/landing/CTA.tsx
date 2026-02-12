import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#fafaf9" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-3xl px-8 py-16 md:px-16 md:py-20"
          style={{ backgroundColor: "#1c1917" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-balance"
            style={{ color: "#fafaf9" }}
          >
            Ready to feel confident in your next interview?
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "rgba(250, 250, 249, 0.7)" }}
          >
            Join thousands of job seekers who are preparing smarter, not harder.
            Start practicing for free today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-bold text-base h-12 shadow-md"
              style={{ backgroundColor: "#f97316", color: "#ffffff" }}
            >
              <Link href="/sign-up">Start Practicing Free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-bold text-base h-12"
              style={{
                borderColor: "rgba(250, 250, 249, 0.2)",
                color: "#fafaf9",
                backgroundColor: "transparent",
              }}
            >
              <Link href="/sign-in">I Already Have an Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
