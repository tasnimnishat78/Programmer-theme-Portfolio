import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    institution: "University of Kufa, Iraq",
    degree: "Bachelor of Science in Electronics Engineering",
    period: "2025 - Present",
    result: null,
    icon: GraduationCap,
    highlights: ["Dean's List", "Relevant Coursework: Digital Systems, Signal Processing"],
    isCurrent: true,
  },
  {
    institution: "Dhaka College, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2022 - 2023",
    result: "GPA: 5.00/5.00",
    icon: BookOpen,
    highlights: ["Science Division", "Dean's List"],
    isCurrent: false,
  },
  {
    institution: "ROMI Fazil Madrasa",
    degree: "Secondary School Certificate (SSC)",
    period: "2020 - 2021",
    result: "GPA: 5.00/5.00",
    icon: Award,
    highlights: ["Science Division", "Talentpool Scholarship", "16th position in Dhaka Division"],
    isCurrent: false,
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 dotted-bg opacity-30" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The foundation of my journey in computer science and problem-solving.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-border" />
              )}

              <div className="flex gap-6 pb-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${edu.isCurrent
                    ? "bg-gradient-to-br from-primary to-secondary animate-pulse-glow"
                    : "bg-muted"
                    }`}
                >
                  <edu.icon className={`w-5 h-5 ${edu.isCurrent ? "text-primary-foreground" : "text-muted-foreground"}`} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 rounded-2xl group hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${edu.isCurrent
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                        }`}>
                        {edu.period}
                      </span>
                      {edu.result && (
                        <p className="mt-2 text-sm font-semibold text-gradient">{edu.result}</p>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
