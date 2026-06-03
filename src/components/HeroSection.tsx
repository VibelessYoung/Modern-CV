import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import bg from "@/assets/images/bg.jpg";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    ).fromTo(
      taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.video
          alt="light motion video"
          src={bg}
          poster={bg}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/75 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <motion.h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-hero-text mb-6 tracking-tight leading-tight"
          style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
        >
          Creative Designer &<br />
          Front-End Developer
        </motion.h1>
        <motion.p
          ref={taglineRef}
          className="text-xl md:text-2xl text-hero-text/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge design and
          technology
        </motion.p>
        <Button
          onClick={scrollToPortfolio}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base px-8 py-6"
        >
          View My Work
          <ArrowDown className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-8 h-8 text-hero-text/60" />
      </motion.div>
    </section>
  );
}
