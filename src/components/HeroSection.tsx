import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Languages } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import bg from "@/assets/images/hero.webp";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 700, 900], [1, 1, 0]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    ).fromTo(
      taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6",
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
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Video Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <motion.video
          alt="light motion video"
          src={bg}
          poster={bg}
          className="object-cover w-full h-full"
          autoPlay
          style={{ opacity }}
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b dark:from-transparent dark:via-background/75 dark:to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-8 mx-auto text-center">
        <motion.h1
          ref={headlineRef}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl font-heading text-hero-text"
          style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
        >
          Creative Designer &<br />
          Front-End Developer
        </motion.h1>
        <motion.p
          ref={taglineRef}
          className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl text-hero-text/90"
        >
          Crafting immersive digital experiences with cutting-edge design and
          technology
        </motion.p>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={() =>
              window.open(
                `https://translate.google.com/translate?sl=auto&tl=fa&u=${encodeURIComponent(window.location.href)}`,
                "_blank",
              )
            }
            size="lg"
            className="px-8 py-6 text-base font-normal text-white bg-emerald-500 hover:bg-emerald-600"
          >
            Translate to Persian
            <Languages className="w-5 h-5 ml-2" />
          </Button>

          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="px-8 py-6 text-base font-normal bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View My Work Flow
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute z-10 transform -translate-x-1/2 bottom-12 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-8 h-8 text-hero-text/60" />
      </motion.div>
    </section>
  );
}
