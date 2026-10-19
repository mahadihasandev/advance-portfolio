import { Reveal, SectionHeading } from "../shared/ui";
const roles = [
  {
    title: "React Native Developer",
    company: "Smart Software Ltd",
    period: "CURRENT ROLE",
    description:
      "Building and improving mobile applications in Bangladesh, with contributions spanning HRM & ERP, recruitment, weather, hotel, and other company apps.",
    points: [
      "Develop React Native experiences for mobile products.",
      "Modify and redesign existing applications to improve their interfaces.",
      "Contribute within a team across multiple business domains.",
    ],
  },
  {
    title: "Junior Network Engineer",
    company: "Drick ICT Ltd.",
    period: "PREVIOUS EXPERIENCE",
    description:
      "Worked on network monitoring, connectivity troubleshooting, and Linux server and network configuration.",
    points: [
      "Monitored connectivity and coordinated link restoration.",
      "Configured network services and protocols including DHCP, DNS, VLAN, OSPF, EIGRP, and BGP.",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="03"
        label="THE JOURNEY"
        title="Experience that connects."
      />
      {roles.map((r, i) => (
        <Reveal key={r.company} className="experience-row">
          <div className="experience-time">
            <span className={i === 0 ? "status-dot" : ""} />
            {r.period}
          </div>
          <div>
            <h3>{r.title}</h3>
            <p className="company">{r.company}</p>
          </div>
          <div className="experience-description">
            <p>{r.description}</p>
            <ul>
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
