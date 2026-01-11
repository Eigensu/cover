import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Trophy, UtensilsCrossed, ShieldCheck, Boxes } from "lucide-react";
import Squares from "@/components/Squares";
import CardNav from "@/components/navbar/CardNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "/logo.svg";

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
    title: "Felia (FIELIA)",
    summary:
      "Exclusive private members club with a minimal, guarded interface signaling curated membership, privacy, and invite-only community experiences.",
    tags: ["Members-only", "Privacy", "Community", "Premium"],
    icon: ShieldCheck,
    link: "https://felia.in",
  },
  {
    title: "SM Inventory",
    summary:
      "Authenticated inventory management web app for internal ops—stock tracking, item management, and reporting for retailers/business users.",
    tags: ["Inventory", "B2B", "Access control", "Ops"],
    icon: Boxes,
    link: "https://sm-inventory.vercel.app/login",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" } })
};

export default function Projects() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

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
            { label: "Contact", href: "/#contact", ariaLabel: "Contact Us" }
          ]
        }
      ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CardNav
        logo={logo}
        logoAlt="Eigensu Logo"
        items={navItems}
        baseColor={isDark ? "#0d1c26" : "#faf7f0"}
        menuColor={isDark ? "#f9fafb" : "#593c26"}
        buttonBgColor={isDark ? "#85c2e0" : "#a66a3f"}
        buttonTextColor={isDark ? "#0b161e" : "#faf7f0"}
        onLogoClick={() => navigate("/")}
      />

      <div className="fixed top-4 right-4 z-[100]">
        <ThemeToggle />
      </div>

      <section className="relative overflow-hidden pb-20 pt-28 md:pt-32">
        <Squares
          direction="diagonal"
          speed={0.35}
          squareSize={34}
          borderColor="rgba(139, 99, 68, 0.16)"
          hoverFillColor="rgba(139, 99, 68, 0.08)"
          gradientColor="#e4ddcd"
        />
        <div className="absolute -right-12 top-10 h-[420px] w-[420px] gradient-blob rounded-full opacity-80" />
        <div className="absolute -left-20 bottom-0 h-[380px] w-[380px] gradient-blob-alt rounded-full opacity-70" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              Selected projects and outcomes
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              Projects that shipped on time—and stayed up.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              A few snapshots of how we pair architecture rigor with hands-on engineering to deliver reliable, secure systems.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge className="bg-primary/15 text-accent border border-accent/30">Platform rebuilds</Badge>
              <Badge className="bg-primary/15 text-accent border border-accent/30">Zero-trust & compliance</Badge>
              <Badge className="bg-primary/15 text-accent border border-accent/30">Cloud optimization</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={idx}
                >
                  <Card className="h-full border-border bg-card/80 backdrop-blur">
                    <CardContent className="p-7 flex h-full flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-blue/20 text-accent">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                          <p className="mt-2 text-muted-foreground leading-relaxed">{project.summary}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="border-border bg-background/60 text-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <Button
                          asChild
                          variant="link"
                          className="h-auto p-0 text-accent hover:text-accent underline-offset-4 hover:underline"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View details for ${project.title}`}
                          >
                            View details
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <div className="text-sm text-muted-foreground">On-time • Zero Sev1</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
