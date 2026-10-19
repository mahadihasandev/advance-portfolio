import { ArrowDown, ArrowUpRight, Code2, MapPin } from "lucide-react";
import { profile } from "@/lib/profile";
import { ExternalLink, Reveal } from "../shared/ui";
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <Reveal className="hero-copy">
        <p className="availability">
          <span /> Open to the right opportunity
        </p>
        <p className="intro">Hello, I’m Mahadi Hasan.</p>
        <h1>
          Thoughtful code.
          <br />
          Meaningful
          <br />
          <span>experiences.</span>
        </h1>
        <p className="hero-description">
          React Native & full-stack developer turning complex ideas into
          intuitive mobile and web applications.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore my work <ArrowDown size={17} />
          </a>
          <ExternalLink href={profile.resume} className="text-link">
            View résumé
          </ExternalLink>
        </div>
        <div className="hero-location">
          <MapPin size={14} /> Based in Dhaka, Bangladesh <span>·</span>{" "}
          Building for everywhere
        </div>
      </Reveal>
      <Reveal className="portrait-composition">
        <div className="portrait-backdrop" />
        <span className="portrait-star" aria-hidden="true">
          ✳
        </span>
        <div className="portrait-frame">
          <img
            src="/assets/favicon.jpg"
            alt="Mahadi Hasan"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span>THE DEVELOPER BEHIND THE CODE</span>
            <ArrowUpRight size={20} />
          </div>
        </div>
        <div className="floating-label">
          <div className="code-icon">
            <Code2 size={25} />
          </div>
          <div>
            <strong>Building beyond the browser.</strong>
            <span>Mobile · Web · Everything between</span>
          </div>
        </div>
        <span className="portrait-note">
          A little curiosity. A lot of care.
        </span>
      </Reveal>
      <div className="hero-bottom">
        <span>
          CURRENTLY AT <strong>Smart Software Ltd</strong>
        </span>
        <a href="#work">
          SCROLL TO DISCOVER <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
