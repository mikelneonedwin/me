import { EMAIL } from "@/constants/globals";
import { socials } from "@/constants/socials";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer className="py-16 border-t border-border mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        {/* Big heading with squiggly underline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="squiggly-underline">Get in Touch</span>
        </h2>

        {/* Primary contact */}
        <p className="text-lg text-muted-foreground mb-6">
          Have a project in mind or want to collaborate?
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 px-6 py-3 mb-4 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:opacity-90"
        >
          Email me at {EMAIL}
        </a>

        <p className="text-muted-foreground mb-8">
          Prefer email for project inquiries, collaborations, and general
          contact.
        </p>

        <p className="text-muted-foreground mb-2">
          You can also reach me at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary hover:underline underline-offset-4"
          >
            {EMAIL}
          </a>
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="size-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Winner Edwin. Built with React & 💛
        </p>
      </motion.div>
    </footer>
  );
}
