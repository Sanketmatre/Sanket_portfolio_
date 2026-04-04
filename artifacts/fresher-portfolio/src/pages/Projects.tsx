import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const PROJECTS = [
  {
    title: "FramDirect",
    tags: ["Python", "Flask"],
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    description: "A direct-to-consumer framework management system enabling small businesses to sell directly without middlemen.",
    problem: "Small businesses lose significant revenue to distribution intermediaries, limiting their growth and profitability.",
    features: ["Product catalog management", "Order processing system", "Customer portal", "Inventory tracking"],
    impact: "Reduced distribution costs by 60%",
    github: "https://github.com/sanketmatre/framdirect",
    demo: null,
    pinned: true,
  },
  {
    title: "Student Management System",
    tags: ["Java"],
    tech: ["Java", "MySQL", "HTML", "CSS"],
    description: "Full-stack system to manage student academic records with authentication and comprehensive CRUD operations.",
    problem: "Manual record management creates inefficiencies, errors, and delays in academic administration.",
    features: ["CRUD operations for student records", "Role-based authentication", "Grade tracking", "Report generation"],
    impact: "Reduced manual work by 80%",
    github: "https://github.com/sanketmatre/student-management",
    demo: null,
    pinned: false,
  },
  {
    title: "Personal Portfolio Website",
    tags: ["React"],
    tech: ["React", "HTML", "CSS", "JavaScript"],
    description: "Responsive personal portfolio to showcase projects and skills with modern UI and smooth animations.",
    problem: "Needed a professional online presence to showcase work to potential employers and collaborators.",
    features: ["Responsive design", "Project showcase", "Skills visualization", "Contact form"],
    impact: "Professional online presence established",
    github: "https://github.com/sanketmatre/portfolio",
    demo: null,
    pinned: false,
  },
  {
    title: "DSA Problem Tracker",
    tags: ["Python", "Flask"],
    tech: ["Python", "Flask"],
    description: "Web app to track and organize solved DSA problems by category and difficulty level.",
    problem: "Tracking DSA progress across multiple platforms is disorganized and hard to review consistently.",
    features: ["Problem categorization", "Difficulty tracking", "Progress analytics", "Solution notes"],
    impact: "Solved & tracked 100+ problems",
    github: "https://github.com/sanketmatre/dsa-tracker",
    demo: null,
    pinned: false,
  },
];

const FILTERS = ["All", "Java", "Python", "React", "Flask"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">What I've Built</p>
        <h1 className="text-4xl md:text-5xl font-bold">My <span className="text-primary">Projects</span></h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Real-world applications built to solve actual problems — each one a step forward in my engineering journey.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === f
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className={`relative p-6 rounded-2xl border transition-all cursor-pointer group ${
                project.pinned
                  ? "bg-card border-primary/40 shadow-lg shadow-primary/10"
                  : "bg-card border-border/50 hover:border-primary/30"
              }`}
              onClick={() => setExpanded(expanded === project.title ? null : project.title)}
            >
              {project.pinned && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-mono">
                  <Star size={10} /> Featured
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors pr-20">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-muted border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {project.impact}
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {expanded === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Problem</p>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Key Features</p>
                        <ul className="space-y-1">
                          {project.features.map((f) => (
                            <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">—</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3 mt-4 pt-4 border-t border-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted border border-border text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Github size={14} /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm font-medium text-primary hover:bg-primary/20 transition-all"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); setExpanded(expanded === project.title ? null : project.title); }}
                  className="ml-auto text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  {expanded === project.title ? "Less" : "Details"}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
