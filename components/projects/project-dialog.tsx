"use client";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ExternalLink } from "../shared/ui";
export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!project) return;
    setIndex(0);
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      dialog.current?.close();
    };
  }, [project]);
  if (!project) return null;
  const images = project.gallery ?? [project.image!];
  const change = (step: number) =>
    setIndex((i) => (i + step + images.length) % images.length);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") change(1);
        if (e.key === "ArrowLeft") change(-1);
      }}
      aria-labelledby="project-dialog-title"
    >
      <button
        className="dialog-close"
        onClick={onClose}
        aria-label="Close project"
      >
        <X />
      </button>
      <div className="dialog-layout">
        <div
          className={`gallery-stage ${project.category === "Mobile apps" ? "portrait-gallery" : ""}`}
        >
          <img
            src={images[index]}
            alt={`${project.title} screenshot ${index + 1}`}
          />
          {images.length > 1 && (
            <div className="gallery-controls">
              <button
                onClick={() => change(-1)}
                aria-label="Previous screenshot"
              >
                <ChevronLeft />
              </button>
              <span aria-live="polite">
                {index + 1} / {images.length}
              </span>
              <button onClick={() => change(1)} aria-label="Next screenshot">
                <ChevronRight />
              </button>
            </div>
          )}
          <p className="image-note">
            {project.imageNote ??
              (project.type.includes("SMART SOFTWARE")
                ? "Screenshots from the public Google Play listing."
                : "Screenshot from the original project portfolio.")}
          </p>
        </div>
        <div className="dialog-details">
          <p className="eyebrow">{project.type}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h3>Inside the project</h3>
          <ul>
            {(
              project.highlights ?? [
                project.description,
                `Built with ${project.tags.join(", ")}.`,
                project.category === "Mobile apps"
                  ? "Explore the mobile experience using the links below."
                  : "Explore the live product or review the public source code.",
              ]
            ).map((t) => (
              <li key={t}>
                <Check size={17} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="project-links">
            {project.links.map((l) => (
              <ExternalLink key={l.url} href={l.url}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
          {project.type.includes("SMART SOFTWARE") && (
            <p className="contribution-note">
              Company project. My contribution was made as part of the Smart
              Software Ltd team.
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
