import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "Intelca S.R.L.",
    period: "Mar 2025 – Present",
    current: true,
    bullets: [
      "Software architecture design",
      "Development of critical components",
      "Sprint coordination & delivery planning",
      "Developer mentoring & code reviews",
      "Project supervision",
      "Performance optimization & scalability",
      "Strategic technical decisions",
    ],
  },
  {
    title: "Mid-Senior Software Developer",
    company: "Intelca S.R.L.",
    period: "Nov 2024 – Mar 2025",
    current: false,
    bullets: [
      "Ignition system implementation & configuration",
      "Database integration (MySQL / SQL Server)",
      "Advanced modules with Python",
      "Agile frameworks (Scrum, Kanban)",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Intelca S.R.L.",
    period: "Feb 2024 – Nov 2024",
    current: false,
    bullets: [
      "Python + Java development",
      "Relational database design",
      "Ignition SCADA solutions",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Experience</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Where I've Worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary glow-accent"
                      : "bg-background border-muted-foreground"
                  }`}
                />

                <div className={`glass-card p-6 transition-all duration-300 ${exp.current ? "border-primary/30 glow-accent" : "glow-accent-hover"}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-lg text-foreground">{exp.title}</h3>
                    {exp.current && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{exp.company}</p>
                  <p className="text-primary text-xs font-mono mb-4">{exp.period}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
