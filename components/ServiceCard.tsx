import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border-border hover:border-accent/50 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.28)] group hover:-translate-y-1 h-full bg-card">
        <CardContent className="p-8">
          <div className="w-14 h-14 rounded-xl bg-soft-blue/15 flex items-center justify-center mb-6 group-hover:bg-soft-blue/25 transition-all relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-accent/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
            <Icon className="w-7 h-7 text-accent relative z-10" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
