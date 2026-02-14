import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ subject: "", name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setTimeout(() => {
      setStatus(null);
    }, 8000);
    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS env vars. Check your .env (VITE_EMAILJS_*).");
      }

      const templateParams = {
        subject: form.subject,
        name: form.name,
        email: form.email,
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setStatus({ type: "success", message: "Message sent successfully. I'll get back to you soon!" });
      setForm({ subject: "", name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong sending the message. Please try again." });
      console.error(err);
    } finally {
      setIsSending(false);
    }
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
            
            {/* 🔔 Alert */}
            {status && (
              <div
                className={`rounded-lg px-4 py-3 text-sm font-medium border transition-all duration-300 ${
                  status.type === "success"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                    : "border-red-500/40 bg-red-500/10 text-red-300"
                }`}
              >
                {status.type === "success" ? "✅ Message sent successfully!" : "⚠️ Something went wrong. Please try again."}
              </div>
            )}

            <input
              type="text"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />

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
              disabled={isSending}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-lg hover:opacity-90 transition-opacity glow-accent flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {isSending ? "Sending..." : "Hire Me"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
