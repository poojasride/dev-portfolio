import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Pooja Sri" },
      { name: "description", content: "A selection of MERN stack projects built by Pooja Sri." },
      { property: "og:title", content: "Projects by Pooja Sri" },
      { property: "og:description", content: "Featured MERN stack work — from realtime apps to e-commerce platforms." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Personal Finance Manager (MERN)",
    description: "Full-stack MERN application to manage income and expenses with secure JWT authentication. Built REST APIs and integrated MongoDB with responsive React UI.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/poojasride/personal-finance-manager-frontend",
    backend: "https://github.com/poojasride/personal-finance-manager-backend",
    live: "https://personal-finance-manager-03.netlify.app/",
    accent: "from-brand-primary/40 to-brand-accent/30",
  },
  {
    title: "Income Expense Tracker",
    description: "React-based application to track income and expenses with dynamic UI updates and state management.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/poojasride/Income-Expense-Tracker",
    live: "https://income-expense-trancker.netlify.app/",
    accent: "from-brand-secondary/40 to-brand-primary/30",
  },
  {
    title: "JWT Authentication System",
    description: "Backend system implementing secure authentication using JWT with login, signup, and protected routes.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/poojasride/JWT-Authentication",
    accent: "from-brand-accent/40 to-brand-secondary/30",
  },
  {
    title: "Password Reset System",
    description: "Full-stack module with secure password reset using token-based verification and email integration.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/poojasride/password-reset",
    backend: "https://github.com/poojasride/password-reset-backend",
    accent: "from-brand-primary/40 to-brand-secondary/30",
  },
  {
    title: "E-Commerce Application (E-Mart)",
    description: "Basic e-commerce platform with product listing, cart, and order management features.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/poojasride/e-mart",
    accent: "from-brand-secondary/40 to-brand-accent/30",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-primary">Projects</p>
          <h1 className="mt-4 font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Things I've <span className="text-gradient">built and shipped</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A handful of recent work — from realtime infrastructure to polished consumer apps. Each one taught me
            something new about the MERN stack and the craft of shipping software.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 backdrop-blur p-6 hover:border-brand-primary/50 hover:shadow-brand transition-all"
            >
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-90 transition-opacity`} />
              <div className="relative">
                <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                  <a href="#" className="inline-flex items-center gap-1.5 hover:text-brand-primary transition-colors">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 hover:text-brand-primary transition-colors">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
