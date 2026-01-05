import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Terminal, Braces, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Competitive Programmer",
  "Full-Stack Developer",
  "Problem Solver",
  "Algorithm Enthusiast",
];

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%" },
  { Icon: Terminal, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Braces, delay: 1, x: "75%", y: "70%" },
  { Icon: Trophy, delay: 1.5, x: "15%", y: "75%" },
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dotted-bg opacity-50" />
      
      {/* Animated Blobs */}
      <div className="blob w-96 h-96 -top-48 -left-48" />
      <div className="blob w-80 h-80 -bottom-40 -right-40 animate-delay-200" />
      <div className="blob w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-delay-400" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="absolute floating hidden md:block"
          style={{ left: x, top: y }}
        >
          <Icon className="w-12 h-12 text-primary/30" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            <Trophy className="w-4 h-4" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Sohayel</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground">
            {"<"}
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
            {" />"}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Turning coffee into code and algorithms into art.{" "}
          <span className="text-foreground font-medium">
            I solve problems others avoid.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href="#contact">
              Let's Connect
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-2"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
