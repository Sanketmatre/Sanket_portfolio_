import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2023 - Present",
    description: "Contributed to multiple open-source React and Node.js repositories. Fixed bugs, improved documentation, and added new features resulting in 15+ merged pull requests.",
    type: "Volunteer"
  },
  {
    role: "Software Engineering Intern",
    company: "TechNova Solutions",
    period: "Summer 2023",
    description: "Developed and maintained internal dashboard tools using React. Optimized database queries improving report generation speed by 30%. Collaborated with senior engineers on API design.",
    type: "Internship"
  },
  {
    role: "Lead Developer",
    company: "University Hackathon Team",
    period: "2022 - 2024",
    description: "Led a team of 4 in developing award-winning applications across 3 national hackathons. Managed architecture, task delegation, and primary frontend implementation.",
    type: "Academic"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Experience & <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical application of skills through internships, open-source, and collaborative academic projects.
          </p>
        </motion.div>

        <div className="max-w-4xl border-l border-border/50 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-card border-[3px] border-background flex items-center justify-center shadow-[0_0_0_2px_hsl(var(--border))]">
                <Briefcase size={16} className="text-primary" />
              </div>
              
              <div className="group">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                    {exp.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-muted-foreground mb-2">{exp.company}</h4>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground/80 font-mono mb-4">
                  <Calendar size={14} />
                  {exp.period}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
