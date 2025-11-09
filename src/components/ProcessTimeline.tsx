import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, Wrench, Shield, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", description: "Deep dive into your infrastructure, workflows, and pain points" },
  { icon: Layers, title: "Architect", description: "Design scalable solutions tailored to your business needs" },
  { icon: Wrench, title: "Implement", description: "Deploy with precision, minimal downtime, maximum impact" },
  { icon: Shield, title: "Secure", description: "Harden systems with zero-trust principles and monitoring" },
  { icon: TrendingUp, title: "Optimize", description: "Continuous improvement for performance and cost efficiency" },
];

export const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative border-t border-border overflow-hidden py-24 md:py-32">
      <div className="absolute top-20 right-10 w-[500px] h-[500px] gradient-blob-alt rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-gradient">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that transforms IT from a cost center to a strategic advantage
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <motion.div
            className="absolute top-8 left-8 md:left-1/2 w-0.5 h-full bg-primary/20 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left`}>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <motion.div
                  animate={isInView ? { scale: [0.8, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center relative z-10"
                >
                  <step.icon className="w-7 h-7 text-accent" />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
