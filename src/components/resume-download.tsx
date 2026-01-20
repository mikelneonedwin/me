import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeDownload() {
  return (
    <Button
      asChild
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-accent"
    >
      <a href="#">
        <Download className="w-4 h-4 mr-2" />
        Download Resume
      </a>
    </Button>
  );
}
