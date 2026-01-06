import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "../ThemeToggle";

interface DashboardLayoutProps {
  children: ReactNode;
  type: "user" | "admin";
  title: string;
  subtitle?: string;
}

export const DashboardLayout = ({ children, type, title, subtitle }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar type={type} />
      <MobileNav type={type} />
      
      <main className="flex-1 lg:p-8 p-4 pt-20 lg:pt-8 pb-24 lg:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
              {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {type === "user" ? "U" : "A"}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">
                    {type === "user" ? "Ahmad Fadil" : "Admin"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {type === "user" ? "user@lockify.io" : "admin@lockify.io"}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="page-enter">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
