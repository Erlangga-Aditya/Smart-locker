import { Package, PackageOpen } from "lucide-react";

interface ActivityCardProps {
  date: string;
  time: string;
  lockerId: string;
  action: "simpan" | "ambil";
  user?: string;
}

export const ActivityCard = ({ date, time, lockerId, action, user }: ActivityCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-200">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        action === "simpan" ? "bg-primary/10" : "bg-success/10"
      }`}>
        {action === "simpan" ? (
          <Package className="w-6 h-6 text-primary" />
        ) : (
          <PackageOpen className="w-6 h-6 text-success" />
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">Locker {lockerId}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            action === "simpan" ? "bg-primary/10 text-primary" : "bg-success/10 text-success"
          }`}>
            {action === "simpan" ? "Simpan" : "Ambil"}
          </span>
        </div>
        {user && <p className="text-sm text-muted-foreground">{user}</p>}
        <p className="text-xs text-muted-foreground">{date} • {time}</p>
      </div>
    </div>
  );
};
