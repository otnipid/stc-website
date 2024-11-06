"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Mic, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/episodes", label: "Episodes" },
    { href: "/about", label: "About" },
    { href: "/subscribe", label: "Subscribe" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-8">
          <Mic className="h-6 w-6" />
          <span className="text-lg font-bold">Tech Insights</span>
        </div>
        <div className="flex items-center justify-between flex-1">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}