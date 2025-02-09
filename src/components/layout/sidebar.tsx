
import { NavLink } from "@/components/ui/nav-link";
import { Monitor, Server, Terminal, Users, Info } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Monitor, label: "Dashboard" },
    { to: "/payloads", icon: Server, label: "Payloads" },
    { to: "/listeners", icon: Terminal, label: "Listeners" },
    { to: "/connections", icon: Users, label: "Connections" },
    { to: "/about", icon: Info, label: "About" },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-cyber-border bg-cyber-background/80 backdrop-blur-sm">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-bold tracking-wider text-cyber-primary animate-glow">
            KIRA
          </h1>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              active={location.pathname === to}
              className="flex items-center gap-3 rounded-lg px-3 py-2"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
