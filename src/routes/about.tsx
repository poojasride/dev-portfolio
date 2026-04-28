import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pooja Sri" },
      {
        name: "description",
        content:
          "Learn about Pooja Sri's journey, experience, and approach as a MERN stack developer.",
      },
      { property: "og:title", content: "About Pooja Sri" },
      {
        property: "og:description",
        content: "MERN stack developer focused on robust, scalable, end-to-end web products.",
      },
    ],
  }),
  component: AboutPage,
});

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"] },
  { group: "Backend", items: ["Node.js", "Express", "REST", "TypeScript", "Fastify"] },
  { group: "Database", items: ["MySQL", "MongoDB", "Mongoose"] },
  { group: "Tools", items: ["Git", "Netlify", "Jest", "CI/CD", "Render", "Postman"] },
];

const timeline = [
  {
    icon: Briefcase,
    title: "Node.js Developer",
    place: "Skematix Technologies Private Limited• 2023 — 2024",
    body: "Engineered backend services for an incubation project focusing on lease management, utilizing Node.js and Express.js to handle complex rental agreements and automated billing cycles. Designed and optimized MongoDB schemas to manage property data, achieving a 30% reduction in API response times. Implemented secure JWT authentication and role-based access for diverse user levels including tenants and property managers.",
  },
  {
    icon: Briefcase,
    title: "Node.js Developer",
    place: "Adloggs Technologies Private Limited • 2022 — 2023",
    body: "Developed and scaled backend infrastructure for the Engaje e-commerce platform, ensuring high availability for product catalogs and order processing. Built RESTful APIs using Node.js and TypeScript to integrate frontend components with MongoDB databases. Streamlined version control and deployment workflows using GitHub and CI/CD pipelines to improve development efficiency.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science",
    place: "Bharathiar University • 2018 — 2021",
    body: "Focused on distributed systems and human-computer interaction. Graduated with honors.",
  },
  {
    icon: GraduationCap,
    title: "MERN Stack Certification",
    place: "GUVI Geek Networks",
    body: "Certified in MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience in full-stack development, REST APIs, and authentication.",
    link: "https://drive.google.com/file/d/1fQdbSUnLaZdAP6Sigm4J8WLx4EDA2QqU/view?usp=sharing",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-primary">About</p>
          <h1 className="mt-4 font-display text-4xl lg:text-6xl font-bold tracking-tight">
            A developer who cares about <span className="text-gradient">the whole stack</span>.
          </h1>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Pooja Sri — a MERN stack developer with over two years of experience designing and
              building web products end-to-end. I specialize in the MERN stack and love the moment
              an optimized database query, a secure API contract, and a React UI interaction all
              click into place.
            </p>
            <p>
              Outside of the editor, I am passionate about scalable architecture, clean code, and
              modern JavaScript development. I believe the best products come from teams that ship
              fast, listen closely, and iterate honestly."
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <h2 className="font-display text-3xl font-bold mb-8">Skills & Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s) => (
            <div
              key={s.group}
              className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6"
            >
              <h3 className="font-display text-lg font-semibold text-gradient">{s.group}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <h2 className="font-display text-3xl font-bold mb-10">Experience</h2>
        <ol className="relative border-l border-border ml-3 space-y-10">
          {timeline.map(({ icon: Icon, title, place, body }) => (
            <li key={title} className="pl-8">
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background shadow-brand">
                <Icon className="h-4 w-4 text-brand-primary" />
              </span>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="text-sm text-brand-primary font-medium">{place}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
