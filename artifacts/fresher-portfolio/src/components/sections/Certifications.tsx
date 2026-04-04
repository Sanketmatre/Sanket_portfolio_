import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    link: "#"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "Oct 2023",
    link: "#"
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "Aug 2023",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-card/30 border-y border-border/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Continuous learning and professional validation of my technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-muted-foreground font-medium mb-1">{cert.issuer}</p>
              <p className="text-sm font-mono text-muted-foreground/80 mb-6">{cert.date}</p>
              
              <div className="mt-auto pt-4 border-t border-border/50">
                <a 
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View Credential <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
