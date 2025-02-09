
import { useState } from "react";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Sidebar } from "@/components/layout/sidebar";
import { Users, Terminal, Shield, Skull, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Connections = () => {
  const [command, setCommand] = useState("");
  const { toast } = useToast();

  const handleSendCommand = () => {
    if (!command.trim()) return;
    
    toast({
      title: "Command sent",
      description: `Executing: ${command}`,
    });
    setCommand("");
  };

  return (
    <div className="flex min-h-screen bg-cyber-background">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="container py-8">
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-cyber-primary">Active Connections</span>
              <StatusIndicator status="online" />
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight animate-text-reveal">
              Monitor <span className="text-cyber-primary cyber-glitch">Connected Agents</span>
            </h1>
            <p className="mt-2 text-cyber-foreground/60 animate-fade-in">
              View and manage all connected agents and sessions
            </p>
          </header>

          <div className="grid gap-6">
            {/* Active Connections */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-cyber-primary" />
                Connected Agents
              </h2>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-4 rounded bg-cyber-secondary/50 cyber-border animate-fade-in"
                  >
                    <div className="flex items-center gap-4">
                      <StatusIndicator status="online" />
                      <div>
                        <div className="font-medium">Agent #{i}</div>
                        <div className="text-sm text-cyber-foreground/60">
                          192.168.1.{100 + i} • Windows 10 • Admin
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Terminal className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Shield className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Skull className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Command Console */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <Terminal className="h-5 w-5 text-cyber-primary" />
                Command Console
              </h2>
              <div className="space-y-4">
                <div className="font-mono text-sm bg-cyber-secondary/30 p-4 rounded cyber-border min-h-[200px]">
                  <div className="text-cyber-primary">$ System initialized</div>
                  <div className="text-cyber-foreground/60">$ Ready for commands...</div>
                </div>
                <div className="flex gap-2">
                  <Input 
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="Enter command..."
                    className="cyber-border font-mono"
                    onKeyDown={(e) => e.key === "Enter" && handleSendCommand()}
                  />
                  <Button 
                    onClick={handleSendCommand}
                    className="bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20 animate-cyber-pulse"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Connection Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="cyber-panel">
                <div className="text-sm text-cyber-foreground/60">Total Agents</div>
                <div className="text-3xl font-bold text-cyber-primary mt-2">12</div>
              </div>
              <div className="cyber-panel">
                <div className="text-sm text-cyber-foreground/60">Active Sessions</div>
                <div className="text-3xl font-bold text-cyber-primary mt-2">3</div>
              </div>
              <div className="cyber-panel">
                <div className="text-sm text-cyber-foreground/60">Commands Sent</div>
                <div className="text-3xl font-bold text-cyber-primary mt-2">156</div>
              </div>
              <div className="cyber-panel">
                <div className="text-sm text-cyber-foreground/60">Success Rate</div>
                <div className="text-3xl font-bold text-cyber-primary mt-2">98%</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Connections;
