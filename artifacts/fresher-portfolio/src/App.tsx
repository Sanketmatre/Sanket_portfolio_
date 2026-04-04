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
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
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
        <footer className="border-t border-border/50 py-8 relative z-10 mt-auto">
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sanket Matre. All rights reserved.</p>
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
