import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { LogOut, User, FolderOpen, ExternalLink, Code2 } from "lucide-react";
import { useGetMe, getGetMeQueryKey, useLogout } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";

export default function Dashboard() {
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useGetMe({
    query: { queryKey: getGetMeQueryKey() },
  });

  const { mutate: logoutMutate } = useLogout({
    mutation: {
      onSuccess: () => {
        localStorage.removeItem("auth_token");
        queryClient.clear();
        navigate("/");
      },
    },
  });

  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem("auth_token");
      navigate("/login");
    }
  }, [error, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const cards = [
    { icon: User, label: "Profile", value: user.fullName, sub: user.email, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
    { icon: Code2, label: "Skills", value: "14", sub: "Technical skills", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
    { icon: FolderOpen, label: "Projects", value: "5+", sub: "Completed projects", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  ];

  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Dashboard</p>
        <h1 className="text-4xl font-bold text-foreground">
          Welcome, <span className="text-primary">{user.fullName.split(" ")[0]}</span>
        </h1>
        <p className="text-muted-foreground mt-1">Here's your portfolio overview.</p>
      </motion.div>

      {/* Summary cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`p-6 rounded-2xl bg-card border ${card.border} hover:shadow-xl transition-all`}
          >
            <div className={`w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-4`}>
              <card.icon size={20} className={card.color} />
            </div>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-1">{card.label}</p>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
            <p className="text-sm text-muted-foreground mt-0.5 truncate">{card.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="p-6 rounded-2xl bg-card border border-border/50"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <ExternalLink size={14} /> View Portfolio
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
          >
            <FolderOpen size={14} /> My Projects
          </Link>
          <button
            onClick={() => logoutMutate()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
}
