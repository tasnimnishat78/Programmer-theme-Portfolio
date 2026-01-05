import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Coffee, Code } from "lucide-react";

const stats = [
  { label: "Problems Solved", value: "1500+", icon: Code },
  { label: "Years Coding", value: "4+", icon: Calendar },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration*/}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl -rotate-3" />

              {/* Avatar container */}
              <div className="relative glass-card rounded-3xl overflow-hidden aspect-square border border-white/10 bg-transparent backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/my-avatar1.png"
                    alt="Sohayel Mahmud"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>

              {/* floating badge (Bangladesh) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Bangladesh</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4"
            >
              About Me
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Passionate about{" "}
              <span className="text-gradient">solving complex problems</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8 text-justify">
              <p>
                I'm <span className="text-foreground font-semibold">Sohayel Mahmud</span>,
                a student developer with a deep passion for competitive programming and
                building elegant solutions to complex problems.
              </p>
              <p>
                When I'm not participating in coding contests or climbing the ranks on
                Codeforces, I enjoy building full-stack applications that make a difference.
                I believe in writing clean, efficient code that stands the test of time.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into an obsession
                with algorithmic thinking and software craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-muted/50 hover:bg-accent transition-colors group"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
