import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ActivityCard } from "@/components/cards/ActivityCard";
import { Calendar, Search, Filter } from "lucide-react";
import { useState } from "react";

const UserHistory = () => {
  const [dateFilter, setDateFilter] = useState("all");

  const activities = [
    { date: "6 Jan 2024", time: "09:30", lockerId: "A-12", action: "simpan" as const },
    { date: "6 Jan 2024", time: "08:15", lockerId: "B-05", action: "ambil" as const },
    { date: "5 Jan 2024", time: "16:45", lockerId: "B-05", action: "simpan" as const },
    { date: "5 Jan 2024", time: "14:15", lockerId: "C-08", action: "ambil" as const },
    { date: "5 Jan 2024", time: "08:00", lockerId: "C-08", action: "simpan" as const },
    { date: "4 Jan 2024", time: "17:30", lockerId: "A-12", action: "ambil" as const },
    { date: "4 Jan 2024", time: "09:00", lockerId: "A-12", action: "simpan" as const },
    { date: "3 Jan 2024", time: "15:00", lockerId: "D-02", action: "ambil" as const },
    { date: "3 Jan 2024", time: "10:30", lockerId: "D-02", action: "simpan" as const },
    { date: "2 Jan 2024", time: "16:00", lockerId: "A-05", action: "ambil" as const },
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
    <DashboardLayout type="user" title="Riwayat Aktivitas" subtitle="Semua aktivitas penggunaan locker Anda">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari berdasarkan ID locker..."
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
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-primary">{activities.length}</p>
          <p className="text-sm text-muted-foreground">Total Aktivitas</p>
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
          <p className="text-2xl font-bold text-accent">{new Set(activities.map(a => a.lockerId)).size}</p>
          <p className="text-sm text-muted-foreground">Locker Digunakan</p>
        </div>
      </div>

      {/* Activity list grouped by date */}
      <div className="space-y-8">
        {Object.entries(groupedActivities).map(([date, items]) => (
          <div key={date} className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">{date}</h3>
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

      {/* Load more */}
      <div className="flex justify-center mt-8">
        <button className="btn-secondary">
          Muat lebih banyak
        </button>
      </div>
    </DashboardLayout>
  );
};

export default UserHistory;
