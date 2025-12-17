import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Front-End Developer',
    duration: '2021 - Present',
    description: 'Leading development of enterprise-level web applications using React and TypeScript. Mentoring junior developers and establishing best practices for code quality and performance.',
  },
  {
    company: 'Creative Digital Agency',
    role: 'UX Designer & Developer',
    duration: '2019 - 2021',
    description: 'Designed and developed responsive websites and web applications for diverse clients. Collaborated with cross-functional teams to deliver pixel-perfect implementations.',
  },
  {
    company: 'Startup Ventures',
    role: 'Full-Stack Developer',
    duration: '2017 - 2019',
    description: 'Built and maintained full-stack applications using modern JavaScript frameworks. Contributed to product strategy and user experience design decisions.',
  },
  {
    company: 'Design Studio Pro',
    role: 'Junior Front-End Developer',
    duration: '2015 - 2017',
    description: 'Developed responsive websites and implemented interactive UI components. Gained expertise in HTML, CSS, JavaScript, and modern front-end workflows.',
  },
];

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight leading-tight" style={{ letterSpacing: '-0.025em', lineHeight: '1.2' }}>
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
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <div className="bg-card text-card-foreground p-8 rounded-lg border border-border hover:border-primary transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{exp.duration}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                  <p className="text-card-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
