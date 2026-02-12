const features = [
  {
    title: "AI-Powered Conversations",
    description:
      "Talk to a realistic AI interviewer that listens, responds, and adapts -- just like a real interview.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    title: "Tailored to Your Role",
    description:
      "Select your target role, tech stack, and experience level. Every session is customized for you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m11 13.73-4 6.93" />
      </svg>
    ),
  },
  {
    title: "Instant Feedback",
    description:
      "Get scored on communication, technical depth, problem-solving, and confidence right after each session.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
  {
    title: "Voice-First Experience",
    description:
      "Speak naturally. Our voice AI captures your responses and provides a truly immersive practice session.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 px-4 scroll-mt-20"
      style={{ backgroundColor: "#fafaf9" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-balance"
            style={{ color: "#1c1917" }}
          >
            Everything you need to ace your interview
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto text-pretty"
            style={{ color: "#78716c" }}
          >
            Built for job seekers who want to walk into their next interview
            feeling prepared, polished, and unstoppable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e7e5e4",
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl"
                style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-semibold"
                style={{ color: "#1c1917" }}
              >
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "#78716c" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
