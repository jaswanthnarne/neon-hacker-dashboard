
import { useState } from "react";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Sidebar } from "@/components/layout/sidebar";
import { FileCode, Terminal, Copy, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Payloads = () => {
  const [payload, setPayload] = useState("");
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(payload);
    toast({
      title: "Payload copied",
      description: "The payload has been copied to your clipboard",
    });
  };

  return (
    <div className="flex min-h-screen bg-cyber-background">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="container py-8">
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-cyber-primary">Payload Generator</span>
              <StatusIndicator status="online" />
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight animate-text-reveal">
              Create <span className="text-cyber-primary cyber-glitch">Advanced Payloads</span>
            </h1>
            <p className="mt-2 text-cyber-foreground/60 animate-fade-in">
              Generate and manage your custom payloads with advanced options
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Payload Generator Panel */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <Terminal className="h-5 w-5 text-cyber-primary" />
                Generate Payload
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-cyber-foreground/80">Payload Type</label>
                  <select className="w-full mt-1 bg-cyber-secondary border border-cyber-border rounded-md p-2">
                    <option>PowerShell</option>
                    <option>Python</option>
                    <option>Bash</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-cyber-foreground/80">Custom Options</label>
                  <Input 
                    type="text" 
                    placeholder="Enter custom options"
                    className="cyber-border mt-1"
                  />
                </div>
                <Button 
                  className="w-full bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20 animate-cyber-pulse"
                >
                  <FileCode className="h-4 w-4" />
                  Generate
                </Button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold">Output</h2>
              <Textarea 
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                placeholder="Generated payload will appear here..."
                className="min-h-[200px] bg-cyber-secondary/50 cyber-border font-mono"
              />
              <div className="mt-4 flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 cyber-border"
                  onClick={handleCopy}
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 cyber-border"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            {/* Recent Payloads */}
            <div className="cyber-panel md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Payloads</h2>
                <Button variant="outline" className="cyber-border">
                  <Plus className="h-4 w-4" />
                  New Payload
                </Button>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-3 rounded bg-cyber-secondary/50 cyber-border animate-fade-in"
                  >
                    <div className="flex items-center gap-3">
                      <FileCode className="h-5 w-5 text-cyber-primary" />
                      <span>Payload #{i}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payloads;
