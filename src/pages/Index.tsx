import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium tracking-tight">Vertex</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
            Building intelligent systems for modern businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            We design and develop custom software solutions that help organizations operate more efficiently and scale sustainably.
          </p>
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-sm px-8"
          >
            Get in touch
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-border">
        <div className="container mx-auto px-6 py-32">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-20">Services</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">Software Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom applications built with modern technologies. We focus on maintainable, scalable solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Cloud Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reliable and secure cloud architecture designed for performance and cost efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Technical Consulting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic guidance on technology decisions, architecture design, and team development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border">
        <div className="container mx-auto px-6 py-32">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">About</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a team of engineers and designers who believe that technology should be simple, reliable, and purpose-built.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach prioritizes clear communication, iterative development, and long-term partnerships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border">
        <div className="container mx-auto px-6 py-32">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Contact</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Interested in working together? Reach out to discuss your project.
            </p>
            <a 
              href="mailto:hello@vertex.com" 
              className="text-lg font-medium hover:text-muted-foreground transition-colors inline-block border-b border-current"
            >
              hello@vertex.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2024 Vertex. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
