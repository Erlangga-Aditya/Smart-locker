import { Lock, Unlock, Clock } from "lucide-react";

interface LockerCardProps {
  id: string;
  status: "available" | "in-use" | "maintenance";
  user?: string;
  lastActivity?: string;
  onAction?: () => void;
}

const statusConfig = {
  available: {
    label: "Tersedia",
    className: "status-available",
    icon: Unlock,
  },
  "in-use": {
    label: "Digunakan",
    className: "status-in-use",
    icon: Lock,
  },
  maintenance: {
    label: "Maintenance",
    className: "status-maintenance",
    icon: Clock,
  },
};

export const LockerCard = ({ id, status, user, lastActivity, onAction }: LockerCardProps) => {
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className={`locker-card ${status === "available" ? "available" : status === "in-use" ? "in-use" : ""}`}>
      {/* Status indicator */}
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
        status === "available" ? "bg-success" : 
        status === "in-use" ? "bg-destructive" : "bg-warning"
      } ${status !== "maintenance" ? "pulse-dot" : ""} ${status === "available" ? "online" : status === "in-use" ? "offline" : ""}`} />

      {/* Locker icon */}
      <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center ${
        status === "available" ? "bg-success/10" : 
        status === "in-use" ? "bg-destructive/10" : "bg-warning/10"
      }`}>
        <StatusIcon className={`w-8 h-8 ${
          status === "available" ? "text-success" : 
          status === "in-use" ? "text-destructive" : "text-warning"
        }`} />
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold mb-2">Locker {id}</h3>
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${config.className}`}>
        {config.label}
      </span>

      {user && (
        <p className="text-sm text-muted-foreground mt-3">
          Pengguna: {user}
        </p>
      )}

      {lastActivity && (
        <p className="text-xs text-muted-foreground mt-1">
          Aktivitas: {lastActivity}
        </p>
      )}

      {/* Action button */}
      {status === "available" && onAction && (
        <button 
          onClick={onAction}
          className="btn-primary w-full mt-4 text-sm"
        >
          Gunakan Locker
        </button>
      )}

      {status === "in-use" && onAction && (
        <button 
          onClick={onAction}
          className="btn-secondary w-full mt-4 text-sm"
        >
          Buka Locker
        </button>
      )}
    </div>
  );
};
