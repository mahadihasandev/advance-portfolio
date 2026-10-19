import {
  Code2,
  Layers,
  Smartphone,
  ArrowUpRight,
  GraduationCap,
  Award,
} from "lucide-react";
import { skills, profile, education, trainings } from "@/lib/profile";
import { Reveal, SectionHeading, ExternalLink } from "../shared/ui";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          number="02"
          label="A LITTLE ABOUT ME"
          title="A builder at heart."
        />
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="large-copy">
              I like making complicated things feel <em>simple.</em>
            </p>
            <p>
              I’m Mahadi, a developer based in Dhaka, Bangladesh. I work across
              mobile and web, bringing together clean interfaces, practical
              backend engineering, and a curiosity for how things work.
            </p>
            <p>
              At Smart Software Ltd, I build React Native applications and
              improve existing products through development and interface
              redesigns. Outside company work, I explore full-stack ideas
              through hands-on projects.
            </p>
            <ExternalLink href={profile.github} className="text-link">
              See what I’m building on GitHub
            </ExternalLink>

            <div className="education-block">
              <div className="block-title">
                <GraduationCap size={18} />
                <span>EDUCATION & ACADEMIC BACKGROUND</span>
              </div>
              <div className="education-list">
                {education.map((edu) => (
                  <div className="education-item" key={edu.degree}>
                    <div className="education-header">
                      <strong>{edu.degree}</strong>
                      <span className="education-badge">{edu.period}</span>
                    </div>
                    <p className="education-school">{edu.institution}</p>
                    <p className="education-note">{edu.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="about-side">
            <div className="skills-grid">
              {skills.map((s, i) => {
                const Icon = [Smartphone, Code2, Layers, ArrowUpRight][i];
                return (
                  <Reveal className="skill-group" key={s.title}>
                    <Icon size={25} />
                    <h3>{s.title}</h3>
                    <div>
                      {s.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="trainings-block">
              <div className="block-title">
                <Award size={18} />
                <span>PROFESSIONAL TRAININGS & CERTIFICATIONS</span>
              </div>
              <div className="trainings-grid">
                {trainings.map((t) => (
                  <div className="training-card" key={t.title}>
                    <div className="training-header">
                      <strong>{t.title}</strong>
                      {t.fullName && <span>{t.fullName}</span>}
                    </div>
                    <p className="training-track">{t.track}</p>
                    <div className="training-tags">
                      {t.skills.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
