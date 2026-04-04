import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Braces, Database } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const TYPING_ROLES = ["Software Developer", "Web Developer", "Problem Solver", "DSA Enthusiast"];

function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = deleting
      ? setTimeout(() => {
          setSubIndex((prev) => prev - 1);
          if (subIndex === 0) { setDeleting(false); setIndex((i) => (i + 1) % words.length); }
        }, 60)
      : setTimeout(() => {
          setSubIndex((prev) => prev + 1);
          if (subIndex === current.length) { setTimeout(() => setDeleting(true), 1500); }
        }, 100);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  const current = words[index % words.length];
  return (
    <span className="text-primary">
      {current.substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const STATS = [
  { value: "5+", label: "Projects" },
  { value: "100+", label: "DSA Problems Solved" },
  { value: "Final Year", label: "Engineer" },
];

const KEYWORDS = ["Data Structures", "OOP", "Web Development"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
};

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Full-Time Roles
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
            >
              <span className="text-primary">Sanket</span>{" "}
              <span className="text-foreground">Matre</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold text-muted-foreground mb-3"
            >
              Software Developer / ENTC Engineer
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg"
            >
              I build scalable web applications using Java, Python & modern frontend technologies —
              turning complex problems into clean, efficient solutions.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg font-medium mb-6"
            >
              <TypeWriter words={TYPING_ROLES} />
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-8"
            >
              {KEYWORDS.map((kw) => (
                <span key={kw} className="px-3 py-1 text-sm rounded-full bg-accent/10 border border-accent/25 text-accent-foreground font-mono">
                  {kw}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col items-center px-4 py-2 rounded-xl bg-card border border-border/50">
                  <span className="text-xl font-bold text-primary">{s.value}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={7}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/25"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <a
                href="/api/resume/download"
                download="matre_sanket_resume_page-0001.jpg"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold hover:bg-muted/50 hover:scale-105 active:scale-95 transition-all"
              >
                <Download size={18} /> Download Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              custom={8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <a href="https://github.com/sanketmatre" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanket-matre-0126a2296/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sanketmatre@email.com" className="p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[380px] h-[380px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <div className="relative w-full h-full rounded-3xl border border-primary/20 bg-card/50 backdrop-blur overflow-hidden flex items-center justify-center">
                <div className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                    <Code size={36} className="text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground font-mono">{"{ }"}</p>
                  <div className="space-y-2 text-left font-mono text-sm">
                    <p className="text-muted-foreground"><span className="text-accent">const</span> <span className="text-primary">dev</span> = {"{"}</p>
                    <p className="text-muted-foreground pl-4">name: <span className="text-green-400">"Sanket Matre"</span>,</p>
                    <p className="text-muted-foreground pl-4">role: <span className="text-green-400">"Software Dev"</span>,</p>
                    <p className="text-muted-foreground pl-4">skills: [<span className="text-yellow-400">Java, Python</span>],</p>
                    <p className="text-muted-foreground pl-4">open: <span className="text-blue-400">true</span></p>
                    <p className="text-muted-foreground">{"}"}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
              </div>
              {/* floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg"
              >
                Java Developer
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-lg"
              >
                DSA Enthusiast
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
