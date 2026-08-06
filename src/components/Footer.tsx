import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Mail, Send } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-white dark:bg-background/70 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/3 bg-gradient-to-b from-blue-500/80 dark:from-blue-400/15 via-blue-300/10 dark:via-blue-500/5 to-transparent" />
      <div className="container relative px-8 py-10 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm tracking-wide text-black/60 dark:text-muted-foreground">
              © {new Date().getFullYear()} Portfolio.
              <span className="ml-1 text-primary">All rights reserved.</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VibelessYoung"
              target="_blank"
              rel="noopener noreferrer"
              className="
          group
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          border border-border/60
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-primary/60
          hover:bg-primary/10
          hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
          "
            >
              <Github
                className="w-5 h-5 transition-all duration-300 text-black/60 dark:text-muted-foreground group-hover:text-primary group-hover:rotate-6"
                strokeWidth={1.8}
              />
            </a>

            <a
              href="mailto:vibelessyoung@gmail.com"
              className="
          group
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          border border-border/60
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-primary/60
          hover:bg-primary/10
          hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
          "
            >
              <Mail
                className="w-5 h-5 transition-all duration-300 text-black/60 dark:text-muted-foreground group-hover:text-primary"
                strokeWidth={1.8}
              />
            </a>

            <a
              href="https://t.me/VibelessYoung"
              target="_blank"
              rel="noopener noreferrer"
              className="
          group
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          border border-border/60
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-primary/60
          hover:bg-primary/10
          hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
          "
            >
              <Send
                className="
            h-5 w-5
            text-black/60
            dark:text-muted-foreground
            transition-all
            duration-300
            group-hover:text-primary
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            "
                strokeWidth={1.8}
              />
            </a>
          </div>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="
        h-12
        w-12
        rounded-2xl
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(59,130,246,.35)]
        "
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
