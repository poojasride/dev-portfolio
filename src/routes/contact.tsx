import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pooja Sri" },
      { name: "description", content: "Get in touch with Pooja Sri for MERN stack development projects and collaborations." },
      { property: "og:title", content: "Contact Pooja Sri" },
      { property: "og:description", content: "Let's build something together — MERN stack developer for hire." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <SiteLayout>
      <Toaster />
      <section className="container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-primary">Contact</p>
          <h1 className="mt-4 font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Let's build <span className="text-gradient">something great</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have a project in mind, a role to fill, or just want to chat about web architecture? Drop me a line —
            I read every message.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@Pooja Sri.dev" },
              { icon: MapPin, label: "Based in", value: "Berlin, Germany — remote-friendly" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hero-gradient">
                  <Icon className="h-4 w-4 text-foreground" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Find me online</p>
              <div className="mt-3 flex gap-2">
                {[
                  { href: "https://github.com", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-brand-primary/60 hover:text-brand-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-background/70 backdrop-blur p-6 lg:p-8 shadow-brand"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" type="text" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <Field label="Subject" name="subject" type="text" placeholder="Project inquiry" className="mt-5" required />
            <div className="mt-5">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/60 transition"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-brand hover:opacity-90 disabled:opacity-60 transition-opacity"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/60 transition"
      />
    </div>
  );
}
