"use client";
import { useDispatch, useSelector } from "react-redux";
import { ArrowDown } from "lucide-react";
import { projects, companyApps } from "@/lib/projects";
import {
  setFilter,
  toggleExpanded,
  type RootState,
  type Filter,
} from "@/lib/store";
import { ExternalLink, Reveal, SectionHeading } from "../shared/ui";
import ProjectVisual from "../projects/project-visual";
export default function Work() {
  const dispatch = useDispatch();
  const { filter, expanded } = useSelector((s: RootState) => s.portfolio);
  const filtered = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  const visible = expanded ? filtered : filtered.slice(0, 4);
  return (
    <section id="work" className="work section container">
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title="Built with purpose."
      >
        <p>
          A selection of mobile experiences and web
          <br className="desktop-break" /> platforms. From idea to
          implementation.
        </p>
      </SectionHeading>
      <div className="filters" aria-label="Filter projects">
        {(["All work", "Mobile apps", "Web platforms"] as Filter[]).map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            className={filter === f ? "active" : ""}
            onClick={() => dispatch(setFilter(f))}
          >
            {f}
            <span>
              {f === "All work"
                ? projects.length
                : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {visible.map((p, i) => (
          <Reveal className="project-card" key={p.title}>
            <ProjectVisual project={p} />
            <div className="project-meta">
              <p className="eyebrow">{p.type}</p>
              <span>/{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="project-description">{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {p.links.map((l) => (
                <ExternalLink key={l.url} href={l.url}>
                  {l.label}
                </ExternalLink>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      {filtered.length > 4 && (
        <button
          className="button more-button"
          onClick={() => dispatch(toggleExpanded())}
        >
          {expanded
            ? "Show selected work"
            : `Explore all ${filtered.length} projects`}
          <ArrowDown
            size={16}
            style={{ transform: expanded ? "rotate(180deg)" : undefined }}
          />
        </button>
      )}
      <div className="more-apps">
        <div>
          <p className="eyebrow">MORE COMPANY CONTRIBUTIONS</p>
          <p>More apps. The same attention to detail.</p>
          <small>
            Development, modifications, and interface redesigns at Smart
            Software Ltd.
          </small>
        </div>
        <div>
          {companyApps.map((a) => (
            <ExternalLink
              key={a.id}
              href={"https://play.google.com/store/apps/details?id=" + a.id}
            >
              {a.title}
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  );
}
