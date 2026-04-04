import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { mutate, isPending } = useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: (err: unknown) => {
        const msg = (err as { data?: { error?: string } })?.data?.error ?? "Failed to send message. Please try again.";
        toast.error(msg);
      },
    },
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email format";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate({ data: form });
  };

  return (
    <div className="py-20 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold">Contact <span className="text-primary">Me</span></h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Have an opportunity or want to collaborate? Drop a message and I'll respond promptly.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your full name"
              className={`w-full px-4 py-3 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.name ? "border-destructive" : "border-border focus:border-primary/60"}`}
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.email ? "border-destructive" : "border-border focus:border-primary/60"}`}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about the opportunity or project..."
              className={`w-full px-4 py-3 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none ${errors.message ? "border-destructive" : "border-border focus:border-primary/60"}`}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            {isPending ? "Sending..." : <><Send size={16} /> Send Message</>}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-5">
            <h3 className="text-lg font-bold text-foreground">Connect Directly</h3>
            {[
              { icon: Mail, label: "Email", value: "sanketmatre@email.com", href: "mailto:sanketmatre@email.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sanket-matre-0126a2296", href: "https://www.linkedin.com/in/sanket-matre-0126a2296/" },
              { icon: Github, label: "GitHub", value: "github.com/sanketmatre", href: "https://github.com/sanketmatre" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="/api/resume/download"
            download="matre_sanket_resume_page-0001.jpg"
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold hover:border-primary/40 hover:text-primary hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}
