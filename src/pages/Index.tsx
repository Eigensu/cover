import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { SplashScreen } from "@/components/SplashScreen";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { TrustBadges } from "@/components/TrustBadges";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ModernFooter } from "@/components/ModernFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Lightbulb, Shield, Database, Sparkles, CheckCircle2, ArrowRight, TrendingDown, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero grid-pattern">
        {/* Animated gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] gradient-blob rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative">
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
      </section>

      <TrustBadges />

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              icon={Code2}
              title="Software Development"
              description="Custom applications built with modern technologies. We focus on maintainable, scalable solutions that grow with your business."
              index={0}
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud Infrastructure"
              description="Reliable and secure cloud architecture designed for performance and cost efficiency. AWS, Azure, and GCP expertise."
              index={1}
            />
            <ServiceCard
              icon={Lightbulb}
              title="Technical Consulting"
              description="Strategic guidance on technology decisions, architecture design, and team development to accelerate your growth."
              index={2}
            />
            <ServiceCard
              icon={Database}
              title="Data Engineering"
              description="Build robust data pipelines and analytics platforms. Transform raw data into actionable business insights."
              index={3}
            />
            <ServiceCard
              icon={Shield}
              title="Security & Compliance"
              description="Comprehensive security audits and compliance implementation. Protect your business and customer data."
              index={4}
            />
            <ServiceCard
              icon={Sparkles}
              title="AI Integration"
              description="Implement cutting-edge AI and machine learning solutions to automate processes and enhance decision-making."
              index={5}
            />
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
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              What clients say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by innovative companies worldwide
            </p>
          </motion.div>
          <TestimonialCarousel />
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
