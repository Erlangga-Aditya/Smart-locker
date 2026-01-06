import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LockerCard } from "@/components/cards/LockerCard";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const UserLocker = () => {
  const [filter, setFilter] = useState<"all" | "available" | "in-use">("all");
  const [search, setSearch] = useState("");

  const lockers = [
    { id: "A-01", status: "available" as const },
    { id: "A-02", status: "available" as const },
    { id: "A-03", status: "in-use" as const, user: "Anda", lastActivity: "Hari ini, 09:30" },
    { id: "A-04", status: "available" as const },
    { id: "A-05", status: "maintenance" as const },
    { id: "B-01", status: "in-use" as const, user: "User lain", lastActivity: "2 jam lalu" },
    { id: "B-02", status: "available" as const },
    { id: "B-03", status: "available" as const },
    { id: "B-04", status: "in-use" as const, user: "Anda", lastActivity: "Kemarin, 14:15" },
    { id: "B-05", status: "available" as const },
    { id: "C-01", status: "available" as const },
    { id: "C-02", status: "in-use" as const, user: "User lain", lastActivity: "30 menit lalu" },
  ];

  const filteredLockers = lockers.filter((locker) => {
    const matchesFilter = filter === "all" || locker.status === filter;
    const matchesSearch = locker.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    available: lockers.filter((l) => l.status === "available").length,
    inUse: lockers.filter((l) => l.status === "in-use").length,
    maintenance: lockers.filter((l) => l.status === "maintenance").length,
  };

  return (
    <DashboardLayout type="user" title="Akses Locker" subtitle="Pilih dan kelola locker Anda">
      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari locker (contoh: A-01)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-12"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Semua ({lockers.length})
          </button>
          <button
            onClick={() => setFilter("available")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "available" ? "bg-success text-success-foreground" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Tersedia ({stats.available})
          </button>
          <button
            onClick={() => setFilter("in-use")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "in-use" ? "bg-destructive text-destructive-foreground" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Digunakan ({stats.inUse})
          </button>
        </div>
      </div>

      {/* Status summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-success/10 border border-success/20 text-center">
          <p className="text-2xl font-bold text-success">{stats.available}</p>
          <p className="text-sm text-success/80">Tersedia</p>
        </div>
        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-center">
          <p className="text-2xl font-bold text-destructive">{stats.inUse}</p>
          <p className="text-sm text-destructive/80">Digunakan</p>
        </div>
        <div className="p-4 rounded-xl bg-warning/10 border border-warning/20 text-center">
          <p className="text-2xl font-bold text-warning">{stats.maintenance}</p>
          <p className="text-sm text-warning/80">Maintenance</p>
        </div>
      </div>

      {/* Locker grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 stagger-children">
        {filteredLockers.map((locker) => (
          <LockerCard
            key={locker.id}
            id={locker.id}
            status={locker.status}
            user={locker.user}
            lastActivity={locker.lastActivity}
            onAction={() => {}}
          />
        ))}
      </div>

      {filteredLockers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Tidak ada locker yang ditemukan</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default UserLocker;
