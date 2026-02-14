import { motion } from "framer-motion";
import { Code, Users, Cpu, Palette, GitBranch, Database, BarChart3, BrainCircuit, Layout } from "lucide-react";

const technicalSkills = [
  { name: "Python", icon: Code },
  { name: "JavaScript / TypeScript", icon: Code },
  { name: "React / Next.js", icon: Layout },
  { name: "C# ASP.NET", icon: Cpu },
  { name: "HTML / CSS", icon: Palette },
  { name: "SQL & DBA", icon: Database },
  { name: "Ignition SCADA", icon: BarChart3 },
  { name: "Git", icon: GitBranch },
];

const professionalSkills = [
  { name: "Project Management", icon: Users },
  { name: "Agile Methodologies", icon: BrainCircuit },
  { name: "Technical Leadership", icon: Users },
  { name: "System Architecture", icon: Cpu },
  { name: "UX/UI Design (Figma)", icon: Palette },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Skills & Expertise</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          What I Bring
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 glow-accent-hover transition-all duration-300 group"
                >
                  <s.icon className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {professionalSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 glow-accent-hover transition-all duration-300 group"
                >
                  <s.icon className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
