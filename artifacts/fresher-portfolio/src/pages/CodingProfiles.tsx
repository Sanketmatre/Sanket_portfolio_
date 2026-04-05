import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const PROFILES = [
  {
    platform: "LeetCode",
    username: "sanketmatre",
    url: "https://leetcode.com/sanketmatre",
    color: "#FFA116",
    bg: "bg-[#FFA116]/10",
    border: "border-[#FFA116]/30",
    accent: "text-[#FFA116]",
    description: "Solved 100+ algorithmic problems across Easy, Medium, and Hard difficulties.",
    stats: ["100+ Problems", "DSA Focus", "Active"],
    icon: "LC",
  },
  {
    platform: "HackerRank",
    username: "matresanket00",
    url: "https://www.hackerrank.com/profile/matresanket00",
    color: "#2EC866",
    bg: "bg-[#2EC866]/10",
    border: "border-[#2EC866]/30",
    accent: "text-[#2EC866]",
    description: "Completed challenges in Problem Solving, Java, and Python skill domains.",
    stats: ["Problem Solving", "Java", "Python"],
    icon: "HR",
  },
  {
    platform: "CodeChef",
    username: "sanketmatre",
    url: "https://codechef.com/users/sanketmatre",
    color: "#5B4638",
    bg: "bg-amber-900/10",
    border: "border-amber-700/30",
    accent: "text-amber-500",
    description: "Participated in competitive programming contests and improved ranking consistently.",
    stats: ["Competitive", "Contests", "Consistent"],
    icon: "CC",
  },
];

export default function CodingProfiles() {
  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Where I Practice</p>
        <h1 className="text-4xl md:text-5xl font-bold">Coding <span className="text-primary">Profiles</span></h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Active on competitive programming platforms — consistently sharpening problem-solving skills.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROFILES.map((p, i) => (
          <motion.a
            key={p.platform}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`block p-6 rounded-2xl bg-card border ${p.border} hover:shadow-xl transition-all group cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center`}>
                <span className={`font-bold text-sm font-mono ${p.accent}`}>{p.icon}</span>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className={`text-xl font-bold mb-1 ${p.accent}`}>{p.platform}</h3>
            <p className="text-sm text-muted-foreground font-mono mb-3">@{p.username}</p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.stats.map((s) => (
                <span key={s} className={`px-2 py-0.5 rounded text-xs font-mono ${p.bg} border ${p.border} ${p.accent}`}>
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* DSA highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="mt-12 p-8 rounded-2xl bg-card border border-primary/20 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-4">
          <Code size={28} className="text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">100+ Problems Solved</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Consistent daily practice across data structures, algorithms, dynamic programming, and graph theory.
        </p>
      </motion.div>
    </div>
  );
}
