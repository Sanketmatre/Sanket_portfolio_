import { useEffect } from "react";
import { Router as WouterRouter, Route, Switch, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Certifications from "@/pages/Certifications";
import CodingProfiles from "@/pages/CodingProfiles";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function AppInner() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  return (
    <>
      <div className="min-h-[100dvh] flex flex-col relative overflow-hidden text-foreground bg-background font-sans selection:bg-primary/30 selection:text-primary">

        {/* === PROFESSIONAL BACKGROUND LAYERS === */}

        {/* Layer 1: Dot grid */}
        <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none z-0" />

        {/* Layer 2: Aurora orb — top left (blue) */}
        <div
          className="aurora fixed pointer-events-none z-0"
          style={{
            top: "-15%",
            left: "-10%",
            width: "70vw",
            height: "70vh",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Layer 3: Aurora orb — bottom right (violet) */}
        <div
          className="aurora fixed pointer-events-none z-0"
          style={{
            bottom: "-20%",
            right: "-10%",
            width: "65vw",
            height: "65vh",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.07) 40%, transparent 70%)",
            filter: "blur(80px)",
            animationDelay: "-3s",
          }}
        />

        {/* Layer 4: Aurora orb — center top (cyan accent) */}
        <div
          className="aurora fixed pointer-events-none z-0"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "50vw",
            height: "40vh",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(59,130,246,0.10) 0%, transparent 65%)",
            filter: "blur(100px)",
            animationDelay: "-5s",
          }}
        />

        {/* Layer 5: Top edge gradient bar */}
        <div
          className="fixed top-0 left-0 right-0 h-px pointer-events-none z-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(124,58,237,0.5) 70%, transparent 100%)",
          }}
        />

        {/* Layer 6: Radial vignette for depth */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse 120% 80% at 50% 0%, transparent 40%, rgba(8,15,35,0.7) 100%)",
          }}
        />

        <Navbar />
        <main className="flex-1 flex flex-col relative z-10 pt-20">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/certifications" component={Certifications} />
            <Route path="/coding-profiles" component={CodingProfiles} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer className="relative z-10 mt-auto py-8 overflow-hidden">
          {/* footer top gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 25%, rgba(124,58,237,0.4) 75%, transparent 100%)",
            }}
          />
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60" />
              &copy; {new Date().getFullYear()} Sanket Matre. Built with React &amp; passion.
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/60" />
            </p>
          </div>
        </footer>
      </div>
      <Toaster theme="dark" />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppInner />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
