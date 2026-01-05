import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

const allProjects = [
  {
    id: 1,
    title: "CP Tracker",
    description: "A competitive programming progress tracker that aggregates stats from multiple platforms like Codeforces, LeetCode, and CodeChef. Features beautiful charts, goal tracking, and daily problem recommendations.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Algorithm Visualizer",
    description: "Interactive visualization tool for sorting algorithms, graph traversals, and pathfinding algorithms with step-by-step animation. Helps students understand complex algorithms visually.",
    image: "/placeholder.svg",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Code Collab",
    description: "Real-time collaborative code editor with video chat, syntax highlighting, and support for competitive programming contests. Perfect for pair programming and mock interviews.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Contest Calendar",
    description: "Aggregated calendar for upcoming competitive programming contests from all major platforms with reminders, timezone support, and Google Calendar integration.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "REST APIs"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Problem Recommender",
    description: "AI-powered system that recommends competitive programming problems based on your skill level, weaknesses, and goals. Uses machine learning to personalize suggestions.",
    image: "/placeholder.svg",
    technologies: ["Python", "FastAPI", "TensorFlow", "React"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Code Snippet Manager",
    description: "A developer tool to store, organize, and quickly access code snippets for competitive programming. Features syntax highlighting and quick search.",
    image: "/placeholder.svg",
    technologies: ["Electron", "React", "SQLite"],
    category: "Desktop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Desktop"];

const ProjectCard = ({ project, index }: { project: typeof allProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-primary text-primary-foreground"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-foreground text-background"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container-custom px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete collection of my work, from competitive programming tools to full-stack applications.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
