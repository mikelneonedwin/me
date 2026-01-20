import { stack } from "@/constants/stack";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Stack = () => {
  return (
    <section id="stack" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="squiggly-underline">Tech Stack</span>
        </h2>
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <Marquee autoFill pauseOnHover speed={40} direction="left">
            {stack.map((item) => (
              <div
                key={item.label}
                className="mx-2 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <Icon icon={item.icon} className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};

export default Stack;
