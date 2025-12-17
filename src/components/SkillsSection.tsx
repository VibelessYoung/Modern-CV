import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Smartphone, Zap, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React & TypeScript', level: 95, icon: Code2 },
  { name: 'UI/UX Design', level: 90, icon: Palette },
  { name: 'Responsive Design', level: 92, icon: Smartphone },
  { name: 'Performance Optimization', level: 88, icon: Zap },
  { name: 'Team Collaboration', level: 94, icon: Users },
  { name: 'Agile Methodology', level: 87, icon: TrendingUp },
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
          { width: '0%' },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="animate-section py-32 bg-background">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight leading-tight" style={{ letterSpacing: '-0.025em', lineHeight: '1.2' }}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-1 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
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
                  <div className="p-3 bg-card rounded-lg border border-border group-hover:border-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-heading font-semibold text-foreground">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    ref={(el) => (skillBarsRef.current[index] = el)}
                    className="h-full bg-gradient-1 rounded-full"
                    style={{ width: '0%' }}
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
