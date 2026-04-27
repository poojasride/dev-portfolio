import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-brand-accent/30 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-secondary/25 blur-3xl animate-blob [animation-delay:-12s]" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold text-gradient">
          Pooja Sri.dev
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted/60 transition-colors"
              activeProps={{
                className: "px-4 py-2 text-sm font-medium rounded-md text-foreground bg-muted",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Hire me
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/90 backdrop-blur-xl">
          <div className="container mx-auto flex flex-col px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
                activeProps={{ className: "py-3 text-sm font-semibold text-gradient" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pooja Sri. Crafted with the MERN stack.
        </p>
        <div className="flex items-center gap-2">
          {[
            { href: "https://github.com/poojasride", icon: Github, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/poojasri-s-developer/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "mailto:pooja.sri.06.2001@gmail.com", icon: Mail, label: "Email" },
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
    </footer>
  );
}

export function SiteLayout({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <GradientBlobs />
      <Header />
      <main className={cn("flex-1", className)}>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
