"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Trophy, UtensilsCrossed, ShieldCheck, Boxes } from "lucide-react";
import Squares from "@/components/Squares";
import CardNav from "@/components/navbar/CardNav";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const projects = [
  {
    title: "Walle Arena",
    summary:
      "Fantasy sports platform for custom contests: create/join tournaments, manage squads, and track real-time leaderboards with white-label scale for cricket and more.",
    tags: ["Fantasy", "Realtime", "White-label", "Engagement"],
    icon: Trophy,
    link: "https://wallearena.com/",
  },
  {
    title: "Soraia",
    summary:
      "Modern Indian-European glasshouse restaurant experience in Mumbai—chef-curated tasting menus, regional cocktails, and an under-the-stars ambience with refined dress code.",
    tags: ["Hospitality", "Experience", "F&B", "Brand"],
    icon: UtensilsCrossed,
    link: "https://soraia.in",
  },
  {
    title: "Eigensu Security",
    summary:
      "Enterprise-grade security solutions with zero-trust architecture, automated threat detection, and compliance frameworks for modern cloud infrastructure.",
    tags: ["Security", "Enterprise", "Cloud", "Compliance"],
    icon: ShieldCheck,
    link: "#",
  },
  {
    title: "Supply Chain Platform",
    summary:
      "End-to-end supply chain management system with real-time tracking, predictive analytics, and automated inventory optimization for global logistics.",
    tags: ["Logistics", "Analytics", "Automation", "Global"],
    icon: Boxes,
    link: "#",
  },
];

export default function Projects() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, [mounted]);

  const navItems = isDark
    ? [
        {
          label: "Services",
          bgColor: "#4a90a4",
          textColor: "#0b161e",
          links: [
            { label: "Services", href: "/#services", ariaLabel: "View Services" },
            { label: "Solutions", href: "/#solutions", ariaLabel: "View Solutions" }
          ]
        },
        {
          label: "Projects",
          bgColor: "#5fa3b8",
          textColor: "#0b161e",
          links: [
            { label: "Projects", href: "/projects", ariaLabel: "View Projects" }
          ]
        },
        {
          label: "About",
          bgColor: "#6db5cc",
          textColor: "#0b161e",
          links: [
            { label: "About Us", href: "/#about", ariaLabel: "Learn About Us" },
            { label: "Careers", href: "/careers", ariaLabel: "Join Our Team" },
            { label: "Contact", href: "/#contact", ariaLabel: "Contact Us" }
          ]
        }
      ]
    : [
        {
          label: "Services",
          bgColor: "#8b6344",
          textColor: "#fff",
          links: [
            { label: "Services", href: "/#services", ariaLabel: "View Services" },
            { label: "Solutions", href: "/#solutions", ariaLabel: "View Solutions" }
          ]
        },
        {
          label: "Projects",
          bgColor: "#7a5540",
          textColor: "#fff",
          links: [
            { label: "Projects", href: "/projects", ariaLabel: "View Projects" }
          ]
        },
        {
          label: "About",
          bgColor: "#6d4935",
          textColor: "#fff",
          links: [
            { label: "About Us", href: "/#about", ariaLabel: "Learn About Us" },
            { label: "Careers", href: "/careers", ariaLabel: "Join Our Team" },
            { label: "Contact", href: "/#contact", ariaLabel: "Contact Us" }
          ]
        }
      ];

  const baseColor = isDark ? "#0d1c26" : "#faf7f0";
  const menuColor = isDark ? "#f9fafb" : "#593c26";
  const buttonBgColor = isDark ? "#85c2e0" : "#a66a3f";
  const buttonTextColor = isDark ? "#0b161e" : "#faf7f0";

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CardNav
        logo={<Logo height={28} />}
        logoAlt="Eigensu Logo"
        items={navItems}
        baseColor={baseColor}
        menuColor={menuColor}
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        ease="power3.out"
      />
      
      <div className="fixed top-4 right-4 z-[100]">
        <ThemeToggle />
      </div>

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor={isDark ? "rgba(176, 224, 230, 0.12)" : "rgba(139, 99, 68, 0.18)"}
          hoverFillColor={isDark ? "rgba(176, 224, 230, 0.08)" : "rgba(139, 99, 68, 0.12)"}
          gradientColor={isDark ? "#1a2b3a" : "#e4ddcd"}
        />
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] gradient-blob rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              >
                <span className="text-gradient">Our</span>{" "}
                <span className="text-gradient-primary">Projects</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Explore our portfolio of innovative solutions across industries. From fantasy sports platforms to enterprise security systems.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full border-border bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center group-hover:bg-soft-blue/25 transition-colors">
                        <project.icon className="w-7 h-7 text-accent" />
                      </div>
                      {project.link !== "#" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-accent border border-accent/20 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}