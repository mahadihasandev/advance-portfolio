import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
export default function ProjectVisual({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const mobile = project.category === "Mobile apps";
  const images = project.gallery?.slice(0, 3) ?? [project.image!];
  return (
    <button
      className={`project-visual ${project.theme} ${mobile ? "mobile-preview" : "web-preview"}`}
      onClick={onOpen}
      aria-label={`View ${project.title} screenshots and details`}
    >
      <span className="preview-label">
        {mobile ? "MOBILE EXPERIENCE" : "WEB APPLICATION"}
      </span>
      <div className={mobile ? "device-gallery" : "browser-frame"}>
        {!mobile && (
          <div className="browser-chrome">
            <i />
            <i />
            <i />
            <span>
              {project.links
                .find((l) => l.label === "Live website")
                ?.url.replace("https://", "") ?? project.title}
            </span>
          </div>
        )}
        {mobile ? (
          images.map((image, i) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
            />
          ))
        ) : (
          <img
            src={project.image ?? images[0]}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
        )}
      </div>
      <span className="preview-action">
        Explore project <ArrowUpRight size={18} />
      </span>
    </button>
  );
}
