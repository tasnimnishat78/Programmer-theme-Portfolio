import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Target, Zap, Medal, TrendingUp, Star } from "lucide-react";

const platforms = [
  {
    name: "Codeforces",
    handle: "@sohayel7461",
    rating: 1847,
    maxRating: 1892,
    rank: "Expert",
    solved: 650,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    icon: "/cf.svg",
    contests: 87,
  },
  {
    name: "LeetCode",
    handle: "@sohayelmahmud",
    rating: 2156,
    maxRating: 2156,
    rank: "Knight",
    solved: 480,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    icon: "/lc.svg",
    contests: 52,
  },
  {
    name: "CodeChef",
    handle: "@sohayelmahmud",
    rating: 1923,
    maxRating: 1956,
    rank: "4★",
    solved: 320,
    color: "from-amber-600 to-amber-700",
    bgColor: "bg-amber-600/10",
    borderColor: "border-amber-600/30",
    icon: "/cc.svg",
    contests: 34,
  },
  {
    name: "AtCoder",
    handle: "@sohayel",
    rating: 1456,
    maxRating: 1498,
    rank: "Cyan",
    solved: 180,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    icon: "/ac.png",
    contests: 28,
  },
  {
    name: "HackerRank",
    handle: "@sohayelmahmud612",
    rating: 9859,
    maxRating: 8434,
    rank: "5★ Gold",
    solved: 250,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    icon: "/hr.svg",
    contests: 15,
  },
  {
    name: "Exercism",
    handle: "@sohayelmahmud",
    rating: null,
    maxRating: null,
    rank: "Pro",
    solved: 150,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    icon: "ex.svg",
    contests: 0,
  }
];

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const PlatformCard = ({ platform, index }: { platform: typeof platforms[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative glass-card p-6 rounded-2xl border-2 ${platform.borderColor} overflow-hidden group`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Platform header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-md p-2 mb-3 group-hover:scale-110 transition-transform duration-300">
            <img
              src={platform.icon}
              alt={platform.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
          <p className="text-sm text-muted-foreground font-mono">{platform.handle}</p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${platform.color} text-white text-sm font-bold`}
        >
          {platform.rank}
        </motion.div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4">
        {platform.rating && (
          <div className={`p-3 rounded-xl ${platform.bgColor}`}>
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <TrendingUp className="w-3 h-3" />
              Rating
            </div>
            <div className="text-2xl font-bold text-foreground">
              <AnimatedCounter end={platform.rating} />
            </div>
            <div className="text-xs text-muted-foreground">
              Max: {platform.maxRating}
            </div>
          </div>
        )}

        <div className={`p-3 rounded-xl ${platform.bgColor}`}>
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
            <Target className="w-3 h-3" />
            Solved
          </div>
          <div className="text-2xl font-bold text-foreground">
            <AnimatedCounter end={platform.solved} suffix="+" />
          </div>
        </div>

        <div className={`p-3 rounded-xl ${platform.bgColor} col-span-2`}>
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
            <Zap className="w-3 h-3" />
            Contests Participated
          </div>
          <div className="text-xl font-bold text-foreground">
            <AnimatedCounter end={platform.contests} />
          </div>
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${platform.color}`}
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
      />
    </motion.div>
  );
};

export const CodeArena = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalSolved = platforms.reduce((acc, p) => acc + p.solved, 0);
  const totalContests = platforms.reduce((acc, p) => acc + p.contests, 0);

  return (
    <section id="code-arena" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      <div className="blob w-96 h-96 -top-48 -right-48 opacity-20" />
      <div className="blob w-80 h-80 -bottom-40 -left-40 opacity-20 animate-delay-300" />

      <div className="container-custom relative">
        {/* Header */}
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
            Competitive Programming
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Code <span className="text-gradient">Arena</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Where algorithms meet ambition. My competitive programming journey across various platforms.
          </p>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Target, label: "Total Problems solved", value: totalSolved, suffix: "+" },
            { icon: Zap, label: "Contests", value: totalContests },
            { icon: Medal, label: "Best Rank", value: "Expert" },
            { icon: Star, label: "Platforms", value: platforms.length },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:border-primary/50 transition-colors"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-gradient">
                {typeof stat.value === "number" ? (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
