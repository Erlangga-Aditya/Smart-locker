import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconColor?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  iconColor = "text-primary"
}: StatsCardProps) => {
  return (
    <div className="stats-card animate-fade-in-up">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
          {trend && (
            <p className={`text-sm mt-2 ${trend.isPositive ? "text-success" : "text-destructive"}`}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% dari kemarin
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
