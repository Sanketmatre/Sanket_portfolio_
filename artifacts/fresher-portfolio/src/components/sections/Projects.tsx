import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const projects = [
  {
    title: "Nexus Dashboard",
    description: "A comprehensive SaaS dashboard for monitoring complex systems. Features real-time data visualization, user management, and detailed analytics reporting with dark mode support.",
    image: project1,
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    github: "#",
    live: "#"
  },
  {
    title: "Aura Commerce",
    description: "A headless e-commerce storefront built for performance. Includes a custom cart implementation, dynamic product filtering, and Stripe integration for seamless checkout.",
    image: project2,
    tech: ["Next.js", "Zustiand", "Stripe", "PostgreSQL", "Prisma"],
    github: "#",
    live: "#"
  },
  {
    title: "Pulse Analytics",
    description: "Mobile-first analytics application providing insights on the go. Built with offline capabilities and a responsive design that feels like a native app.",
    image: project3,
    tech: ["React Native", "Expo", "GraphQL", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30 border-y border-border/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects that showcase my ability to build complete, scalable applications from the ground up.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
            View GitHub Profile <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden border border-border/50 bg-secondary/20">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary font-mono text-sm tracking-wider uppercase">Project {String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="text-3xl font-bold text-foreground mt-2">{project.title}</h3>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border shadow-lg relative z-20 -mx-0 lg:-mx-10 my-4 text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-foreground px-2 py-1 bg-secondary rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                    aria-label="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live}
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                    aria-label="View Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
