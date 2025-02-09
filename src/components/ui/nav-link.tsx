
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  active?: boolean;
}

export const NavLink = ({ to, active, className, children, ...props }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-cyber-primary",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-[2px]",
        "before:bg-cyber-primary before:opacity-0 before:transition-opacity hover:before:opacity-100",
        active && "text-cyber-primary before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
