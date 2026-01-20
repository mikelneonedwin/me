import { Badge } from "@/components/ui/badge";
import { GITHUB_URL } from "@/constants/globals";
import { socials } from "@/constants/socials";
import { motion } from "framer-motion";
import FloatingIcons from "./hero/floating-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const roles = ["#FULLSTACK", "#DEVELOPER", "#REACT", "#NODE"];

export default function Profile() {
  return (
    <section className="relative py-16 md:py-24" id="about">
      {/* Floating tech icons */}
      <FloatingIcons />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar with glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="size-32 md:size-40 ring-4 ring-primary/20 glow-accent">
            <AvatarImage src={`${GITHUB_URL}.png`} />
            <AvatarFallback>WE</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Big name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-5xl md:text-7xl font-black tracking-tight"
        >
          <span className="text-gradient">WINNER</span>{" "}
          <span className="text-foreground">EDWIN</span>
        </motion.h1>

        {/* Role hashtags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mt-4"
        >
          {roles.map((role) => (
            <Badge
              key={role}
              variant="secondary"
              className="text-sm font-mono tracking-wide px-3 py-1"
            >
              {role}
            </Badge>
          ))}
        </motion.div>

        {/* Value proposition */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
        >
          A fullstack web developer specializing in the{" "}
          <span className="text-primary font-medium">React ecosystem</span>,
          building scalable applications from Nigeria 🇳🇬
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-8"
        >
          {socials.slice(0, 5).map((social) => (
            <a
              href={social.href}
              target="_blank"
              key={social.href}
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
              aria-label={social.name}
            >
              <social.icon className="size-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
