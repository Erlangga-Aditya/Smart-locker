import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SimpleBarChart } from "@/components/charts/SimpleBarChart";
import { Download, Calendar, TrendingUp, Users, Lock, Activity } from "lucide-react";

const AdminReports = () => {
  const weeklyUsage = [
    { label: "Sen", value: 45 },
    { label: "Sel", value: 52 },
    { label: "Rab", value: 38 },
    { label: "Kam", value: 65 },
    { label: "Jum", value: 48 },
    { label: "Sab", value: 25 },
    { label: "Min", value: 15 },
  ];

  const monthlyUsers = [
    { label: "Okt", value: 85 },
    { label: "Nov", value: 102 },
    { label: "Des", value: 118 },
    { label: "Jan", value: 128 },
  ];

  const topLockers = [
    { id: "A-02", usage: 156, percentage: 85 },
    { id: "B-01", usage: 142, percentage: 78 },
    { id: "C-02", usage: 128, percentage: 70 },
    { id: "A-01", usage: 115, percentage: 63 },
    { id: "B-03", usage: 98, percentage: 54 },
  ];

  const topUsers = [
    { name: "Ahmad Fadil", usage: 45 },
    { name: "Dewi Lestari", usage: 38 },
    { name: "Siti Rahayu", usage: 32 },
    { name: "Eko Prasetyo", usage: 28 },
    { name: "Budi Santoso", usage: 24 },
  ];

  return (
    <DashboardLayout type="admin" title="Laporan" subtitle="Ringkasan dan statistik penggunaan">
      {/* Period selector */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
        <select className="input-field w-full sm:w-48">
          <option value="week">Minggu ini</option>
          <option value="month">Bulan ini</option>
          <option value="quarter">Kuartal ini</option>
          <option value="year">Tahun ini</option>
        </select>
        <button className="btn-secondary flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Pilih Tanggal
        </button>
        <div className="flex-1" />
        <button className="btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Laporan
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 stagger-children">
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">1,248</p>
              <p className="text-sm text-muted-foreground">Total Transaksi</p>
              <p className="text-xs text-success mt-1">↑ 12% dari bulan lalu</p>
            </div>
          </div>
        </div>
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">94%</p>
              <p className="text-sm text-muted-foreground">Tingkat Utilisasi</p>
              <p className="text-xs text-success mt-1">↑ 5% dari bulan lalu</p>
            </div>
          </div>
        </div>
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">128</p>
              <p className="text-sm text-muted-foreground">User Aktif</p>
              <p className="text-xs text-success mt-1">↑ 8 user baru</p>
            </div>
          </div>
        </div>
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold">2.4</p>
              <p className="text-sm text-muted-foreground">Rata-rata/Hari/User</p>
              <p className="text-xs text-muted-foreground mt-1">Stabil</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SimpleBarChart data={weeklyUsage} title="Penggunaan Mingguan" />
        <SimpleBarChart data={monthlyUsers} title="Pertumbuhan User" />
      </div>

      {/* Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Lockers */}
        <div className="card-elevated p-6">
          <h3 className="text-lg font-semibold mb-6">Locker Paling Aktif</h3>
          <div className="space-y-4">
            {topLockers.map((locker, index) => (
              <div key={locker.id} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === 0 ? "bg-warning/10 text-warning" :
                  index === 1 ? "bg-muted text-muted-foreground" :
                  index === 2 ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {index + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{locker.id}</span>
                    <span className="text-sm text-muted-foreground">{locker.usage} kali</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${locker.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Users */}
        <div className="card-elevated p-6">
          <h3 className="text-lg font-semibold mb-6">User Paling Aktif</h3>
          <div className="space-y-4">
            {topUsers.map((user, index) => (
              <div key={user.name} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === 0 ? "bg-warning/10 text-warning" :
                  index === 1 ? "bg-muted text-muted-foreground" :
                  index === 2 ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {index + 1}
                </span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{user.name[0]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.usage} transaksi</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary table */}
      <div className="mt-8 card-elevated overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold">Ringkasan Bulan Ini</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-medium text-muted-foreground">Metrik</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Minggu 1</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Minggu 2</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Minggu 3</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Minggu 4</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="p-4 font-medium">Transaksi</td>
                <td className="p-4 text-right">285</td>
                <td className="p-4 text-right">312</td>
                <td className="p-4 text-right">298</td>
                <td className="p-4 text-right">353</td>
                <td className="p-4 text-right font-bold">1,248</td>
              </tr>
              <tr className="table-row">
                <td className="p-4 font-medium">User Aktif</td>
                <td className="p-4 text-right">98</td>
                <td className="p-4 text-right">105</td>
                <td className="p-4 text-right">112</td>
                <td className="p-4 text-right">128</td>
                <td className="p-4 text-right font-bold text-success">↑ 30%</td>
              </tr>
              <tr className="table-row">
                <td className="p-4 font-medium">Utilisasi</td>
                <td className="p-4 text-right">89%</td>
                <td className="p-4 text-right">91%</td>
                <td className="p-4 text-right">93%</td>
                <td className="p-4 text-right">94%</td>
                <td className="p-4 text-right font-bold">92%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;
