import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Encrypted Transport",
      text: "Route every packet through a secure tunnel with modern key exchange and strict endpoint validation.",
    },
    {
      title: "Fast Provisioning",
      text: "Spin up client and server peers in minutes with repeatable templates and one-command bootstrap flows.",
    },
    {
      title: "Observability Built In",
      text: "Track tunnel health, handshake latency, and traffic patterns from a single operations dashboard.",
    },
  ];

  const steps = [
    "Generate service identities for your client and server nodes.",
    "Establish the tunnel and enforce policy-driven access controls.",
    "Deploy applications over the private network with continuous monitoring.",
  ];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div className="grid-overlay" />
      <div className="floating-orb floating-orb--one" />
      <div className="floating-orb floating-orb--two" />

      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-8 md:px-10 md:pt-10 lg:px-14">
        <nav className="fade-up mb-16 flex items-center justify-between">
          <p className="text-lg font-semibold tracking-[0.14em] text-[var(--brand)]">
            KHALA MATRIX
          </p>
          <div className="flex items-center gap-3">
            <a
              className="rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              href="#launch"
            >
              Launch Preview
            </a>
            <Link
              className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >
              Log In
            </Link>
          </div>
        </nav>

        <section className="mb-20 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div className="space-y-7">
            <p className="fade-up inline-block rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] [animation-delay:0.06s]">
              PRIVATE CLIENT-SERVER NETWORK
            </p>
            <h1 className="fade-up text-4xl font-semibold leading-tight tracking-tight [animation-delay:0.14s] md:text-6xl">
              Ship secure connections
              <span className="block text-[var(--brand)]">
                without edge complexity
              </span>
            </h1>
            <p className="fade-up max-w-xl text-lg leading-relaxed text-[var(--muted)] [animation-delay:0.22s]">
              KHA-5 builds a hardened tunnel between your clients and servers so
              your product traffic stays private, observable, and reliable from
              day one.
            </p>
            <div className="fade-up flex flex-wrap gap-4 [animation-delay:0.3s]">
              <Link
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-ink)] transition hover:-translate-y-0.5 hover:brightness-110"
                href="/login"
              >
                Start Network Setup
              </Link>
              <a
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                href="#features"
              >
                Explore Features
              </a>
            </div>
          </div>

          <aside className="fade-up rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 p-7 backdrop-blur [animation-delay:0.28s]">
            <p className="mb-4 text-sm font-semibold text-[var(--muted)]">
              Network Snapshot
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--canvas)] p-4">
                <p className="text-xs text-[var(--muted)]">Average Handshake</p>
                <p className="text-2xl font-semibold text-[var(--brand)]">
                  48 ms
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--canvas)] p-4">
                <p className="text-xs text-[var(--muted)]">
                  Tunnel Availability
                </p>
                <p className="text-2xl font-semibold text-[var(--brand)]">
                  99.98%
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--canvas)] p-4">
                <p className="text-xs text-[var(--muted)]">New Peer Setup</p>
                <p className="text-2xl font-semibold text-[var(--brand)]">
                  &lt; 2 min
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="features" className="mb-20">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
            Why teams choose this stack
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="fade-up rounded-3xl border border-[var(--line)] bg-[var(--surface)]/70 p-6 backdrop-blur [animation-fill-mode:both]"
                style={{ animationDelay: `${0.12 + index * 0.08}s` }}
              >
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="launch"
          className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] px-6 py-8 md:px-10"
        >
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
            Build your private route in 3 steps
          </h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-[var(--line)] bg-[var(--canvas)] p-5"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[var(--brand)]">
                  STEP 0{index + 1}
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
