import { Search, Layers3, Code2, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "../shared/ui";
const steps = [
  {
    title: "Understand the problem",
    text: "Start with the people, the workflow, and what the product needs to make easier.",
    icon: Search,
  },
  {
    title: "Shape the experience",
    text: "Turn complex requirements into clear screens, predictable navigation, and reusable components.",
    icon: Layers3,
  },
  {
    title: "Build the foundation",
    text: "Connect the interface to real data with thoughtful state management and maintainable code.",
    icon: Code2,
  },
  {
    title: "Refine the details",
    text: "Review the small interactions, responsive layouts, and edge cases that make a product feel complete.",
    icon: Sparkles,
  },
];
export default function Approach() {
  return (
    <section className="approach section">
      <div className="container">
        <SectionHeading
          number="04"
          label="HOW I THINK ABOUT BUILDING"
          title="Good software is intentional."
        />
        <div className="approach-grid">
          {steps.map((step, i) => (
            <Reveal className="approach-card" key={step.title}>
              <div>
                <step.icon size={26} />
                <span>0{i + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
