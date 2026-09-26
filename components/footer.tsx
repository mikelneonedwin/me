export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-6 mt-12 bg-muted/20 text-xs text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Winner Edwin. Built with Next.js.</p>
        <div className="flex items-center gap-4 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}
