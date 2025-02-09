
import { useState } from "react";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Sidebar } from "@/components/layout/sidebar";
import { Play, Square, Wifi, Settings, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Listeners = () => {
  const [port, setPort] = useState("4444");
  const { toast } = useToast();

  const handleStartListener = () => {
    toast({
      title: "Listener started",
      description: `Listening on port ${port}`,
    });
  };

  return (
    <div className="flex min-h-screen bg-cyber-background">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="container py-8">
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-cyber-primary">Active Listeners</span>
              <StatusIndicator status="online" />
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight animate-text-reveal">
              Manage <span className="text-cyber-primary cyber-glitch">Network Listeners</span>
            </h1>
            <p className="mt-2 text-cyber-foreground/60 animate-fade-in">
              Create and monitor network listeners for incoming connections
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* New Listener Panel */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <Plus className="h-5 w-5 text-cyber-primary" />
                Create Listener
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-cyber-foreground/80">Port</label>
                  <Input 
                    type="text" 
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    className="cyber-border mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-cyber-foreground/80">Protocol</label>
                  <select className="w-full mt-1 bg-cyber-secondary border border-cyber-border rounded-md p-2">
                    <option>TCP</option>
                    <option>UDP</option>
                    <option>HTTP</option>
                  </select>
                </div>
                <Button 
                  onClick={handleStartListener}
                  className="w-full bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20 animate-cyber-pulse"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Listener
                </Button>
              </div>
            </div>

            {/* Active Listeners */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <Wifi className="h-5 w-5 text-cyber-primary" />
                Active Listeners
              </h2>
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-3 rounded bg-cyber-secondary/50 cyber-border animate-fade-in"
                  >
                    <div className="flex items-center gap-3">
                      <StatusIndicator status="online" />
                      <div>
                        <div className="font-medium">Port {4444 + i}</div>
                        <div className="text-sm text-cyber-foreground/60">TCP</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Square className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Panel */}
            <div className="cyber-panel md:col-span-2">
              <h2 className="mb-4 text-lg font-semibold">Network Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded bg-cyber-secondary/50 cyber-border">
                  <div className="text-sm text-cyber-foreground/60">Total Connections</div>
                  <div className="text-2xl font-bold text-cyber-primary">1,234</div>
                </div>
                <div className="p-4 rounded bg-cyber-secondary/50 cyber-border">
                  <div className="text-sm text-cyber-foreground/60">Active Sessions</div>
                  <div className="text-2xl font-bold text-cyber-primary">42</div>
                </div>
                <div className="p-4 rounded bg-cyber-secondary/50 cyber-border">
                  <div className="text-sm text-cyber-foreground/60">Data Transferred</div>
                  <div className="text-2xl font-bold text-cyber-primary">2.1 GB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Listeners;
