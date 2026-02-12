import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl bg-foreground px-8 py-16 md:px-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-background text-balance">
            Ready to feel confident in your next interview?
          </h2>
          <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
            Join thousands of job seekers who are preparing smarter, not harder.
            Start practicing for free today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-200 text-white hover:bg-primary-200/90 rounded-full px-8 font-bold text-base h-12"
            >
              <Link href="/sign-up">Start Practicing Free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-bold text-base h-12 border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              <Link href="/sign-in">I Already Have an Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
