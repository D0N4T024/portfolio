import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "Open English",
    degree: "Business English",
    period: "Jan 2026 – In Progress",
  },
  {
    school: "Instituto Tecnológico de Santo Domingo (INTEC)",
    degree: "Software Engineering",
    period: "Oct 2021 – Jan 2025",
  },
  {
    school: "Instituto Cultural Dominico Americano",
    degree: "English - Advanced Level",
    period: "",
  },
  {
    school: "Centro Educativo Cristiano",
    degree: "Primary / Bachelor Studies",
    period: "",
  },
];

const certifications = [
  "IBM Project Manager Professional Certificate (In Progress)",
  "SAS Academic Specialization in Data Mining & Business Intelligence (2025)",
  "Fortinet Certified Associate in Cybersecurity (2025)",
  "Ignition Gold Certification (2024)",
  "Front-End Developer Certification (2023)",
  "Back-End Developer Certification (2023)",
  "Process Improvement Certification (2023)",
  "JavaScript Developer – React (2023)",
  "JavaScript Developer – Node.js (2023)",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Education & Certifications</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Learning & Growth
        </h2>

        {/* Education */}
        <div className="mb-14 space-y-6">
          {education.map((e, i) => (
            <div key={i} className="glass-card p-6 flex items-start gap-4 glow-accent-hover transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{e.degree}</h3>
                <p className="text-muted-foreground text-sm">{e.school}</p>
                {e.period && <p className="text-primary text-xs mt-1 font-mono">{e.period}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications grid */}
        <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
          <Award className="text-primary" size={20} /> Certifications
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 glow-accent-hover"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
