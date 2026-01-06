import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ActivityCard } from "@/components/cards/ActivityCard";
import { Calendar, Search, Download, Filter } from "lucide-react";
import { useState } from "react";

const AdminHistory = () => {
  const [dateFilter, setDateFilter] = useState("all");

  const activities = [
    { date: "6 Jan 2024", time: "14:32", lockerId: "A-02", action: "simpan" as const, user: "Ahmad Fadil" },
    { date: "6 Jan 2024", time: "14:15", lockerId: "B-02", action: "ambil" as const, user: "Dewi Lestari" },
    { date: "6 Jan 2024", time: "13:45", lockerId: "C-02", action: "simpan" as const, user: "Eko Prasetyo" },
    { date: "6 Jan 2024", time: "12:30", lockerId: "A-03", action: "simpan" as const, user: "Siti Rahayu" },
    { date: "6 Jan 2024", time: "11:00", lockerId: "B-04", action: "ambil" as const, user: "Budi Santoso" },
    { date: "5 Jan 2024", time: "17:45", lockerId: "A-01", action: "ambil" as const, user: "Ahmad Fadil" },
    { date: "5 Jan 2024", time: "16:30", lockerId: "C-01", action: "simpan" as const, user: "Fitri Handayani" },
    { date: "5 Jan 2024", time: "15:15", lockerId: "B-03", action: "ambil" as const, user: "Dewi Lestari" },
    { date: "5 Jan 2024", time: "14:00", lockerId: "A-04", action: "simpan" as const, user: "Eko Prasetyo" },
    { date: "5 Jan 2024", time: "12:45", lockerId: "B-01", action: "ambil" as const, user: "Siti Rahayu" },
  ];

  // Group by date
  const groupedActivities = activities.reduce((groups, activity) => {
    if (!groups[activity.date]) {
      groups[activity.date] = [];
    }
    groups[activity.date].push(activity);
    return groups;
  }, {} as Record<string, typeof activities>);

  return (
    <DashboardLayout type="admin" title="Riwayat Aktivitas" subtitle="Log semua aktivitas penggunaan locker">
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari berdasarkan user atau locker..."
            className="input-field pl-12"
          />
        </div>
        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="input-field w-full sm:w-48"
        >
          <option value="all">Semua waktu</option>
          <option value="today">Hari ini</option>
          <option value="week">Minggu ini</option>
          <option value="month">Bulan ini</option>
        </select>
        <button className="btn-secondary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold">{activities.length}</p>
          <p className="text-sm text-muted-foreground">Total Log</p>
        </div>
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-primary">{activities.filter(a => a.action === "simpan").length}</p>
          <p className="text-sm text-muted-foreground">Simpan</p>
        </div>
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-success">{activities.filter(a => a.action === "ambil").length}</p>
          <p className="text-sm text-muted-foreground">Ambil</p>
        </div>
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-accent">{new Set(activities.map(a => a.user)).size}</p>
          <p className="text-sm text-muted-foreground">User Aktif</p>
        </div>
      </div>

      {/* Activity list */}
      <div className="space-y-8">
        {Object.entries(groupedActivities).map(([date, items]) => (
          <div key={date} className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">{date}</h3>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">{items.length} aktivitas</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-3 stagger-children">
              {items.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">Menampilkan 1-10 dari 156 aktivitas</p>
        <div className="flex gap-2">
          <button className="btn-secondary" disabled>Sebelumnya</button>
          <button className="btn-primary">Selanjutnya</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminHistory;
