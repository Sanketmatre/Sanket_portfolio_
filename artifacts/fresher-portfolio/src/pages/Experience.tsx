import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.E. Electronics and Telecommunication Engineering",
    institution: "University Institute of Technology",
    period: "2021 – 2025",
    details: "Specialization in Software Development | Relevant coursework: Data Structures, Algorithms, OOP, Web Technology, DBMS, Computer Networks",
    grade: "CGPA: 7.5+ (Expected)",
  },
  {
    degree: "12th Grade (HSC)",
    institution: "State Board",
    period: "2020 – 2021",
    details: "Science stream with Mathematics and Computer Science",
    grade: "Distinction",
  },
  {
    degree: "10th Grade (SSC)",
    institution: "State Board",
    period: "2018 – 2019",
    details: "Strong foundation in Mathematics and Science",
    grade: "Distinction",
  },
];

const EXPERIENCE = [
  {
    role: "Seeking First Opportunity",
    company: "Open to Work",
    period: "Present",
    type: "work",
    details: [
      "Actively building projects to strengthen portfolio",
      "Contributing to open-source projects",
      "Preparing for software engineering roles in full-stack development",
      "Solved 100+ DSA problems to sharpen algorithmic thinking",
    ],
  },
];

function TimelineItem({
  icon: Icon,
  color,
  title,
  subtitle,
  period,
  details,
  extra,
  delay,
}: {
  icon: typeof GraduationCap;
  color: string;
  title: string;
  subtitle: string;
  period: string;
  details: string | string[];
  extra?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
          <Icon size={18} />
        </div>
        <div className="flex-1 w-px bg-border mt-2" />
      </div>
      <div className="pb-8 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
            <Calendar size={12} /> {period}
          </div>
        </div>
        <p className="text-primary font-medium text-sm mb-2">{subtitle}</p>
        {Array.isArray(details) ? (
          <ul className="space-y-1.5">
            {details.map((d, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 text-xs">▶</span> {d}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{details}</p>
        )}
        {extra && (
          <div className="mt-2 inline-flex px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
            {extra}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">My Journey</p>
        <h1 className="text-4xl md:text-5xl font-bold">Experience & <span className="text-primary">Education</span></h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Briefcase size={20} className="text-primary" /> Work Experience
          </h2>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem
              key={exp.role}
              icon={Briefcase}
              color="bg-accent/15 border border-accent/30 text-accent"
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              details={exp.details}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" /> Education
          </h2>
          {EDUCATION.map((edu, i) => (
            <TimelineItem
              key={edu.degree}
              icon={GraduationCap}
              color="bg-primary/15 border border-primary/30 text-primary"
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              details={edu.details}
              extra={edu.grade}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
