import { motion } from "framer-motion";
import { Shield, Award, Users, Zap } from "lucide-react";

const badges = [
  { icon: Shield, text: "SOC 2 Type II Certified" },
  { icon: Award, text: "ISO 27001 Compliant" },
  { icon: Users, text: "500+ Enterprise Clients" },
  { icon: Zap, text: "99.9% Uptime SLA" },
];

export const TrustBadges = () => {
  return (
    <section className="border-b border-border bg-secondary/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border hover:border-accent/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-soft-blue/10 flex items-center justify-center group-hover:bg-soft-blue/20 transition-colors">
                <badge.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
              <div className="w-1 h-1 rounded-full bg-beige" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
