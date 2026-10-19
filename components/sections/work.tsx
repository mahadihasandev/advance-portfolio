"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { setFilter, type RootState, type Filter } from "@/lib/store";
import { ExternalLink, Reveal, SectionHeading } from "../shared/ui";
import ProjectVisual from "../projects/project-visual";
import ProjectDialog from "../projects/project-dialog";
export default function Work() {
  const dispatch = useDispatch();
  const filter = useSelector((s: RootState) => s.portfolio.filter);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(
    (p) =>
      (filter === "All work" || p.category === filter) &&
      `${p.title} ${p.tags.join(" ")} ${p.description}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section id="work" className="work section container">
      <SectionHeading
        number="01"
        label="THE PROJECT COLLECTION"
        title="Real products. Real work."
      >
        <p>
          Mobile apps in the hands of users.
          <br />
          Web platforms with the code to back them up.
        </p>
      </SectionHeading>
      <div className="project-toolbar">
        <div className="filters" aria-label="Filter projects">
          {(["All work", "Mobile apps", "Web platforms"] as Filter[]).map(
            (f) => (
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
            ),
          )}
        </div>
        <label className="project-search">
          <Search size={17} />
          <input
            aria-label="Search projects"
            placeholder="Search projects or technologies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery("")}>
              ×
            </button>
          )}
        </label>
      </div>
      <div className="project-grid" aria-live="polite">
        {filtered.map((p, i) => (
          <Reveal
            className={`project-card ${i === 0 && !query ? "featured-project" : ""}`}
            key={p.title}
          >
            <ProjectVisual project={p} onOpen={() => setSelected(p)} />
            <div className="project-content">
              <div className="project-meta">
                <p className="eyebrow">{p.type}</p>
                <span>/{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>
                <button onClick={() => setSelected(p)}>
                  {p.title}
                  <ArrowUpRight size={19} />
                </button>
              </h3>
              <p className="project-description">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <button onClick={() => setSelected(p)}>
                  Project details <ArrowUpRight size={14} />
                </button>
                {p.links.slice(0, 2).map((l) => (
                  <ExternalLink key={l.url} href={l.url}>
                    {l.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-projects">
          <h3>No matching projects</h3>
          <p>Try a technology such as React, Next.js, or PHP.</p>
          <button
            className="button primary"
            onClick={() => {
              setQuery("");
              dispatch(setFilter("All work"));
            }}
          >
            Reset filters
          </button>
        </div>
      )}
      <p className="work-footnote">
        Showing {filtered.length} projects · Original project screenshots and
        public store imagery · Company work credited to the team.
      </p>
      <ProjectDialog
        key={selected?.title ?? "closed"}
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
