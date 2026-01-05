import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Languages",
    color: "from-primary to-secondary",
    skills: [
      { name: "C++", level: 95 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux", level: 80 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 65 },
    ],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card p-6 rounded-2xl glow-card group cursor-pointer"
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-6`}>
        {category.title}
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.2 }}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hover effect indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"
      />
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
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
            Tech Arsenal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of competitive programming and development experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
