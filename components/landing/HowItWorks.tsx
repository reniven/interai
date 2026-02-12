const steps = [
  {
    number: "01",
    title: "Tell us your goal",
    description:
      "Share the role you're targeting, your tech stack, and experience level. Our AI builds a custom interview just for you.",
  },
  {
    number: "02",
    title: "Practice with AI",
    description:
      "Start a voice conversation with your AI interviewer. It asks real questions, listens to your answers, and keeps the flow natural.",
  },
  {
    number: "03",
    title: "Get actionable feedback",
    description:
      "Receive detailed scores on communication, technical depth, problem-solving, confidence, and a personalized improvement plan.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to go from nervous to ready.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex flex-col items-center text-center max-w-xs mx-auto relative">
              <span className="text-5xl font-bold text-primary-200/20 mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-16">
                  <svg
                    viewBox="0 0 64 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full text-border"
                  >
                    <path
                      d="M0 4H60M60 4L56 1M60 4L56 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
