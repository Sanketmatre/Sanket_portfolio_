import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const CERTIFICATIONS = [
  { name: "Java Programming", org: "NPTEL / Coursera", date: "2023", desc: "Object-oriented programming with Java, covering core concepts and best practices." },
  { name: "Python for Data Science", org: "Coursera", date: "2023", desc: "Data analysis, visualization, and machine learning fundamentals with Python." },
  { name: "Web Development Bootcamp", org: "Udemy", date: "2022", desc: "Full-stack web development covering HTML, CSS, JavaScript, and React." },
  { name: "Data Structures & Algorithms", org: "Online Platform", date: "2022", desc: "In-depth study of algorithms, complexity analysis, and problem-solving patterns." },
];

const ACHIEVEMENTS = [
  { title: "100+ DSA Problems Solved", desc: "Consistently solved algorithmic challenges on LeetCode, HackerRank, and CodeChef, building strong problem-solving skills." },
  { title: "5+ Full-Stack Projects", desc: "Built and deployed multiple web applications as a fresher, showcasing practical skills in Java, Python, and React." },
  { title: "ENTC Engineering — Final Year", desc: "On track for B.E. in Electronics and Telecommunication with a software specialization, combining hardware knowledge with software skills." },
  { title: "Self-Taught Web Developer", desc: "Independently learned React, Flask, and Node.js beyond the college curriculum through online resources and project-based learning." },
];

export default function Certifications() {
  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Recognition</p>
        <h1 className="text-4xl md:text-5xl font-bold">Certifications & <span className="text-primary">Achievements</span></h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award size={20} className="text-primary" /> Certifications
          </h2>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{cert.name}</h3>
                  <span className="text-xs font-mono text-muted-foreground flex-shrink-0">{cert.date}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-1">{cert.org}</p>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Trophy size={20} className="text-primary" /> Achievements
          </h2>
          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Trophy size={14} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{ach.title}</h3>
                    <p className="text-sm text-muted-foreground">{ach.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
