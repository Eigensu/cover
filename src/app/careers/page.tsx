"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ModernFooter } from "@/components/ModernFooter";
import { ThemeToggle } from "@/components/ThemeToggle";
import CardNav from "@/components/navbar/CardNav";
import { Logo } from "@/components/Logo";
import Squares from "@/components/Squares";
import { motion } from "framer-motion";
import { 
  Code2, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Github, 
  Globe, 
  Linkedin, 
  FileText,
  Clock,
  Calendar,
  Zap,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { useToast } from "@/components/hooks/use-toast";

interface FormData {
  // Basic Information
  fullName: string;
  email: string;
  phone: string;
  collegeName: string;
  degree: string;
  graduationYear: string;
  
  // Technical Links
  githubUrl: string;
  portfolioUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  
  // Skill Assessment
  nextjsProficiency: string;
  fastApiProficiency: string;
  typescriptExperience: string;
  aiTools: string[];
  
  // Technical Questions
  projectShowcase: string;
  agenticWorkflow: string;
  devopsDeployment: string;
  crudApiTime: string;
  
  // Logistics
  availability: string;
  startDate: string;
  hoursPerWeek: string;
}

export default function Careers() {
  const [isDark, setIsDark] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    // Basic Information
    fullName: "",
    email: "",
    phone: "",
    collegeName: "",
    degree: "",
    graduationYear: "",
    
    // Technical Links
    githubUrl: "",
    portfolioUrl: "",
    linkedinUrl: "",
    resumeUrl: "",
    
    // Skill Assessment
    nextjsProficiency: "",
    fastApiProficiency: "",
    typescriptExperience: "",
    aiTools: [],
    
    // Technical Questions
    projectShowcase: "",
    agenticWorkflow: "",
    devopsDeployment: "",
    crudApiTime: "",
    
    // Logistics
    availability: "",
    startDate: "",
    hoursPerWeek: ""
  });

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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (tool: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      aiTools: checked 
        ? [...prev.aiTools, tool]
        : prev.aiTools.filter(t => t !== tool)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you within 3-5 business days.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          collegeName: "",
          degree: "",
          graduationYear: "",
          githubUrl: "",
          portfolioUrl: "",
          linkedinUrl: "",
          resumeUrl: "",
          nextjsProficiency: "",
          fastApiProficiency: "",
          typescriptExperience: "",
          aiTools: [],
          projectShowcase: "",
          agenticWorkflow: "",
          devopsDeployment: "",
          crudApiTime: "",
          availability: "",
          startDate: "",
          hoursPerWeek: ""
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theme-aware colors for navigation
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

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
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
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-[100]">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-hero">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border text-sm mb-8"
              >
                <Users className="w-4 h-4 text-accent" />
                <span>Join our growing team</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              >
                <span className="text-gradient">Build the future</span>
                <br />
                <span className="text-gradient-primary">with eigensu.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                We're looking for talented developers who love building with Next.js, FastAPI, and cutting-edge AI tools. 
                Join us in creating enterprise-grade solutions that matter.
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
                  onClick={() => document.querySelector("#application")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-accent hover:bg-accent/10 font-semibold"
                  onClick={() => document.querySelector("#why-eigensu")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Why Eigensu?
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eigensu Section */}
      <section id="why-eigensu" className="relative border-t border-border bg-secondary/30 overflow-hidden py-24 md:py-32">
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
              Why work with us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're building something special, and we want you to be part of it
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Code2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cutting-Edge Tech</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work with the latest technologies including Next.js, FastAPI, TypeScript, and AI-powered development tools like Cursor and GitHub Copilot.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Fast-Paced Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join a rapidly growing company where your contributions directly impact our success. Opportunities for advancement and skill development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Collaborative Culture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work with a team of passionate engineers who value knowledge sharing, code reviews, and continuous learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="relative border-t border-border py-24 md:py-32">
        <div className="absolute top-10 right-20 w-[400px] h-[400px] gradient-blob rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
                Join Our Team
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Ready to build amazing things? Fill out the application below and let's start the conversation.
              </p>
            </div>
            
            <Card className="border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-accent">1</span>
                      </div>
                      <h3 className="text-xl font-semibold">Basic Information</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (WhatsApp preferred) *</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-background border-border focus:border-accent"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="collegeName">College Name *</Label>
                        <Input
                          id="collegeName"
                          placeholder="University of Technology"
                          value={formData.collegeName}
                          onChange={(e) => handleInputChange("collegeName", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree *</Label>
                        <Input
                          id="degree"
                          placeholder="Computer Science"
                          value={formData.degree}
                          onChange={(e) => handleInputChange("degree", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Year of Graduation *</Label>
                        <Input
                          id="graduationYear"
                          placeholder="2024"
                          value={formData.graduationYear}
                          onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Technical Links */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-accent">2</span>
                      </div>
                      <h3 className="text-xl font-semibold">Technical Links (The "Proof")</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="githubUrl" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub Profile URL *
                        </Label>
                        <Input
                          id="githubUrl"
                          placeholder="https://github.com/yourusername"
                          value={formData.githubUrl}
                          onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                        <p className="text-sm text-muted-foreground">Essential to check your TypeScript/Next.js repositories</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="portfolioUrl" className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Portfolio Website
                        </Label>
                        <Input
                          id="portfolioUrl"
                          placeholder="https://yourportfolio.com"
                          value={formData.portfolioUrl}
                          onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                        />
                        <p className="text-sm text-muted-foreground">Optional but encouraged</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="linkedinUrl" className="flex items-center gap-2">
                          <Linkedin className="w-4 h-4" />
                          LinkedIn Profile *
                        </Label>
                        <Input
                          id="linkedinUrl"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={formData.linkedinUrl}
                          onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="resumeUrl" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Resume/CV Link *
                        </Label>
                        <Input
                          id="resumeUrl"
                          placeholder="https://drive.google.com/file/d/your-resume"
                          value={formData.resumeUrl}
                          onChange={(e) => handleInputChange("resumeUrl", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                        <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                          <p className="text-sm text-accent font-medium">Important:</p>
                          <p className="text-sm text-muted-foreground">
                            Please provide a link to your resume (Google Drive, Notion, or Dropbox). 
                            Ensure the sharing settings are set to 'Anyone with the link can view' before submitting. 
                            Restricted links will not be reviewed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skill Self-Assessment */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-accent">3</span>
                      </div>
                      <h3 className="text-xl font-semibold">Skill Self-Assessment</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Next.js Proficiency (1-5 scale) *</Label>
                        <Select value={formData.nextjsProficiency} onValueChange={(value) => handleInputChange("nextjsProficiency", value)}>
                          <SelectTrigger className="bg-background border-border focus:border-accent">
                            <SelectValue placeholder="Select proficiency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 - Beginner</SelectItem>
                            <SelectItem value="2">2 - Basic</SelectItem>
                            <SelectItem value="3">3 - Intermediate</SelectItem>
                            <SelectItem value="4">4 - Advanced</SelectItem>
                            <SelectItem value="5">5 - Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>FastAPI Proficiency (1-5 scale) *</Label>
                        <Select value={formData.fastApiProficiency} onValueChange={(value) => handleInputChange("fastApiProficiency", value)}>
                          <SelectTrigger className="bg-background border-border focus:border-accent">
                            <SelectValue placeholder="Select proficiency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 - Beginner</SelectItem>
                            <SelectItem value="2">2 - Basic</SelectItem>
                            <SelectItem value="3">3 - Intermediate</SelectItem>
                            <SelectItem value="4">4 - Advanced</SelectItem>
                            <SelectItem value="5">5 - Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>TypeScript Experience *</Label>
                      <Select value={formData.typescriptExperience} onValueChange={(value) => handleInputChange("typescriptExperience", value)}>
                        <SelectTrigger className="bg-background border-border focus:border-accent">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1">Less than 1 year</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="2+">2+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Which AI tools do you use for coding? *</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Cursor", "GitHub Copilot", "Supermaven", "Windsurf"].map((tool) => (
                          <div key={tool} className="flex items-center space-x-2">
                            <Checkbox
                              id={tool}
                              checked={formData.aiTools.includes(tool)}
                              onCheckedChange={(checked) => handleCheckboxChange(tool, checked as boolean)}
                            />
                            <Label htmlFor={tool} className="cursor-pointer">{tool}</Label>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other-ai"
                          checked={formData.aiTools.includes("Other")}
                          onCheckedChange={(checked) => handleCheckboxChange("Other", checked as boolean)}
                        />
                        <Label htmlFor="other-ai" className="cursor-pointer">Other (please specify in technical questions)</Label>
                      </div>
                    </div>
                  </div>

                  {/* Technical Screening Questions */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-accent">4</span>
                      </div>
                      <h3 className="text-xl font-semibold">Technical Screening Questions</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectShowcase">Project Showcase *</Label>
                        <Textarea
                          id="projectShowcase"
                          placeholder="Provide a link to a specific project you built using Next.js or FastAPI. Briefly explain the most challenging part of building it."
                          rows={4}
                          value={formData.projectShowcase}
                          onChange={(e) => handleInputChange("projectShowcase", e.target.value)}
                          className="bg-background border-border focus:border-accent resize-none"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="agenticWorkflow">Agentic Workflow *</Label>
                        <Textarea
                          id="agenticWorkflow"
                          placeholder="Describe how you use Cursor or Copilot to speed up your development. Provide a specific example of a time it helped you solve a complex bug."
                          rows={4}
                          value={formData.agenticWorkflow}
                          onChange={(e) => handleInputChange("agenticWorkflow", e.target.value)}
                          className="bg-background border-border focus:border-accent resize-none"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="devopsDeployment">DevOps/Deployment *</Label>
                        <Textarea
                          id="devopsDeployment"
                          placeholder="Have you ever deployed an application? If so, which tools/platforms did you use? (e.g., Vercel, Docker, AWS, GitHub Actions)"
                          rows={3}
                          value={formData.devopsDeployment}
                          onChange={(e) => handleInputChange("devopsDeployment", e.target.value)}
                          className="bg-background border-border focus:border-accent resize-none"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="crudApiTime">Logic/Speed Test *</Label>
                        <Textarea
                          id="crudApiTime"
                          placeholder="If you had to build a simple CRUD API with FastAPI and a Next.js frontend today, how long would it take you using your current AI setup?"
                          rows={3}
                          value={formData.crudApiTime}
                          onChange={(e) => handleInputChange("crudApiTime", e.target.value)}
                          className="bg-background border-border focus:border-accent resize-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Logistics & Availability */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-accent">5</span>
                      </div>
                      <h3 className="text-xl font-semibold">Logistics & Availability</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Can you commit to 6 months? *
                        </Label>
                        <RadioGroup 
                          value={formData.availability} 
                          onValueChange={(value) => handleInputChange("availability", value)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="availability-yes" />
                            <Label htmlFor="availability-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="availability-no" />
                            <Label htmlFor="availability-no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          How soon can you start? *
                        </Label>
                        <Input
                          id="startDate"
                          placeholder="e.g., Immediately, 2 weeks notice, etc."
                          value={formData.startDate}
                          onChange={(e) => handleInputChange("startDate", e.target.value)}
                          className="bg-background border-border focus:border-accent"
                          required
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Hours per week *</Label>
                        <RadioGroup 
                          value={formData.hoursPerWeek} 
                          onValueChange={(value) => handleInputChange("hoursPerWeek", value)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="part-time" id="hours-part" />
                            <Label htmlFor="hours-part">Part-time (20 hrs)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="full-time" id="hours-full" />
                            <Label htmlFor="hours-full">Full-time (40 hrs)</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-accent hover:shadow-[0_0_30px_rgba(123,175,212,0.5)] transition-all duration-300 font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <CheckCircle2 className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      We'll review your application and get back to you within 3-5 business days.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}