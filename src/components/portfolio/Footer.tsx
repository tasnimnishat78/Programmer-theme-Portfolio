import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, Mail, Heart, Code } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sohayelmahmud", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sohayelmahmud", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/sohayel.mahmud.7", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/MahmudSohayel", label: "Twitter" },
  { icon: Mail, href: "mailto:sohayelmahmud@yahoo.com", label: "Email" },
];

const quickLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Code Arena", href: "/#code-arena" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="/#"
              className="inline-block text-2xl font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/levi.png"
                alt="Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-xs text-justify">
              Competitive programmer & full-stack developer crafting elegant solutions to complex problems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Let's Work Together</h4>
            <p className="text-muted-foreground mb-4">
              Looking for a competitive programmer or developer for your team?
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Sohayel Mahmud. Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            and
            <Code className="w-4 h-4 text-primary" />
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-mono">{"<"}</span>
            Solving problems, one algorithm at a time
            <span className="font-mono">{" />"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
