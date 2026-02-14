import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-gradient">DMS</span>
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Donato Machado Santos</span>
        </div>

        <div className="flex items-center gap-6">
          {["Home", "About", "Experience", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/D0N4T024" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/donato-machado-b38163267/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:donato.machadosantos@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
