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
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="animate-section py-32 bg-background">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
          >
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-1 mx-auto rounded-full" />
        </motion.div>

        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
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
              <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}
              >
                <div className="bg-card text-card-foreground p-8 rounded-lg border border-border hover:border-primary transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase
                        className="w-5 h-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                  <p className="text-card-foreground leading-relaxed">
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
