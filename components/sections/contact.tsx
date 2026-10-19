"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  ArrowUp,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { profile, socials } from "@/lib/profile";
import { ExternalLink, Reveal } from "../shared/ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setError(true);
    }
  }

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <p className="eyebrow">05 / LET’S BUILD SOMETHING GOOD</p>
          <div className="contact-heading">
            <h2>
              Your next idea.
              <br />
              <span>Our next conversation.</span>
            </h2>
            <a
              href={"mailto:" + profile.email}
              aria-label="Email Mahadi"
              className="contact-arrow"
            >
              <ArrowUpRight />
            </a>
          </div>
          <p>
            Have a role, a project, or just a good question? I’d love to hear
            from you.
          </p>

          <Reveal className="social-cards-grid">
            {socials.map((s) => {
              const Icon =
                s.name === "GitHub"
                  ? Github
                  : s.name === "LinkedIn"
                    ? Linkedin
                    : Facebook;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-card-header">
                    <div className="social-card-icon">
                      <Icon size={22} />
                    </div>
                    <span className="social-card-badge">{s.badge}</span>
                  </div>
                  <div className="social-card-body">
                    <h3>{s.name}</h3>
                    <p className="social-card-handle">{s.handle}</p>
                    <p className="social-card-desc">{s.description}</p>
                  </div>
                  <div className="social-card-cta">
                    <span>Connect on {s.name}</span>
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              );
            })}
          </Reveal>

          <div className="contact-bottom">
            <div className="email-group">
              <a href={"mailto:" + profile.email}>{profile.email}</a>
              <button onClick={copy} aria-label="Copy email address">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
              <span role="status">
                {copied
                  ? "Copied!"
                  : error
                    ? "Please select and copy the email above."
                    : ""}
              </span>
            </div>
            <div className="social-links">
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profile.facebook}>Facebook</ExternalLink>
              <a href={"tel:" + profile.phone}>
                Call me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="container footer">
        <a href="#home" className="wordmark">
          mahadi<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Mahadi Hasan. Built with care.</p>
        <a href="#home">
          Back to top <ArrowUp size={15} />
        </a>
      </footer>
    </>
  );
}
