import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";

export const ModernFooter = () => {
  const footerLinks = {
    Services: [
      { label: "Software Development", href: "#services" },
      { label: "Cloud Infrastructure", href: "#services" },
      { label: "Technical Consulting", href: "#services" },
      { label: "Data Engineering", href: "#services" },
      { label: "Security & Compliance", href: "#services" },
      { label: "AI Integration", href: "#services" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Case Studies", href: "#work" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="text-2xl font-semibold mb-4">
                <span className="text-foreground">eigen</span>
                <span className="text-primary">su</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
                Enterprise-grade IT solutions engineered for speed, security, and scale. 
                Building the future of technology infrastructure.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <a 
                  href="mailto:hello@eigensu.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>hello@eigensu.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>San Francisco, CA<br />New York, NY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eigensu. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </footer>
  );
};
