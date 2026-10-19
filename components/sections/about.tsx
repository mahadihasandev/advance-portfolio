import { Code2, Layers, Smartphone, ArrowUpRight } from "lucide-react";
import { skills, profile } from "@/lib/profile";
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
            <div className="education">
              <span>EDUCATION</span>
              <strong>B.Sc. in Computer Science & Engineering</strong>
              <p>
                Bangladesh University of Business and Technology (BUBT) · 2022
              </p>
            </div>
          </Reveal>
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
        </div>
      </div>
    </section>
  );
}
