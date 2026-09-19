"use client";

import { useEffect, useState, type ReactNode } from "react";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

type Shot = { src: string; alt: string; portrait?: boolean };

type Project = {
  title: string;
  role: string;
  description: string;
  stack: string[];
  shots?: Shot[];
};

function StackPills({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function ProjectGrid({
  projects,
  children,
}: {
  projects: Project[];
  children?: ReactNode;
}) {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-border p-5 transition-colors hover:border-accent"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(52,211,153,0.15),transparent)] group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700"
            />

            <h3 className="font-semibold">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => setSelected(project)}
                className="text-left after:absolute after:inset-0"
              >
                {project.title}
              </button>
            </h3>
            <p className="mt-1 font-mono text-xs text-accent">{project.role}</p>
            <p className="mt-3 text-sm text-muted">{project.description}</p>

            <div className="mt-auto pt-4">
              <StackPills stack={project.stack} />
              <p className="mt-4 font-mono text-xs text-muted">View details +</p>
            </div>
          </div>
        ))}
        {children}
      </div>

      {selected && (
        <div
          className="backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
            className="modal-in relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-background p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md border border-border px-2 py-1 font-mono text-xs text-muted transition hover:border-accent hover:text-foreground"
            >
              Close ✕
            </button>

            <h3 className="pr-20 text-2xl font-semibold">{selected.title}</h3>
            <p className="mt-1 font-mono text-xs text-accent">{selected.role}</p>
            <p className="mt-4 text-muted">{selected.description}</p>

            <div className="mt-5">
              <StackPills stack={selected.stack} />
            </div>

            <div className="mt-6">
              {selected.shots?.length ? (
                <ScreenshotCarousel shots={selected.shots} />
              ) : (
                <p className="rounded-md border border-dashed border-border p-6 text-center text-sm text-muted">
                  Screenshots coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}