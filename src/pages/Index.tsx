
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Sidebar } from "@/components/layout/sidebar";
import { Terminal } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-cyber-background">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="container py-8">
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-cyber-primary">System Status</span>
              <StatusIndicator status="online" />
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight animate-text-reveal">
              Welcome to <span className="text-cyber-primary">KIRA</span>
            </h1>
            <p className="mt-2 text-cyber-foreground/60">
              Advanced Command & Control Framework
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Actions Panel */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full rounded bg-cyber-primary/10 px-4 py-2 text-cyber-primary transition-colors hover:bg-cyber-primary/20 animate-cyber-pulse">
                  <span className="flex items-center justify-center gap-2">
                    <Terminal className="h-4 w-4" />
                    Generate Payload
                  </span>
                </button>
              </div>
            </div>

            {/* Active Sessions */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold">Active Sessions</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded bg-cyber-muted p-2">
                  <span>Agent #1337</span>
                  <StatusIndicator status="online" className="h-2 w-2" />
                </div>
              </div>
            </div>

            {/* Recent Logs */}
            <div className="cyber-panel">
              <h2 className="mb-4 text-lg font-semibold">Recent Logs</h2>
              <div className="space-y-2 text-sm">
                <div className="rounded bg-cyber-muted p-2">
                  <span className="text-cyber-primary">[INFO]</span> System initialized
                </div>
                <div className="rounded bg-cyber-muted p-2">
                  <span className="text-yellow-500">[WARN]</span> Connection attempt from unknown IP
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
