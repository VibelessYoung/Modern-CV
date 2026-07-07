import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "",
    role: "start learn web",
    duration: "2025",
    description: "start learning web and create page design and more",
  },
  {
    company: "uni-montazeri",
    role: "create a tracker website",
    duration: "2025",
    description:
      "create a more page with a good design and a add work logic and i learn team work!",
  },
  {
    company: "Azhman-Group",
    role: "Check and analyze website",
    duration: "2025",
    description:
      "check and analyze their website and give full feedbacks for optimize, seo, bugs and more",
  },
];

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden animate-section bg-background"
    >
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/3 bg-gradient-to-b from-blue-500/15 via-blue-400/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-blue-500/15 via-blue-400/5 to-transparent" />
      <div className="container px-8 mx-auto">
        <div className="absolute top-80 left-0 w-[220px] h-[220px] -translate-x-1/3 bg-primary/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] translate-x-1/3 bg-indigo-500/20 rounded-full blur-[120px]" />
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
            Experience
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-1" />
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-16 md:mb-24 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 z-10 w-4 h-4 transform -translate-x-1/2 border-4 rounded-full left-8 md:left-1/2 bg-primary border-background" />

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}
              >
                <div className="p-8 transition-colors border rounded-lg bg-card text-card-foreground border-border hover:border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase
                        className="w-5 h-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold font-heading text-card-foreground">
                    {exp.role}
                  </h3>
                  <h4 className="mb-4 text-lg text-primary">{exp.company}</h4>
                  <p className="leading-relaxed text-card-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
