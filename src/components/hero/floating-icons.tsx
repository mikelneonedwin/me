import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// Position icons at the far edges of the viewport, not relative to content
const floatingIcons = [
  // Top left corner area
  {
    icon: "logos:typescript-icon",
    delay: 0,
    position: "top-16 left-8 md:left-16",
  },
  // Top right corner area
  { icon: "logos:react", delay: 0.2, position: "top-8 right-8 md:right-20" },
  // Bottom left
  {
    icon: "logos:tailwindcss-icon",
    delay: 0.4,
    position: "bottom-32 left-4 md:left-12",
  },
  // Mid right
  {
    icon: "logos:nodejs-icon",
    delay: 0.6,
    position: "top-1/2 right-4 md:right-8",
  },
  // Bottom right corner
  {
    icon: "logos:nextjs-icon",
    delay: 0.8,
    position: "bottom-24 right-12 md:right-24",
  },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: item.delay + 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-150" />
            <Icon
              icon={item.icon}
              className="relative w-12 h-12 md:w-16 md:h-16 drop-shadow-2xl opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
