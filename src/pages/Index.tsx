import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/ui/twitter-testimonial-cards";
import LogoLoop from "@/components/LogoLoop";
import { SplashScreen } from "@/components/SplashScreen";
import CardNav from "@/components/navbar/CardNav";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ModernFooter } from "@/components/ModernFooter";
import { ThemeToggle } from "@/components/ThemeToggle";
import Squares from "@/components/Squares";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Lightbulb, Shield, Database, Sparkles, CheckCircle2, ArrowRight, TrendingDown, Zap, Clock, Handshake, Activity, Globe2 } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAwsamplify, SiCloudflare, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "/logo.svg";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return !localStorage.getItem("splashSeen");
    } catch {
      return true;
    }
  });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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
  }, []);

  if (showSplash) {
    return (
      <SplashScreen
        onComplete={() => {
          try {
            localStorage.setItem("splashSeen", "true");
          } catch {
            /* ignore */
          }
          setShowSplash(false);
        }}
      />
    );
  }

  // Theme-aware colors
  const navItems = isDark
    ? [
        {
          label: "Services",
          bgColor: "#4a90a4",
          textColor: "#0b161e",
          links: [
            { label: "Services", href: "#services", ariaLabel: "View Services" },
            { label: "Solutions", href: "#solutions", ariaLabel: "View Solutions" }
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
            { label: "About Us", href: "#about", ariaLabel: "Learn About Us" },
            { label: "Contact", href: "#contact", ariaLabel: "Contact Us" }
          ]
        }
      ]
    : [
        {
          label: "Services",
          bgColor: "#8b6344",
          textColor: "#fff",
          links: [
            { label: "Services", href: "#services", ariaLabel: "View Services" },
            { label: "Solutions", href: "#solutions", ariaLabel: "View Solutions" }
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
            { label: "About Us", href: "#about", ariaLabel: "Learn About Us" },
            { label: "Contact", href: "#contact", ariaLabel: "Contact Us" }
          ]
        }
      ];

  const baseColor = isDark ? "#0d1c26" : "#faf7f0";
  const menuColor = isDark ? "#f9fafb" : "#593c26";
  const buttonBgColor = isDark ? "#85c2e0" : "#a66a3f";
  const buttonTextColor = isDark ? "#0b161e" : "#faf7f0";

  const heroLogos = [
    { node: <SiReact className="text-sky-400 w-10 h-10" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-foreground w-10 h-10" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-blue-500 w-10 h-10" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-cyan-400 w-10 h-10" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiAwsamplify className="text-amber-400 w-10 h-10" />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiCloudflare className="text-orange-400 w-10 h-10" />, title: "Cloudflare", href: "https://www.cloudflare.com" },
    { node: <SiDocker className="text-sky-500 w-10 h-10" />, title: "Docker", href: "https://www.docker.com" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CardNav
        logo={logo}
        logoAlt="Eigensu Logo"
        items={navItems}
        baseColor={baseColor}
        menuColor={menuColor}
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        ease="power3.out"
      />
      
      {/* Theme Toggle - Fixed on extreme right */}
      <div className="fixed top-4 right-4 z-[100]">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
        {/* Squares background */}
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor={isDark ? "rgba(176, 224, 230, 0.12)" : "rgba(139, 99, 68, 0.18)"}
          hoverFillColor={isDark ? "rgba(176, 224, 230, 0.08)" : "rgba(139, 99, 68, 0.12)"}
          gradientColor={isDark ? "#1a2b3a" : "#e4ddcd"}
        />
        
        {/* Animated gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] gradient-blob rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '2s' }} />
        
         <div className="relative z-10">
           <div className="container mx-auto px-6">
             <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border text-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Building the future of enterprise IT</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="text-gradient">Enterprise-grade IT,</span>
              <br />
              <span className="text-gradient-primary">delivered without friction.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              From cloud and security to managed services—Eigensu keeps your stack fast, safe, and scalable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-accent hover:shadow-[0_0_30px_rgba(123,175,212,0.5)] transition-all duration-300 px-8 group font-semibold"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Proposal
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-accent hover:bg-accent/10 font-semibold"
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Pricing
              </Button>
            </motion.div>
             </div>
           </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
               className="mt-10 w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-border/70 bg-card/80 backdrop-blur-sm shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,175,212,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(133,194,224,0.12),transparent_35%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
                <div className="relative flex items-center justify-between gap-4 px-6 py-4 border-b border-border/60">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-2xl bg-soft-blue/20 flex items-center justify-center text-accent">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Technologies we use to build</p>
                      <p className="font-semibold text-foreground">Apps like this</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-accent border border-primary/20">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>Cost-aware rollouts</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-accent border border-primary/20">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Security-first defaults</span>
                    </span>
                  </div>
                </div>
                <div className="relative px-4 py-8 sm:px-6">
                  <LogoLoop
                    logos={heroLogos}
                    speed={90}
                    direction="left"
                    logoHeight={44}
                    gap={48}
                    hoverSpeed={10}
                    scaleOnHover
                    ariaLabel="Technology stacks we deliver on"
                  />
                </div>
              </div>
            </motion.div>
          </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative border-t border-border bg-secondary/30 overflow-hidden py-24 md:py-32">
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 left-10 w-[350px] h-[350px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              What we do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Code2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Software Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom applications built with modern technologies. We focus on maintainable, scalable solutions that grow with your business.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Cloud className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cloud Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reliable and secure cloud architecture designed for performance and cost efficiency. AWS, Azure, and GCP expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Technical Consulting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic guidance on technology decisions, architecture design, and team development to accelerate your growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Data Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build robust data pipelines and analytics platforms. Transform raw data into actionable business insights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Security & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive security audits and compliance implementation. Protect your business and customer data.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implement cutting-edge AI and machine learning solutions to automate processes and enhance decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Feature Section */}
      <section id="solutions" className="relative border-t border-border overflow-hidden py-24 md:py-32">
        <div className="absolute top-10 right-20 w-[400px] h-[400px] gradient-blob rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Security by Design
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Built on zero-trust principles with enterprise-grade protection at every layer
              </p>
              
              <div className="space-y-4">
                {[
                  "Zero trust network architecture",
                  "24/7 SOC monitoring & threat detection",
                  "Automated security patches & updates",
                  "Least privilege access controls"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 rounded-full border-2 border-accent/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 rounded-full border-2 border-primary/30"
                />
                <Shield className="w-24 h-24 text-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="relative border-t border-border bg-secondary/30 overflow-hidden py-24 md:py-32">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] gradient-blob rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              Proven Results
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real outcomes from real partnerships
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { metric: "42%", label: "Reduction in cloud costs", icon: TrendingDown },
              { metric: "3×", label: "Faster release velocity", icon: Zap },
              { metric: "68%", label: "Fewer P1 incidents", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border bg-card hover:border-accent/50 transition-all group text-center p-8">
                  <div className="w-12 h-12 rounded-full bg-soft-blue/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-soft-blue/25 transition-colors">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-accent tabular-nums">{stat.metric}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border overflow-hidden group cursor-pointer hover:border-accent/50 transition-all h-full">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/20"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    Enterprise SaaS Platform
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Built a scalable multi-tenant platform serving 50,000+ users with 99.9% uptime and zero data breaches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">React</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">Node.js</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">PostgreSQL</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">AWS</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-border overflow-hidden group cursor-pointer hover:border-accent/50 transition-all h-full">
                <div className="aspect-video bg-gradient-to-br from-accent/30 to-primary/20"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    AI-Powered Analytics
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Developed real-time analytics platform with ML-driven insights processing 10M+ events daily.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">Python</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">TensorFlow</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">BigQuery</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30">GCP</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* Testimonials */}
      <section id="testimonials" className="relative border-t border-border bg-secondary/30 overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(166,106,63,0.16),transparent_45%)] dark:bg-[radial-gradient(circle_at_25%_35%,rgba(133,194,224,0.12),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(123,175,212,0.18),transparent_45%)] dark:bg-[radial-gradient(circle_at_70%_65%,rgba(76,117,146,0.3),transparent_50%)]" />
          <div className="absolute top-10 left-1/4 w-[380px] h-[380px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-0 right-6 w-[520px] h-[520px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 border border-border text-sm w-fit shadow-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Proof from delivery teams</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient">
                  What clients say
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Signals from operators, CTOs, and program leads shipping with eigensu. We pair enterprise guardrails with zero-fuss delivery so teams can move fast without destabilizing prod.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                {[{ label: "Net promoter", metric: "+72 NPS" }, { label: "Avg. rollout", metric: "3.5 weeks" }, { label: "SLO upheld", metric: "99.95%" }].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-4 shadow-sm">
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-accent" />
                      {item.label}
                    </p>
                    <p className="text-2xl font-semibold text-foreground">{item.metric}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["Fintech", "Healthcare", "Climate", "Marketplace", "SaaS"].map((sector) => (
                  <span key={sector} className="px-3 py-1.5 rounded-full border border-border bg-card/70 text-sm text-foreground shadow-sm">
                    {sector}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 shadow">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-soft-blue/20 text-accent">
                  <Handshake className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Shared runbooks, steady comms, and co-owned dashboards keep execs, PMs, and SREs aligned from kickoff through hypercare.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-br from-primary/25 via-accent/20 to-transparent" />
              <div className="absolute -left-6 -right-6 top-10 bottom-10 rounded-[32px] border border-border/70 bg-card/40 backdrop-blur-xl" />
              <div className="relative flex justify-center lg:justify-end">
                <Testimonials className="scale-[1.02] sm:scale-105 lg:scale-[1.12] lg:-translate-x-4 drop-shadow-2xl" />
              </div>
              <div className="absolute -bottom-10 left-2 flex items-center gap-3 rounded-full bg-card/80 border border-border px-4 py-2 text-sm shadow">
                <Globe2 className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Serving teams across 4 continents</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative border-t border-border py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-gradient">
              About eigensu
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a team of engineers, designers, and strategists who believe that technology should be simple, reliable, and purpose-built for the problems it aims to solve.
              </p>
              <p>
                Founded in 2018, eigensu has grown from a small consulting practice to a trusted partner for organizations ranging from ambitious startups to Fortune 500 companies. Our approach prioritizes clear communication, iterative development, and long-term partnerships.
              </p>
              <p>
                We don't just build software—we invest in understanding your business, your challenges, and your vision for the future. This deep collaboration ensures that every solution we deliver creates lasting value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-border bg-gradient-to-br from-secondary/50 to-card/30 overflow-hidden py-24 md:py-32">
        <div className="absolute -bottom-32 left-1/4 w-[520px] h-[520px] gradient-blob-alt rounded-full pointer-events-none" />
        <div className="absolute top-20 right-1/3 w-[450px] h-[450px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center text-gradient">
              Let's architect your next leap.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Ready to transform your IT infrastructure? Share your vision and we'll craft a roadmap to get you there.
            </p>
            
            <Card className="border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Company Name"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="bg-background border-border focus:border-accent resize-none"
                    />
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" className="mt-1" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive communications from Eigensu regarding this inquiry. We respect your privacy.
                    </Label>
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-accent hover:shadow-[0_0_30px_rgba(123,175,212,0.5)] transition-all duration-300 font-semibold"
                    type="submit"
                  >
                    Schedule a Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default Index;
