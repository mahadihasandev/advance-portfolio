import { BarChart3, Users, ShoppingBag, Check, Smartphone } from "lucide-react";
import type { Project } from "@/lib/projects";
export default function ProjectVisual({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className={"project-visual " + project.theme}>
        <img
          src={project.image}
          alt={project.title + " interface"}
          loading="lazy"
        />
      </div>
    );
  const mobile = project.category === "Mobile apps";
  return (
    <div
      className={"project-visual illustrated " + project.theme}
      aria-hidden="true"
    >
      <span className="concept-label">INTERFACE CONCEPT</span>
      {mobile ? (
        <div className="phone">
          <div className="phone-notch" />
          <div className="phone-top">
            9:41 <Smartphone size={12} />
          </div>
          <small>
            {project.title === "BD Jobs Live"
              ? "YOUR NEXT CHAPTER"
              : "YOUR WORKDAY, SIMPLIFIED"}
          </small>
          <h4>
            {project.title === "BD Jobs Live"
              ? "Find your next\nopportunity."
              : "Good morning,\nlet’s get to work."}
          </h4>
          <div className="phone-banner">
            <span>
              {project.title === "BD Jobs Live"
                ? "Discover new roles"
                : "Your workspace"}
            </span>
            <strong>
              {project.title === "BD Jobs Live"
                ? "Made for ambition."
                : "Everything in sync."}
            </strong>
          </div>
          <div className="phone-grid">
            {["Overview", "Activity", "People", "Updates"].map((label, i) => (
              <div key={label}>
                {i % 2 ? <Users size={19} /> : <BarChart3 size={19} />}
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="phone-row">
            <Check size={15} /> You’re all caught up
          </div>
        </div>
      ) : (
        <div className="dashboard">
          <div className="window-bar">
            <i />
            <i />
            <i />
            <span>
              {project.title === "Point of sale"
                ? "Retail workspace"
                : "People workspace"}
            </span>
          </div>
          <div className="dashboard-body">
            <aside>
              <div className="mini-logo">m.</div>
              {[BarChart3, Users, ShoppingBag].map((Icon, i) => (
                <Icon key={i} size={17} />
              ))}
            </aside>
            <div className="dashboard-main">
              <small>WORKSPACE OVERVIEW</small>
              <h4>
                {project.title === "Point of sale"
                  ? "Your store, at a glance."
                  : "Good work starts with people."}
              </h4>
              <div className="metric-grid">
                {["Overview", "Activity", "Reports"].map((t) => (
                  <div key={t}>
                    <span>{t}</span>
                    <div className="skeleton" />
                  </div>
                ))}
              </div>
              <div className="chart">
                {[35, 60, 42, 78, 55, 90, 68, 82, 100, 76].map((h, i) => (
                  <i key={i} style={{ height: h + "%" }} />
                ))}
              </div>
              <div className="table-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
