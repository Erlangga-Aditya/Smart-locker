interface StatusBadgeProps {
  status: "online" | "offline" | "available" | "in-use" | "maintenance";
  label?: string;
  showPulse?: boolean;
}

const statusStyles = {
  online: "bg-success/10 text-success border-success/20",
  offline: "bg-destructive/10 text-destructive border-destructive/20",
  available: "bg-success/10 text-success border-success/20",
  "in-use": "bg-destructive/10 text-destructive border-destructive/20",
  maintenance: "bg-warning/10 text-warning border-warning/20",
};

const statusLabels = {
  online: "Online",
  offline: "Offline",
  available: "Tersedia",
  "in-use": "Digunakan",
  maintenance: "Maintenance",
};

export const StatusBadge = ({ status, label, showPulse = false }: StatusBadgeProps) => {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
      {showPulse && (
        <span className={`w-2 h-2 rounded-full ${
          status === "online" || status === "available" ? "bg-success" :
          status === "offline" || status === "in-use" ? "bg-destructive" : "bg-warning"
        } ${(status === "online" || status === "available") ? "animate-pulse" : ""}`} />
      )}
      {label || statusLabels[status]}
    </span>
  );
};
