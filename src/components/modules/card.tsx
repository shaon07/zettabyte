import { cn } from "@/lib/utils";
import type React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

const paddingVariants = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-gray-200 shadow-sm",
        paddingVariants[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
