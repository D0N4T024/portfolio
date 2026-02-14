import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const techKeywords = [
  "Python", "React", "Next.js", "Ignition SCADA", "SQL", "Agile",
  "UX/UI", "Architecture", "TypeScript", "Git", "Figma", "C#",
];

const tickerItems = [
  "Software Engineering", "Project Management", "System Architecture",
  "UX/UI Design", "Full-Stack Development", "Agile Leadership",
  "Database Design", "Technical Leadership", "Performance Optimization",
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* Floating keywords */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {techKeywords.map((kw, i) => (
          <span
            key={kw}
            className="absolute text-xs text-muted-foreground/30 font-mono animate-float"
            style={{
              top: `${15 + (i * 7) % 70}%`,
              left: `${5 + (i * 13) % 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {kw}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">👋 Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Donato Machado Santos</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-display">
            Software Engineer · Project Leader · UX/UI Designer
          </p>
          <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Software Engineer with skills in programming, design, and team management.
            Passionate about developing innovative solutions and committed to continuous
            learning and growth in the technology field.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-accent"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-muted-foreground animate-bounce" size={20} />
        </motion.div>
      </div>

      {/* Ticker bar */}
      <div className="relative border-t border-b border-border/50 bg-secondary/30 py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm text-muted-foreground font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
