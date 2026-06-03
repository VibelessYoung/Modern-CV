import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Mail, Send } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VibelessYoung"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card text-card-foreground rounded-lg border border-border hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:vibelessyoung@gmail.com"
              className="p-3 bg-card text-card-foreground rounded-lg border border-border hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:vibelessyoung@gmail.com"
              className="p-3 bg-card text-card-foreground rounded-lg border border-border hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Send className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </a>
          </div>
          <Button
            onClick={scrollToTop}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
