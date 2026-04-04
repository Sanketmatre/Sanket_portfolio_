import { motion } from "framer-motion";
import avatar from "@/assets/avatar.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card relative z-10">
              <img 
                src={avatar} 
                alt="Alex Johnson" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-muted-foreground/30 to-transparent background-size-[4px_4px] opacity-50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a recent Computer Science graduate with a profound passion for creating digital experiences that are both beautiful and functionally robust. My journey began with curiosity about how things work on the web, which quickly evolved into a dedicated pursuit of software engineering.
              </p>
              <p>
                What sets me apart is my approach to problem-solving. I don't just write code; I architect solutions. I am deeply interested in system design, performance optimization, and writing clean, maintainable code that teams can scale.
              </p>
              <p>
                When I'm not debugging or optimizing React components, you can find me exploring open-source projects, reading about the latest web standards, or experimenting with new frameworks to stay ahead of the curve.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Problem Solver", desc: "Analytical mindset" },
                { label: "Fast Learner", desc: "Adaptable to new tech" },
                { label: "Team Player", desc: "Collaborative & communicative" },
                { label: "Detail Oriented", desc: "Pixel-perfect execution" }
              ].map((trait, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border/50 flex flex-col gap-2">
                  <span className="text-primary text-xl font-bold font-mono">0{i + 1}</span>
                  <span className="font-semibold text-foreground">{trait.label}</span>
                  <span className="text-xs text-muted-foreground">{trait.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
