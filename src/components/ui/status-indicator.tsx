
import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "offline" | "warning";
  pulse?: boolean;
  className?: string;
}

export const StatusIndicator = ({ status, pulse = true, className }: StatusIndicatorProps) => {
  return (
    <span
      className={cn(
        "relative flex h-3 w-3",
        {
          "before:animate-ping before:absolute before:h-full before:w-full before:rounded-full before:opacity-75": pulse,
        },
        className
      )}
    >
      <span
        className={cn("absolute inline-flex h-full w-full rounded-full", {
          "bg-green-500": status === "online",
          "bg-red-500": status === "offline",
          "bg-yellow-500": status === "warning",
        })}
      />
    </span>
  );
};
