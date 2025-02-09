
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cyber-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold tracking-tighter text-cyber-primary animate-glow">404</h1>
        <p className="mt-4 text-xl text-cyber-foreground/60 animate-text-reveal">
          Signal Lost: Page Not Found
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded bg-cyber-primary/10 px-6 py-2 text-cyber-primary transition-colors hover:bg-cyber-primary/20"
        >
          Return to Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
