import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Search, Plus, Settings, Lock, Unlock, Wrench } from "lucide-react";
import { useState } from "react";

const AdminLocker = () => {
  const [filter, setFilter] = useState<"all" | "available" | "in-use" | "maintenance">("all");

  const lockers = [
    { id: "A-01", zone: "A", status: "available" as const, user: null, lastActivity: "2 jam lalu" },
    { id: "A-02", zone: "A", status: "in-use" as const, user: "Ahmad Fadil", lastActivity: "30 menit lalu" },
    { id: "A-03", zone: "A", status: "in-use" as const, user: "Siti Rahayu", lastActivity: "1 jam lalu" },
    { id: "A-04", zone: "A", status: "available" as const, user: null, lastActivity: "5 jam lalu" },
    { id: "A-05", zone: "A", status: "maintenance" as const, user: null, lastActivity: "1 hari lalu" },
    { id: "B-01", zone: "B", status: "available" as const, user: null, lastActivity: "3 jam lalu" },
    { id: "B-02", zone: "B", status: "in-use" as const, user: "Dewi Lestari", lastActivity: "15 menit lalu" },
    { id: "B-03", zone: "B", status: "available" as const, user: null, lastActivity: "4 jam lalu" },
    { id: "C-01", zone: "C", status: "available" as const, user: null, lastActivity: "6 jam lalu" },
    { id: "C-02", zone: "C", status: "in-use" as const, user: "Eko Prasetyo", lastActivity: "45 menit lalu" },
  ];

  const filteredLockers = lockers.filter((locker) => {
    if (filter === "all") return true;
    return locker.status === filter;
  });

  const stats = {
    total: lockers.length,
    available: lockers.filter((l) => l.status === "available").length,
    inUse: lockers.filter((l) => l.status === "in-use").length,
    maintenance: lockers.filter((l) => l.status === "maintenance").length,
  };

  const zones = ["A", "B", "C"];

  return (
    <DashboardLayout type="admin" title="Manajemen Locker" subtitle="Kelola semua unit locker">
      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari locker..."
            className="input-field pl-12"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["all", "available", "in-use", "maintenance"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as typeof filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {f === "all" ? "Semua" : f === "available" ? "Tersedia" : f === "in-use" ? "Digunakan" : "Maintenance"}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="card-elevated p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{stats.total}</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
        <div className="card-elevated p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-success">{stats.available}</p>
              <p className="text-sm text-muted-foreground">Tersedia</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <Unlock className="w-5 h-5 text-success" />
            </div>
          </div>
        </div>
        <div className="card-elevated p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-destructive">{stats.inUse}</p>
              <p className="text-sm text-muted-foreground">Digunakan</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-destructive" />
            </div>
          </div>
        </div>
        <div className="card-elevated p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-warning">{stats.maintenance}</p>
              <p className="text-sm text-muted-foreground">Maintenance</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-warning" />
            </div>
          </div>
        </div>
      </div>

      {/* Locker grid by zone */}
      {zones.map((zone) => {
        const zoneLockers = filteredLockers.filter((l) => l.zone === zone);
        if (zoneLockers.length === 0) return null;

        return (
          <div key={zone} className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Zona {zone}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 stagger-children">
              {zoneLockers.map((locker) => (
                <div
                  key={locker.id}
                  className={`card-elevated p-4 transition-all duration-200 hover:scale-105 cursor-pointer ${
                    locker.status === "available"
                      ? "border-success/30"
                      : locker.status === "in-use"
                      ? "border-destructive/30"
                      : "border-warning/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">{locker.id}</span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        locker.status === "available"
                          ? "bg-success animate-pulse"
                          : locker.status === "in-use"
                          ? "bg-destructive"
                          : "bg-warning"
                      }`}
                    />
                  </div>
                  <StatusBadge status={locker.status} showPulse={locker.status === "available"} />
                  {locker.user && (
                    <p className="text-xs text-muted-foreground mt-2 truncate">{locker.user}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">{locker.lastActivity}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="card-elevated p-4 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
          <span className="text-sm">Tersedia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm">Digunakan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-warning" />
          <span className="text-sm">Maintenance</span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminLocker;
