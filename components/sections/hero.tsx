import { ArrowDown, ArrowUpRight, MapPin, Github } from "lucide-react";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { ExternalLink, Reveal } from "../shared/ui";
export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero container">
        <Reveal className="hero-copy">
          <p className="availability">
            <span /> Available for the right opportunity
          </p>
          <p className="intro">MAHADI HASAN / DEVELOPER</p>
          <h1>
            I build apps.
            <br />
            You feel the
            <br />
            <span>difference.</span>
          </h1>
          <p className="hero-description">
            React Native & full-stack developer building the bridge between{" "}
            <strong>great interfaces</strong> and{" "}
            <strong>real-world functionality.</strong>
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Discover my work <ArrowDown size={18} />
            </a>
            <ExternalLink href={profile.resume} className="button secondary">
              View résumé
            </ExternalLink>
          </div>
          <div className="hero-social">
            <ExternalLink href={profile.github}>
              <Github size={16} /> GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.facebook}>Facebook</ExternalLink>
            <span>
              <MapPin size={15} /> Dhaka, Bangladesh
            </span>
          </div>
        </Reveal>
        <Reveal className="hero-showcase">
          <div className="showcase-grid" />
          <div className="showcase-label">
            <span /> BUILDING ACROSS SCREENS
          </div>
          <div className="hero-browser">
            <div className="browser-chrome">
              <i />
              <i />
              <i />
              <span>Full-stack web experiences</span>
            </div>
            <img
              src="/assets/shop-next.png"
              alt="Mahadi’s real e-commerce web project"
              fetchPriority="high"
            />
          </div>
          <div className="hero-device">
            <img
              src="/assets/hrm-1.webp"
              alt="Published Mamun Group HRM mobile app attendance screen"
              fetchPriority="high"
            />
          </div>
          <div className="hero-device secondary-device">
            <img
              src="/assets/jobs-0.webp"
              alt="Published BD Jobs Live application"
            />
          </div>
          <div className="developer-chip">
            <img src="/assets/favicon.jpg" alt="Mahadi Hasan" />
            <div>
              <strong>Mahadi Hasan</strong>
              <span>React Native Developer</span>
            </div>
            <ArrowUpRight size={20} />
          </div>
          <div className="showcase-sticker">
            From concept
            <br />
            <strong>to real life. ↗</strong>
          </div>
        </Reveal>
        <div className="hero-bottom">
          <div>
            <span>CURRENTLY BUILDING AT</span>
            <strong>
              Smart Software Ltd <ArrowUpRight size={16} />
            </strong>
          </div>
          <div>
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            <span>PROJECTS TO EXPLORE</span>
          </div>
          <div>
            <strong>Mobile + Web</strong>
            <span>ONE CONNECTED SKILL SET</span>
          </div>
          <a href="#work">
            SCROLL TO EXPLORE <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
