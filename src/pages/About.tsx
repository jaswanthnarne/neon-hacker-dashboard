
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Shield, Bug, Globe, Terminal, Users, BookOpen, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const advantages = [
    {
      icon: Globe,
      title: "Web-Based UI",
      description: "No need for complex terminal commands. Just click and control."
    },
    {
      icon: Users,
      title: "Agent Management",
      description: "Easily view, interact with, and control multiple agents from the panel."
    },
    {
      icon: Terminal,
      title: "Interactive Shell",
      description: "Real-time execution of commands with instant response."
    }
  ];

  const disadvantages = [
    {
      icon: Shield,
      title: "Not Fully Stealthy",
      description: "PowerShell payloads may trigger advanced AV/EDR solutions."
    },
    {
      icon: Bug,
      title: "No Built-in Encryption",
      description: "Commands and responses are not encrypted by default."
    },
    {
      icon: AlertTriangle,
      title: "Limited Features",
      description: "No automated privilege escalation, persistence, or obfuscation."
    }
  ];

  return (
    <div className="flex min-h-screen bg-cyber-background">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="container py-8">
          {/* Header Section */}
          <header className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <h1 className="text-4xl font-bold tracking-tight">
              About <span className="text-cyber-primary cyber-glitch">Kira C2</span>
            </h1>
            <p className="mt-4 text-cyber-foreground/60 max-w-3xl animate-text-reveal">
              A web-based Command and Control (C2) framework designed for local red teaming and malware research.
              Integrates with HoaxShell to provide a modern web interface for managing compromised machines.
            </p>
          </header>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Framework Overview */}
            <Card className="cyber-panel col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-cyber-primary" />
                  Framework Overview
                </CardTitle>
                <CardDescription>
                  Unlike traditional terminal-based C2 frameworks, Kira C2 offers a visually rich experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="text-cyber-foreground/80">
                    Kira C2 is built for researchers and red teamers who prefer a modern, intuitive interface
                    over traditional command-line tools. It's specifically designed for use in controlled,
                    local environments like VirtualBox for safe testing and research.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advantages Section */}
            <Card className="cyber-panel opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
              <CardHeader>
                <CardTitle className="text-cyber-primary">Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded bg-cyber-secondary/50 cyber-border animate-fade-in">
                      <advantage.icon className="h-5 w-5 text-cyber-primary mt-1" />
                      <div>
                        <h3 className="font-medium">{advantage.title}</h3>
                        <p className="text-sm text-cyber-foreground/60">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Disadvantages Section */}
            <Card className="cyber-panel opacity-0 animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
              <CardHeader>
                <CardTitle className="text-red-500">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {disadvantages.map((disadvantage, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded bg-cyber-secondary/50 cyber-border animate-fade-in">
                      <disadvantage.icon className="h-5 w-5 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-medium">{disadvantage.title}</h3>
                        <p className="text-sm text-cyber-foreground/60">{disadvantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Version Info */}
            <Card className="cyber-panel col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
              <CardContent className="py-6">
                <div className="text-center">
                  <p className="text-sm text-cyber-foreground/60">Current Version</p>
                  <p className="text-2xl font-bold text-cyber-primary cyber-glitch mt-1">v1.0.0</p>
                  <Button 
                    className="mt-4 bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20 animate-cyber-pulse"
                    onClick={() => window.open("https://github.com/yourusername/kira-c2", "_blank")}
                  >
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
