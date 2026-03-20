import { uses } from "@/constants/uses";
import { Icon } from "@iconify/react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/uses")({
  component: UsesPage,
});

function UsesPage() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="squiggly-underline">The Stuff I Use</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A curated list of the editors, frameworks, and tools I use most in
          my development workflow.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {uses.map((category, catIndex) => (
          <section key={category.title}>
            <h2 className="text-2xl font-bold mb-6 text-primary">
              {category.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 + itemIndex * 0.05 }}
                  className="group"
                >
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <ItemContent item={item} />
                    </a>
                  ) : (
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <ItemContent item={item} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ItemContent({ item }: { item: (typeof uses)[0]["items"][0] }) {
  return (
    <div className="flex items-start gap-4">
      {item.icon && (
        <div className="shrink-0 p-2 rounded-lg bg-secondary/50">
          <Icon icon={item.icon} className="w-6 h-6" />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-sm text-muted-foreground">{item.description}</p>
        )}
      </div>
    </div>
  );
}
