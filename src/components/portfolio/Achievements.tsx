import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Award, Zap, Target } from "lucide-react";

const achievements = [
  {
    title: "ICPC Regional Finalist",
    description: "Qualified for ICPC Asia Dhaka Regional 2023 representing University of Dhaka",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    year: "2023",
  },
  {
    title: "Codeforces Expert",
    description: "Achieved Expert rating (1600+) on Codeforces, top 10% globally",
    icon: Star,
    color: "from-blue-400 to-blue-600",
    year: "2024",
  },
  {
    title: "LeetCode Knight",
    description: "Ranked in top 5% with 2100+ contest rating on LeetCode",
    icon: Medal,
    color: "from-orange-400 to-red-500",
    year: "2024",
  },
  {
    title: "National Hackathon Winner",
    description: "First place in National Coding Hackathon 2023 with team AlgoMasters",
    icon: Award,
    color: "from-purple-400 to-pink-500",
    year: "2023",
  },
  {
    title: "1500+ Problems Solved",
    description: "Solved 1500+ algorithmic problems across multiple competitive platforms",
    icon: Target,
    color: "from-green-400 to-emerald-500",
    year: "2024",
  },
  {
    title: "Google Code Jam Qualifier",
    description: "Advanced to Round 2 of Google Code Jam 2023",
    icon: Zap,
    color: "from-cyan-400 to-teal-500",
    year: "2023",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Trophy className="w-4 h-4" />
            Hall of Fame
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span> & Awards
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and recognition from my competitive programming journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5`} />
              </div>

              {/* Year badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                <achievement.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} opacity-10 blur-xl group-hover:opacity-30 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
