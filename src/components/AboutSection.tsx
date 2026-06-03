import { motion } from "framer-motion";
import profile from "@/assets/images/profile.jpg";

export function AboutSection() {
  return (
    <section id="about" className="animate-section py-32 bg-neutral">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={profile}
              alt="portrait"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight leading-tight"
              style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
            >
              About Me
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I'm a Front-End Developer with over many month of experience
                creating beautiful, functional digital experiences. My work
                bridges the gap between design and development, ensuring every
                project is both visually stunning and technically sound.
              </p>
              <p>
                I specialize in React, JavaScript, and modern web technologies,
                with a keen eye for detail and a commitment to accessibility. My
                approach combines creative problem-solving with data-driven
                insights to deliver solutions that truly resonate with users.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
