import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="squiggly-underline">About</span>
        </h2>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
          <p>
            I&apos;m a versatile Fullstack web developer with expertise in{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">Vue</span>, and the
            modern web ecosystem. With experience across databases, APIs, and
            cloud platforms, I love turning ideas into responsive, user-friendly
            applications that people actually enjoy using.
          </p>
          <p>
            Learning new technologies and tackling challenging projects keeps me
            motivated and constantly growing as a developer.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
