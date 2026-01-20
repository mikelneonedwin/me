import { motion } from "framer-motion";
import { Building2, Calendar, Code2, FolderGit2 } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "3+",
    label: "Years Coding",
  },
  {
    icon: FolderGit2,
    value: "20+",
    label: "Projects Built",
  },
  {
    icon: Building2,
    value: "7",
    label: "Companies",
  },
  {
    icon: Code2,
    value: "500+",
    label: "Commits",
  },
];

export default function Stats() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl p-6 text-center group hover:glow-accent transition-all duration-300"
          >
            <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
