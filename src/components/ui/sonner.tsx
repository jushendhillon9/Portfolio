"use client";

import { useTheme } from "next-themes";
import { Toaster as SonnerToaster } from "sonner";
import type { ToasterProps } from "sonner";
import type { CSSProperties } from "react";

// Allow CSS custom properties like `--normal-bg`
type CSSVars = Partial<Record<`--${string}`, string>>;

export function Toaster(props: ToasterProps) {
  const { theme } = useTheme();

  const resolvedTheme: "light" | "dark" | "system" =
    theme === "light" || theme === "dark" || theme === "system" ? theme : "system";

  const style: CSSProperties & CSSVars = {
    "--normal-bg": "var(--popover)",
    "--normal-text": "var(--popover-foreground)",
    "--normal-border": "var(--border)",
  };

  return (
    <SonnerToaster
      theme={resolvedTheme}
      className="toaster group"
      style={style}
      {...props}
    />
  );
}
