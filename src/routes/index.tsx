import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, Server, Code2, Cpu, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import portrait from "@/assets/Pooja img.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pooja Sri — MERN Stack Developer Portfolio" },
      { name: "description", content: "Full-stack developer weaving seamless experiences with MongoDB, Express, React, and Node.js." },
      { property: "og:title", content: "Pooja Sri — MERN Stack Developer" },
      { property: "og:description", content: "Full-stack developer weaving seamless experiences with the MERN stack." },
    ],
  }),
  component: HomePage,
});

const stack = [
  { name: "MongoDB", icon: Database },
  { name: "Express.js", icon: Server },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Cpu },
];

const highlights = [
  {
    title: "End-to-end ownership",
    body: "From schema design to deployment — I ship features that scale, not just demos.",
  },
  {
    title: "Performance obsessed",
    body: "Lighthouse scores, query plans, and bundle sizes I actually look at every release.",
  },
  {
    title: "Clean, typed code",
    body: "TypeScript-first APIs with predictable contracts that teams can build on confidently.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-primary" />
              Available for new projects
            </span>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient">Pooja Sri</span>
            </h1>
            <p className="mt-6 text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Full-stack developer weaving seamless experiences with the MERN stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {stack.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur"
                >
                  <Icon className="h-4 w-4 text-brand-primary" />
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-brand hover:opacity-90 transition-opacity"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border-2 border-border px-6 py-3 text-sm font-semibold hover:border-brand-primary/60 hover:text-brand-primary transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-hero-gradient blur-2xl opacity-70" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/60 shadow-brand-glow">
              <img
                src={portrait}
                alt="Portrait of Pooja Sri, MERN stack developer"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 via-transparent to-brand-accent/20 mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-brand backdrop-blur">
              <p className="text-xs text-muted-foreground">Currently building</p>
              <p className="text-sm font-semibold">Realtime SaaS dashboard</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 hover:border-brand-primary/40 hover:shadow-brand transition-all"
            >
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
