import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
  },
  {
    category: "Core Concepts",
    items: ["Data Structures", "Algorithms", "System Design", "Agile/Scrum", "CI/CD", "Web Performance"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30 border-y border-border/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of the tools, languages, and frameworks I use to build modern applications. Constantly learning and expanding my stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={container}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 font-mono text-primary flex items-center gap-3">
                <span className="h-px w-8 bg-primary block"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.span 
                    key={i}
                    variants={item}
                    className="px-4 py-2 rounded-md bg-secondary/50 border border-border text-sm font-medium text-foreground hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
