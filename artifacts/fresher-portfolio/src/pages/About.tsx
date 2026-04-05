import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, GraduationCap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const KEYWORDS = ["Java", "Spring Boot", "Hibernate", "React", "REST APIs", "MySQL", "OOP", "DSA"];
const TRAITS = [
  { num: "01", label: "Problem Solver", desc: "Analytical approach to complex challenges" },
  { num: "02", label: "Fast Learner", desc: "Adapts quickly to new technologies" },
  { num: "03", label: "Team Player", desc: "Collaborative and communicative" },
  { num: "04", label: "Detail Oriented", desc: "Clean, maintainable code always" },
];

export default function About() {
  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div {...fadeUp()} className="mb-12">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get to Know Me</p>
        <h1 className="text-4xl md:text-5xl font-bold">About <span className="text-primary">Me</span></h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Avatar */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-6xl font-bold text-primary border-2 border-primary/30 shadow-2xl shadow-primary/20">
              SM
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
          </div>
          <div className="space-y-3 w-full max-w-xs">
            {[
              { icon: MapPin, label: "Location", value: "India" },
              { icon: GraduationCap, label: "Status", value: "Final Year Student" },
              { icon: Briefcase, label: "Available for", value: "Full Stack Java Dev Roles" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                <Icon size={16} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/api/resume/download"
            download="matre_sanket_resume_page-0001.jpg"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/25"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        {/* Bio */}
        <motion.div {...fadeUp(0.2)} className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a final-year ENTC Engineering student and a <span className="text-primary font-medium">Full Stack Java Developer</span> with strong hands-on experience in building end-to-end web applications. My backend stack centres around <span className="text-primary font-medium">Java, Spring Boot, Hibernate</span>, and REST APIs, while on the frontend I work with <span className="text-primary font-medium">React.js</span> to deliver responsive, user-friendly interfaces.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am passionate about writing clean, maintainable code and continuously sharpening my problem-solving skills through Data Structures and Algorithms. I thrive on building real-world applications that solve genuine business problems — like my FramDirect project, which reduced distribution costs by 60%.
          </p>

          {/* Keywords */}
          <div>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-3">Core Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {KEYWORDS.map((kw) => (
                <span key={kw} className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {TRAITS.map((t) => (
              <div key={t.num} className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold font-mono text-lg">{t.num}</span>
                <p className="font-semibold text-foreground mt-1">{t.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
