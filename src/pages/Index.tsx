import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { SplashScreen } from "@/components/SplashScreen";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Lightbulb, Shield, Database, Sparkles } from "lucide-react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">
              <span className="text-foreground">eigen</span>
              <span className="text-primary">su</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#work" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Work
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <ThemeToggle />
              <a href="#contact">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-24 md:py-32 overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] gradient-blob rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Building the future of enterprise software</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight text-gradient">
            Intelligent systems for
            <span className="text-gradient-primary"> modern businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We design and develop custom software solutions that help organizations operate more efficiently, scale sustainably, and stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Start a project
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              View our work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative border-t border-border bg-muted/30 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 left-10 w-[350px] h-[350px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '3s' }}></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-gradient">What we do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              icon={Code2}
              title="Software Development"
              description="Custom applications built with modern technologies. We focus on maintainable, scalable solutions that grow with your business."
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud Infrastructure"
              description="Reliable and secure cloud architecture designed for performance and cost efficiency. AWS, Azure, and GCP expertise."
            />
            <ServiceCard
              icon={Lightbulb}
              title="Technical Consulting"
              description="Strategic guidance on technology decisions, architecture design, and team development to accelerate your growth."
            />
            <ServiceCard
              icon={Database}
              title="Data Engineering"
              description="Build robust data pipelines and analytics platforms. Transform raw data into actionable business insights."
            />
            <ServiceCard
              icon={Shield}
              title="Security & Compliance"
              description="Comprehensive security audits and compliance implementation. Protect your business and customer data."
            />
            <ServiceCard
              icon={Sparkles}
              title="AI Integration"
              description="Implement cutting-edge AI and machine learning solutions to automate processes and enhance decision-making."
            />
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="relative border-t border-border overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] gradient-blob rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-gradient">Featured work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recent projects that showcase our capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Enterprise SaaS Platform
                </h3>
                <p className="text-muted-foreground mb-4">
                  Built a scalable multi-tenant platform serving 50,000+ users with 99.9% uptime.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">React</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Node.js</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">PostgreSQL</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">AWS</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  AI-Powered Analytics
                </h3>
                <p className="text-muted-foreground mb-4">
                  Developed real-time analytics platform with ML-driven insights and predictive modeling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Python</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">TensorFlow</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">BigQuery</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">GCP</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative border-t border-border bg-muted/30 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] gradient-blob-alt rounded-full pointer-events-none" style={{ animationDelay: '5s' }}></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-gradient">What clients say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by innovative companies worldwide
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12 text-gradient">About eigensu</h2>
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-border bg-muted/30 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute -bottom-32 left-1/4 w-[520px] h-[520px] gradient-blob-alt rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-1/3 w-[450px] h-[450px] gradient-blob rounded-full pointer-events-none" style={{ animationDelay: '3s' }}></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-gradient">Let's build something great</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Interested in working together? Reach out to discuss your project and discover how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:hello@eigensu.com" 
                className="text-lg font-medium hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                hello@eigensu.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a 
                href="tel:+1234567890" 
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="text-lg font-semibold mb-2">
                <span className="text-foreground">eigen</span>
                <span className="text-primary">su</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2024 eigensu. All rights reserved.
              </div>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
