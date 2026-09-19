import Image from "next/image";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import ProjectGrid from "@/components/ProjectGrid";
import { FaGithub, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const contactLinks = [
  {
    label: "GitHub",
    value: "gregorio-johnrex-bsit21",
    href: "https://github.com/gregorio-johnrex-bsit21",
    icon: FaGithub,
  },
  {
    label: "TikTok",
    value: "@joestar083",
    href: "https://www.tiktok.com/@joestar083",
    icon: FaTiktok,
  },
  {
    label: "Gmail",
    value: "johnrexgregorio094@gmail.com",
    href: "mailto:johnrexgregorio094@gmail.com",
    icon: SiGmail,
  },
];

const ojtShots = [
  { src: "/screenshots/ojt-landing.webp", alt: "CHMSU OJT Manager landing page" },
  { src: "/screenshots/ojt-supervisor.webp", alt: "OJT supervisor dashboard" },
  { src: "/screenshots/ojt-admin.webp", alt: "OJT admin dashboard" },
  { src: "/screenshots/ojt-student-mobile.webp", alt: "OJT student dashboard on mobile", portrait: true },
  { src: "/screenshots/ojt-chat-mobile.webp", alt: "OJT chat on mobile", portrait: true },
  { src: "/screenshots/ojt-notif-mobile.webp", alt: "OJT notifications on mobile", portrait: true },
];


const facts = [
  { label: "Studying", value: "BSIT at CHMSU" },
  { label: "Building with", value: "Laravel, Kotlin, Python" },
];

const capabilities = [
  {
    title: "Web Systems",
    description:
      "Database-driven web apps with Laravel, PHP, MySQL, and JavaScript.",
  },
  {
    title: "Desktop Apps",
    description: "Local desktop apps with Python, Tkinter, and MySQL.",
  },
  {
    title: "Android Apps",
    description:
      "Kotlin and Jetpack Compose with Firebase, plus wrapping a hosted web app with Capacitor.",
  },
  {
    title: "Basic IT Support",
    description:
      "Computer troubleshooting, diagnostics, and maintenance. Networking is academic-level only.",
  },
];

const ojtFeatures = [
  "Student, Supervisor, and Admin roles with protected routes",
  "OJT hours tracking against target and remaining hours",
  "Task management with proof uploads and grading",
  "Notes/diary, chat, and notifications",
];

const ojtStack = [
  "Laravel",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
];

const otherProjects = [
  {
    title: "CashTrack",
    role: "Personal project. Still in progress.",
    description:
      "Android app that automates the manual auditing I do for my GCash side hustle: cash in, cash out, and load transactions, customers, and wallet balance.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"],
    // shots: [{ src: "/screenshots/cashtrack-1.webp", alt: "CashTrack home screen", portrait: true }],
  },
  {
    title: "Student Information System",
    role: "Solo project",
    description:
      "Desktop app with separate Admin and Student logins and full CRUD on student records.",
    stack: ["Python", "Tkinter", "MySQL"],
  },
  {
    title: "Gym Management System",
    role: "Solo project",
    description:
      "Client and admin system with database-backed booking and membership functions.",
    stack: ["PHP", "MySQL"],
  },
];

const skillGroups = [
  {
    label: "Web",
    items: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    label: "Desktop",
    items: ["Python", "Tkinter", "MySQL"],
  },
  {
    label: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio", "Capacitor"],
  },
  {
    label: "Tools & Platforms",
    items: ["VS Code", "XAMPP", "Git", "GitHub", "Render", "Node.js / npm"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6">
      <section id="hero" className="py-16 sm:py-32">
  <div className="flex flex-col-reverse items-center gap-6 text-center sm:flex-row sm:justify-between sm:gap-10 sm:text-left">
    <div>
  <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
  <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">
    Jrex
  </h1>
  <p className="mt-3 text-xl text-muted">Aspiring Programmer</p>

  <p className="mx-auto mt-6 max-w-md font-mono text-sm text-muted sm:mx-0">
    &quot;If life gives you error, just debug it.&quot;
  </p>

  <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
    {contactLinks.map((link) => {
      const Icon = link.icon;
      return (
        <a key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <Icon className="h-4 w-4" aria-hidden />
          {link.label}
        </a>
      );
    })}
  </div>

  <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
    <a href="#projects"
      className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
    >
      View projects
    </a>
    <a href="/Johnrex_Gregorio_CV.pdf"
      download="Johnrex_Gregorio_CV.pdf"
      className="rounded-md border border-border px-5 py-2.5 text-sm transition hover:border-muted"
    >
      Download CV
    </a>
  </div>
</div>

    <Image
      src="/jrex.jpg"
      alt="Photo of Jrex"
      width={224}
      height={224}
      priority
      className="h-32 w-32 rounded-full border border-border object-cover object-top sm:h-56 sm:w-56 sm:rounded-2xl"
    />
  </div>
</section>


      <section id="about" className="border-t border-border py-16">
  <h2 className="font-mono text-sm text-accent">About</h2>

  <div className="mt-6 max-w-2xl space-y-4 text-muted">
    <p>
      I&apos;m Jrex, a 3rd-year BSIT student. I like building small web,
      desktop, and mobile projects to see how things actually work, from
      setting up the database to getting the interface running.
    </p>
    <p>
      So far that includes Laravel web apps, a Python desktop system, and
      Android apps in Kotlin. I also have a background in basic IT support.
    </p>
    <p>
      I use AI tools a lot while building. I test, debug, and modify what I
      get, and I try to understand it well enough to explain it.
    </p>
  </div>

  <dl className="mt-10 grid gap-6 sm:grid-cols-3">
    {facts.map((fact) => (
      <div key={fact.label} className="border-l border-border pl-4">
        <dt className="font-mono text-xs text-muted">{fact.label}</dt>
        <dd className="mt-1">{fact.value}</dd>
      </div>
    ))}
  </dl>
</section>

<section id="skills-overview" className="border-t border-border py-16">
  <h2 className="font-mono text-sm text-accent">What I can do</h2>

  <div className="mt-8 grid gap-4 sm:grid-cols-2">
    {capabilities.map((item) => (
      <div
        key={item.title}
        className="rounded-lg border border-border p-5 transition hover:border-muted"
      >
        <h3 className="font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-muted">{item.description}</p>
      </div>
    ))}
  </div>
</section>

<section id="projects" className="border-t border-border py-16">
  <h2 className="font-mono text-sm text-accent">Featured project</h2>

  <div className="mt-8 rounded-lg border border-border p-6 sm:p-8">
    <h3 className="text-2xl font-semibold">CHMSU OJT Manager</h3>
    <p className="mt-3 max-w-2xl text-muted">
  A web-based OJT tracking system that handles hours, tasks, and
  requirements for students, supervisors, and admins. Hosted on Render.
</p>
<div className="mt-6">
  <ScreenshotCarousel shots={ojtShots} />
</div>

    <div className="mt-6 rounded-md border border-border bg-white/[0.02] p-4">
      <p className="font-mono text-xs text-accent">My role</p>
      <p className="mt-1 text-sm text-muted">
        Group project. I built the student front-end and back-end, plus the
        admin and supervisor back-end logic.
      </p>
    </div>

    <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-muted">
      {ojtFeatures.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
 
    <div className="mt-6 flex flex-wrap gap-2">
      {ojtStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      
        <a href="https://bsit21-itpe12-s5wo.onrender.com/landing"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
      >
        Live demo
      </a>
    </div>
  </div>
</section>

<section id="other-projects" className="border-t border-border py-16">
  <h2 className="font-mono text-sm text-accent">Other projects</h2>

  <ProjectGrid projects={otherProjects}>
    <div className="flex flex-col rounded-lg border border-dashed border-border p-5">
      <h3 className="font-semibold">BoardersHub</h3>
      <p className="mt-1 font-mono text-xs text-accent">
        3rd-year mini capstone. Group project, in planning.
      </p>
      <p className="mt-3 text-sm text-muted">
        A boarding house management system for landlords and tenants. It
        tracks rooms and bed spaces, and has a configurable billing engine
        that splits rent, device surcharges, shared appliances, and Wi-Fi
        costs. I&apos;d like to build it with Laravel.
      </p>
    </div>
  </ProjectGrid>
</section>


<section id="skills" className="border-t border-border py-16">
  <h2 className="font-mono text-sm text-accent">Skills &amp; technologies</h2>

  <div className="mt-8 space-y-6">
    {skillGroups.map((group) => (
      <div key={group.label}>
        <h3 className="font-mono text-xs text-muted">{group.label}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>

  <p className="mt-8 max-w-2xl text-sm text-muted">
    Also basic IT support: troubleshooting, diagnostics, and maintenance. I
    have academic exposure to peer-to-peer and client-server networking, but
    networking isn&apos;t a strength of mine.
  </p>
</section>

<section id="log" className="border-t border-border py-16">
  <h2 className="font-mono text-sm text-accent">Project log</h2>

  <p className="mt-6 max-w-2xl text-muted">
    I enjoy building small projects and sharing them online. It&apos;s a way
    for me to document what I&apos;m learning, experiment with new ideas,
    and share things I build.
  </p>

  
    <a href="https://www.tiktok.com/@joestar083"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block rounded-md border border-border px-5 py-2.5 text-sm transition hover:border-accent"
  >
    See what I post on TikTok
  </a>
</section>


    </main>
  );
}