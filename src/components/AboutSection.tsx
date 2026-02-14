import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// About Me</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Get to know me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Engineer with a degree from the Instituto Tecnológico de Santo Domingo (INTEC),
              combining strong technical expertise with leadership and project management skills.
            </p>
            <p>
              My experience spans full-stack development, system architecture, and UX/UI design.
              I thrive on coordinating medium-to-high complexity projects, mentoring developers,
              and leading integrations that drive business value.
            </p>
            <p>
              I'm passionate about building scalable, maintainable systems and making strategic
              technical decisions that align engineering excellence with organizational goals.
            </p>
          </div>

          {/* Quote card */}
          <div className="glass-card p-8 glow-accent-hover transition-all duration-300">
            <Quote className="text-primary mb-4" size={32} />
            <blockquote className="text-lg font-display font-medium text-foreground italic leading-relaxed">
              "Bringing structure, scalability, and innovation to every solution."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— Donato Machado Santos</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
