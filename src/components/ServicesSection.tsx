import { motion } from "framer-motion";
import { Palette, Globe, Users, Database, Shield, TabletSmartphoneIcon } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Globe,
    description: "Modern web applications with React & Next.js, scalable backend systems, and full-stack architecture.",
  },
  {
    title: "UX/UI Design",
    icon: Palette,
    description: "User-centered design, wireframes & prototypes in Figma, and interface optimization for delightful experiences.",
  },
  {
    title: "Mobile Development",
    icon: TabletSmartphoneIcon,
    description: "Cross-platform and native mobile applications using React Native and modern mobile frameworks.",
  },
  {
    title: "Project Management",
    icon: Users,
    description: "Agile leadership, sprint coordination, and team mentoring to deliver projects on time and scope.",
  },
  {
    title: "Database & Systems",
    icon: Database,
    description: "SQL optimization, database architecture, and industrial systems integration with Ignition SCADA.",
  },
  {
    title: "Technical Leadership",
    icon: Shield,
    description: "Code reviews, architecture planning, and performance optimization for engineering teams.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Services</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          What I Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 glow-accent-hover hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
