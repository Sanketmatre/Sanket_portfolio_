import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Academic <span className="text-primary">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A strong foundation in computer science principles and software engineering methodologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2"></div>

          {/* Timeline Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 md:mb-24 w-full"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 ml-12 md:ml-0">
              <h3 className="text-2xl font-bold text-foreground">B.S. in Computer Science</h3>
              <p className="text-primary font-mono mt-1 mb-3">University of Technology • 2020 - 2024</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-medium mb-4">
                <Award size={14} className="text-primary" />
                GPA: 3.8/4.0 • Summa Cum Laude
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm ml-auto">
                Focused on software engineering, distributed systems, and modern web architectures. Led the University Coding Club and organized hackathons.
              </p>
            </div>
            
            <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-card border-4 border-background flex items-center justify-center -translate-x-1/2 shadow-[0_0_0_2px_hsl(var(--primary))] z-10">
              <GraduationCap size={18} className="text-primary" />
            </div>

            <div className="md:w-1/2 md:pl-12 ml-12 md:ml-0">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-primary" />
                  Key Coursework
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Data Structures</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Algorithms</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Operating Systems</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Database Systems</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Web Development</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Software Engineering</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
