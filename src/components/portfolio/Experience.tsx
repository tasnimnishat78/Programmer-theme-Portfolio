import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, MapPin, Calendar, ChevronDown, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "TechVentures Inc.",
    location: "Dhaka, Bangladesh",
    totalPeriod: "2023 - Present",
    roles: [
      {
        title: "Full Stack Developer",
        period: "Jun 2024 - Present",
        description: "Leading development of microservices architecture. Building scalable APIs and real-time features using Node.js and React.",
        technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      },
      {
        title: "Frontend Developer",
        period: "Jan 2023 - May 2024",
        description: "Developed responsive web applications and improved page performance by 40%. Collaborated with design team on UI/UX implementation.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  {
    company: "CodeCraft Studios",
    location: "Remote",
    totalPeriod: "2022 - 2023",
    roles: [
      {
        title: "Junior Developer",
        period: "Jun 2022 - Dec 2022",
        description: "Built and maintained e-commerce platforms. Implemented payment integrations and inventory management systems.",
        technologies: ["JavaScript", "Express", "MongoDB"],
      },
    ],
  },
  {
    company: "OpenSource Community",
    location: "Remote",
    totalPeriod: "2021 - Present",
    roles: [
      {
        title: "Open Source Contributor",
        period: "2021 - Present",
        description: "Active contributor to various open-source projects. Focused on developer tools and competitive programming utilities.",
        technologies: ["Python", "C++", "Git"],
      },
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      <div className="flex gap-4 md:gap-8">
        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center z-10"
        >
          <Building2 className="w-5 h-5 text-primary-foreground" />
        </motion.div>

        {/* Content card */}
        <div className="flex-1 glass-card rounded-2xl overflow-hidden">
          {/* Company header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-6 text-left hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{experience.company}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.totalPeriod}
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-full bg-muted"
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </div>
          </button>

          {/* Roles */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6">
              {experience.roles.map((role, roleIndex) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isExpanded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: roleIndex * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{role.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {role.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {role.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building real-world solutions while honing my competitive programming skills.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
