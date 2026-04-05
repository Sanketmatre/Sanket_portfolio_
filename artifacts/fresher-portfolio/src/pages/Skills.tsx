import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const SKILL_CATEGORIES = [
  {
    category: "Java & Backend",
    skills: [
      { name: "Java (Core & Advanced)", level: 92 },
      { name: "Spring Boot", level: 85 },
      { name: "Hibernate / JPA", level: 80 },
      { name: "REST API Design", level: 88 },
      { name: "JDBC", level: 82 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 82 },
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 82 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Python", level: 80 },
      { name: "Data Structures & Algorithms", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div {...fadeUp()} className="mb-12">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">What I Know</p>
        <h1 className="text-4xl md:text-5xl font-bold">Technical <span className="text-primary">Skills</span></h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          A toolkit built through coursework, projects, and self-directed learning — each skill actively applied in real projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.category}
            {...fadeUp(ci * 0.1)}
            className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
          >
            <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {cat.category}
            </h2>
            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.08} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
