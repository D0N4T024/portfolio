import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dandori",
    year: "2024",
    description: "Food Decision Web App — Interactive UI with user experience optimization.",
    role: "Web Development & Design",
    tags: ["Next.js", "Python", "NodeJS", "Azure DevOps", "Figma"],
    repoUrl: "https://github.com/D0N4T024/Dandori-Frontend",
    designUrl: "https://www.figma.com/design/Yk0O8YIaM1ql9OLa8KM57P/Dandori-team-library?node-id=2321-2&t=cLoyXT5a63i4r0h7-1",
  },
  {
    title: "BetterStudent",
    year: "2023",
    description: "Academic Social Network Mobile App — Social interaction features.",
    role: "Mobile Development & Design",
    tags: ["React Native", "Firebase", "Figma"],
    repoUrl: "https://github.com/siriuzz/BetterStudent",
    designUrl: "https://www.figma.com/design/nGO2hM7niQDMaDFDfEESOF/Interfaces-BetterStudent?node-id=0-1&t=FEktlUdi0jGNJnKh-1",
  },
  {
    title: "ComeYa",
    year: "2023",
    description: "Ecommerce Web Application — Full-stack ecommerce architecture.",
    role: "Web Development",
    tags: ["NextJS", "C# NET Core", "Stripe", "MySQL"],
    repoUrl: "https://github.com/D0N4T024/ComeYa",
    designUrl: "",
  },
  {
    title: "ToDoList",
    year: "2024",
    description: "To Do List Web App.",
    role: "Web Development & Testing",
    tags: ["NextJS", "Tailwind", "ESLint", "Jest", "CI/CD"],
    repoUrl: "https://github.com/siriuzz/ToDoList",
    designUrl: "",
  },
  {
    title: "GlassCore",
    year: "2023",
    description: "Academic Social Network Web App.",
    role: "Web Development",
    tags: ["NexJS", "Tailwind", "Azure DevOps", "Figma"],
    repoUrl: "https://github.com/D0N4T024/FrontEnd-Glasscore",
    designUrl: "https://www.figma.com/design/kbwR5KVwV6lSwKzrAggwQS/Proyecto-Final-Francia?node-id=0-1&t=rCXtTgvc7EidLZVS-1",
  },
  {
    title: "ControlGastos",
    year: "2022",
    description: "Expense/Transaction Management System.",
    role: "Desktop Development",
    tags: ["C# NET", "SQL"],
    repoUrl: "https://github.com/WilliamBPFR/ProyectoFinalIDS341",
    designUrl: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Projects</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Featured Work
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 glow-accent-hover hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover overlay */}
              {/* <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <ExternalLink size={16} /> View Details
                </span>
              </div> */}
              {/* Hover overlay */}
              {(p.repoUrl || p.designUrl) && (
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-xs font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                        View Repository
                      </a>
                    )}

                    {p.designUrl && (
                      <a
                        href={p.designUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-xs font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                        View Design
                      </a>
                    )}

                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-foreground text-lg">{p.title}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{p.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-[10px] border-border text-muted-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 font-mono">
          * Recent enterprise projects are not publicly displayed due to confidentiality.
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
