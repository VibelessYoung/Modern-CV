import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette, // HTML / CSS / Sass
  Brush, // Tailwind
  Layers, // Bootstrap
  Code2, // JavaScript
  Atom, // React
  Sun, // Astro
  GitBranch, // Git
  Github, // GitHub
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML / CSS / Sass", level: 80, icon: Palette },
  { name: "Bootstrap", level: 70, icon: Layers },
  { name: "Tailwind CSS", level: 70, icon: Brush },
  { name: "JavaScript", level: 60, icon: Code2 },
  { name: "React", level: 60, icon: Atom },
  { name: "Astro", level: 40, icon: Sun },
  { name: "Git", level: 40, icon: GitBranch },
  { name: "GitHub", level: 40, icon: Github },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const bars = skillBarsRef.current;

    bars.forEach((bar, index) => {
      if (bar) {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden overflow-x-hidden animate-section bg-background"
    >
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/3 bg-gradient-to-b from-blue-500/15 via-blue-400/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-blue-500/15 via-blue-400/5 to-transparent" />
      <div
        className="absolute inset-0 z-0 pointer-events-none
    [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
      >
      </div>
      <div className="container relative z-10 px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl font-heading text-foreground"
            style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
          >
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-1" />
        </motion.div>

        <div className="grid max-w-4xl gap-12 mx-auto md:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 transition-colors border rounded-lg bg-card border-border group-hover:border-primary">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold font-heading text-foreground">
                        {skill.name}
                      </h3>
                      <span className="font-mono text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    ref={(el) => (skillBarsRef.current[index] = el)}
                    className="h-full rounded-full bg-gradient-1"
                    style={{ width: "0%" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
