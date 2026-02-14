import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:donato.machadosantos@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="relative section-container">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Contact</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-5">
            <a href="mailto:donato.machadosantos@gmail.com" className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 glow-accent-hover transition-all duration-300 group">
              <Mail className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">donato.machadosantos@gmail.com</span>
            </a>
            <a href="tel:+18297810796" className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 glow-accent-hover transition-all duration-300 group">
              <Phone className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">829-781-0796</span>
            </a>
            <a href="https://www.linkedin.com/in/donato-machado-b38163267/" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 glow-accent-hover transition-all duration-300 group">
              <Linkedin className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn Profile</span>
            </a>
            <a href="https://github.com/D0N4T024" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 glow-accent-hover transition-all duration-300 group">
              <Github className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub Profile</span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-lg hover:opacity-90 transition-opacity glow-accent flex items-center justify-center gap-2"
            >
              <Send size={18} /> Hire Me
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
