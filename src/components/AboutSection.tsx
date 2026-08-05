import { motion } from "framer-motion";
import profile from "@/assets/images/profile.webp";
import yuta from "@/assets/images/yuta.png";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-white animate-section dark:bg-neutral"
    >
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-blue-500/80 dark:from-blue-400/15 via-blue-300/10 dark:via-blue-500/5 to-transparent"
      />
      <div className="container px-8 mx-auto">
        <div className="grid items-center max-w-6xl gap-16 mx-auto md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={yuta}
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
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl font-heading dark:text-foreground"
              style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
            >
              About Me
            </h2>
            <div className="space-y-4 leading-relaxed text-black dark:text-foreground">
              <p>
                I'm a Front-End Developer with over many month of experience
                creating beautiful, functional digital experiences. My work
                bridges the gap between design and development, ensuring every
                project is both visually stunning and technically sound.
              </p>
              <p>
                I specialize in NextJS, React, and modern web technologies, with
                a keen eye for detail and a commitment to accessibility. My
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
