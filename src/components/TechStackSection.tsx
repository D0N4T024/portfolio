import { motion } from "framer-motion";
import { Code, Database, GitBranch, Palette, Layout, Cpu, BarChart3, Globe, Terminal, TabletSmartphoneIcon } from "lucide-react";

const stack = [
  { name: "Python", icon: Terminal },
  { name: "React", icon: Layout },
  { name: "React Native", icon: TabletSmartphoneIcon },
  { name: "Next.js", icon: Globe },
  { name: "SQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: Palette },
  { name: "ASP.NET", icon: Cpu },
  { name: "Ignition", icon: BarChart3 },
  { name: "JavaScript", icon: Code },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 flex flex-col items-center gap-3 hover:border-primary/40 glow-accent-hover transition-all duration-300 group"
            >
              <s.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
