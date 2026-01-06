import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/cards/StatsCard";
import { SimpleBarChart } from "@/components/charts/SimpleBarChart";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Lock, Users, Activity, Server, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const weeklyData = [
    { label: "Sen", value: 45 },
    { label: "Sel", value: 52 },
    { label: "Rab", value: 38 },
    { label: "Kam", value: 65 },
    { label: "Jum", value: 48 },
    { label: "Sab", value: 25 },
    { label: "Min", value: 15 },
  ];

  const recentUsers = [
    { name: "Ahmad Fadil", email: "ahmad@email.com", status: "active" },
    { name: "Siti Rahayu", email: "siti@email.com", status: "active" },
    { name: "Budi Santoso", email: "budi@email.com", status: "inactive" },
  ];

  const systemStatus = [
    { name: "Server Utama", status: "online" as const },
    { name: "Database", status: "online" as const },
    { name: "RFID Gateway", status: "online" as const },
    { name: "IoT Controller", status: "offline" as const },
  ];

  return (
    <DashboardLayout type="admin" title="Dashboard Admin" subtitle="Pantau dan kelola sistem LOCKIFY.IO">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 stagger-children">
        <StatsCard
          title="Total Locker"
          value={50}
          subtitle="5 unit baru bulan ini"
          icon={Lock}
          trend={{ value: 10, isPositive: true }}
        />
        <StatsCard
          title="Total User"
          value={128}
          subtitle="12 user baru minggu ini"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Aktivitas Hari Ini"
          value={89}
          subtitle="15% lebih tinggi dari rata-rata"
          icon={Activity}
          iconColor="text-success"
        />
        <StatsCard
          title="Status Sistem"
          value="98%"
          subtitle="Uptime bulan ini"
          icon={Server}
          iconColor="text-accent"
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
        {/* Chart */}
        <div className="lg:col-span-2">
          <SimpleBarChart data={weeklyData} title="Penggunaan Mingguan" />
        </div>

        {/* System Status */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Status Sistem</h3>
            <Link to="/admin/monitoring" className="text-sm text-primary hover:underline">
              Detail →
            </Link>
          </div>
          <div className="space-y-4">
            {systemStatus.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === "online" ? "bg-success animate-pulse" : "bg-destructive"
                  }`} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <StatusBadge status={item.status} showPulse />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Users */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">User Terbaru</h3>
            <Link to="/admin/users" className="text-sm text-primary hover:underline">
              Lihat semua →
            </Link>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.email} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{user.name[0]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <StatusBadge status={user.status === "active" ? "online" : "offline"} />
              </div>
            ))}
          </div>
        </div>

        {/* Locker Overview */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Status Locker</h3>
            <Link to="/admin/locker" className="text-sm text-primary hover:underline">
              Kelola →
            </Link>
          </div>
          
          {/* Donut chart simulation */}
          <div className="flex items-center justify-center gap-8">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="352"
                  strokeDashoffset="88"
                  className="text-success"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="352"
                  strokeDashoffset="264"
                  className="text-destructive"
                  style={{ transform: "rotate(264deg)", transformOrigin: "center" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold">50</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm">Tersedia: 35</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm">Digunakan: 12</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-sm">Maintenance: 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-8 card-elevated p-6 border-warning/50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h3 className="font-semibold text-warning">Perhatian</h3>
            <p className="text-sm text-muted-foreground mt-1">
              IoT Controller mengalami gangguan koneksi. Segera periksa status perangkat untuk memastikan sistem berjalan normal.
            </p>
            <Link to="/admin/monitoring" className="text-sm text-primary hover:underline mt-2 inline-block">
              Lihat detail →
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
