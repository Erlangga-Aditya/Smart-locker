import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/cards/StatsCard";
import { LockerCard } from "@/components/cards/LockerCard";
import { ActivityCard } from "@/components/cards/ActivityCard";
import { Lock, History, Bell, Package } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const myLockers = [
    { id: "A-12", status: "in-use" as const, lastActivity: "Hari ini, 09:30" },
    { id: "B-05", status: "in-use" as const, lastActivity: "Kemarin, 14:15" },
  ];

  const recentActivities = [
    { date: "6 Jan 2024", time: "09:30", lockerId: "A-12", action: "simpan" as const },
    { date: "5 Jan 2024", time: "14:15", lockerId: "B-05", action: "simpan" as const },
    { date: "5 Jan 2024", time: "08:00", lockerId: "C-08", action: "ambil" as const },
  ];

  return (
    <DashboardLayout type="user" title="Dashboard" subtitle="Selamat datang kembali, Ahmad!">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 stagger-children">
        <StatsCard
          title="Locker Aktif"
          value={2}
          subtitle="Locker yang sedang digunakan"
          icon={Lock}
        />
        <StatsCard
          title="Total Aktivitas"
          value={24}
          subtitle="Bulan ini"
          icon={History}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Locker Tersedia"
          value={15}
          subtitle="Dapat digunakan sekarang"
          icon={Package}
          iconColor="text-success"
        />
        <StatsCard
          title="Notifikasi"
          value={3}
          subtitle="Belum dibaca"
          icon={Bell}
          iconColor="text-warning"
        />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* My Lockers */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Locker Saya</h2>
            <Link to="/user/locker" className="text-sm text-primary hover:underline">
              Lihat semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
            {myLockers.map((locker) => (
              <LockerCard
                key={locker.id}
                id={locker.id}
                status={locker.status}
                lastActivity={locker.lastActivity}
                onAction={() => {}}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Aktivitas Terbaru</h2>
            <Link to="/user/history" className="text-sm text-primary hover:underline">
              Semua →
            </Link>
          </div>
          <div className="space-y-3 stagger-children">
            {recentActivities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 card-elevated p-6">
        <h2 className="text-xl font-semibold mb-4">Aksi Cepat</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link to="/user/locker" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Cari Locker</span>
          </Link>
          <Link to="/user/history" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <History className="w-6 h-6 text-success" />
            </div>
            <span className="text-sm font-medium">Riwayat</span>
          </Link>
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Package className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium">Ambil Barang</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-warning" />
            </div>
            <span className="text-sm font-medium">Notifikasi</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
