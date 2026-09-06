"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10+", label: "Client applications shipped — functional, responsive, in production" },
  { value: "7", label: "DevOps tools in daily use: Docker, Kubernetes, Terraform, GitHub Actions, Ansible, Prometheus, Grafana" },
  { value: "18", label: "Accessible UI components shipped on one production dashboard" },
  { value: "2 yrs", label: "Running production Linux infrastructure for a county government HMIS" },
];

const experience = [
  {
    role: "Software Developer",
    org: "AEGIS LMS — Network Intelligence Technologies",
    date: "Aug 2026 — present",
    detail:
      "Directing four AI coding agents across a Next.js/Tailwind client platform with an embedded cybersecurity training LMS — frontend, auth, student dashboard, and admin panel built as separate, coordinated stages.",
    link: "https://nit-website-eight.vercel.app/",
    linkLabel: "View live site",
  },
  {
    role: "Full-stack developer",
    org: "Blog app",
    date: "Personal build",
    detail:
      "A blog platform with a GraphQL API for publishing — I write and upload posts directly through GraphQL rather than a separate admin panel.",
    link: "https://blog-app-khaki-delta.vercel.app/",
    linkLabel: "View live site",
  },
  {
    role: "Founder",
    org: "SanaaHub",
    date: "Ongoing",
    detail:
      "Led a full technical audit and refactor of a Kenya-first handmade crafts marketplace: KES-native pricing, an RLS-safe payout settings table, and a payments migration from M-Pesa to Paystack/Instasend.",
    link: "https://sanaa-hub-xi3w.vercel.app/",
    linkLabel: "View live site",
  },
  {
    role: "Founder / Developer",
    org: "Mtandao Associates",
    date: "Personal build",
    detail:
      "A studio focused on portfolio website development for clients — clean, fast, responsive sites built to showcase individual and business work.",
    link: "https://mtandao-associates-git-main-nasiminyus-projects.vercel.app/",
    linkLabel: "View live site",
  },
  {
    role: "DevOps engineer",
    org: "DevOps projects",
    date: "Ongoing",
    detail:
      "Docker, Kubernetes, Terraform, GitHub Actions, Ansible, Prometheus, and Grafana — infrastructure and automation work built around maintaining uptime.",
    link: "https://github.com/IamHendy/devops-portfolio",
    linkLabel: "View repo",
  },
  {
    role: "Frontend Developer, contract",
    org: "Farm management SaaS",
    date: "Mar — Jul 2026",
    detail:
      "Next.js + shadcn/ui on an ERPNext backend — KPI sparklines, ARIA-accessible dialogs, and validated forms across 18 HR components. Private client project — no public link.",
  },
];

const stackGroups = [
  { group: "Cloud", items: ["AWS EC2 / VPC", "Lambda", "DynamoDB", "Aurora", "Redshift", "Auto Scaling"] },
  { group: "Platform", items: ["Kubernetes (KCNA)", "Docker", "GitHub Actions", "Trivy", "Nginx", "Certbot"] },
  { group: "Product", items: ["Next.js", "TypeScript", "Tailwind", "Supabase", "shadcn/ui"] },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Kubernetes and Cloud Native Associate (KCNA)",
  "Software Engineering — ALX",
  "AWS re/Start",
  "Data Science in Precision Medicine and Cloud Computing — Stanford",
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function StackGroup({ group, items, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <p className="font-mono text-xs uppercase tracking-wide text-cyan-400">
        {group}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your name"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-violet-400 focus:outline-none"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-violet-400 focus:outline-none"
        />
      </div>
      <textarea
        required
        name="message"
        rows={4}
        placeholder="What are you looking to build?"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-violet-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-center text-sm text-emerald-400">
          Message sent — I&apos;ll reply within a day.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Email me directly at nasiminyuogema@gmail.com.
        </p>
      )}
    </form>
  );
}

function scrollToSection(id) {
  const el = typeof document !== "undefined" ? document.getElementById(id) : null;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070C] text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 text-center sm:pt-32">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, #8B5CF6 0%, #22D3EE 55%, transparent 75%)",
          }}
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for consulting, partnerships &amp; collaborations
          </span>
          <h1 className="mt-6 bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl">
            Hendrica Ogema
          </h1>
          <p className="mt-2 font-mono text-sm text-muted">
            Software &amp; Cloud Engineer
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            3+ years across tech support, software development, cloud
            computing, and DevOps. I build and operate cloud infrastructure
            and product software — from Docker, Kubernetes, and Terraform to
            the responsive, user-friendly Next.js applications running on top
            of them. 10+ client applications shipped. Based in Nairobi,
            Kenya. Working with teams worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("work");
              }}
              className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan-300"
            >
              Work with me
            </a>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent">
                {s.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / work */}
      <section id="work" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-2xl font-medium">Selected work</h2>
        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <div
              key={job.role}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/50"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.date}</span>
              </div>
              <p className="mt-1 text-sm text-cyan-300">{job.org}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {job.detail}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-violet-300 underline decoration-violet-700 underline-offset-4"
                  >
                    {job.linkLabel} →
                  </a>
                )}
                {job.secondaryLink && (
                  <a
                    href={job.secondaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-cyan-300 underline decoration-cyan-700 underline-offset-4"
                  >
                    {job.secondaryLabel} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack — animated on scroll, not a slideshow */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-2xl font-medium">Stack</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stackGroups.map((s, i) => (
            <StackGroup key={s.group} group={s.group} items={s.items} index={i} />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-2xl font-medium">Certifications</h2>
        <ul className="mt-8 space-y-3">
          {certifications.map((c) => (
            <li
              key={c}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm"
            >
              <span className="text-emerald-400">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <h2 className="text-center text-2xl font-medium">Let&apos;s work together</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
          Tell me about the project — I&apos;ll get back to you directly.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
