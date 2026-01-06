import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Search, Plus, MoreVertical, Edit, Trash2, CreditCard } from "lucide-react";
import { useState } from "react";

const AdminUsers = () => {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Ahmad Fadil", email: "ahmad@email.com", rfid: "RF-001234", lockers: 2, status: "active", joinDate: "1 Jan 2024" },
    { id: 2, name: "Siti Rahayu", email: "siti@email.com", rfid: "RF-001235", lockers: 1, status: "active", joinDate: "15 Des 2023" },
    { id: 3, name: "Budi Santoso", email: "budi@email.com", rfid: "RF-001236", lockers: 0, status: "inactive", joinDate: "20 Nov 2023" },
    { id: 4, name: "Dewi Lestari", email: "dewi@email.com", rfid: "RF-001237", lockers: 3, status: "active", joinDate: "5 Jan 2024" },
    { id: 5, name: "Eko Prasetyo", email: "eko@email.com", rfid: "RF-001238", lockers: 1, status: "active", joinDate: "10 Des 2023" },
    { id: 6, name: "Fitri Handayani", email: "fitri@email.com", rfid: "RF-001239", lockers: 0, status: "pending", joinDate: "6 Jan 2024" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.rfid.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout type="admin" title="Manajemen User" subtitle="Kelola pengguna sistem LOCKIFY.IO">
      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari user (nama, email, RFID)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-12"
          />
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Tambah User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold">{users.length}</p>
          <p className="text-sm text-muted-foreground">Total User</p>
        </div>
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-success">{users.filter(u => u.status === "active").length}</p>
          <p className="text-sm text-muted-foreground">Aktif</p>
        </div>
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-muted-foreground">{users.filter(u => u.status === "inactive").length}</p>
          <p className="text-sm text-muted-foreground">Tidak Aktif</p>
        </div>
        <div className="card-elevated p-4 text-center">
          <p className="text-2xl font-bold text-warning">{users.filter(u => u.status === "pending").length}</p>
          <p className="text-sm text-muted-foreground">Pending</p>
        </div>
      </div>

      {/* Table */}
      <div className="card-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-medium text-muted-foreground">User</th>
                <th className="text-left p-4 font-medium text-muted-foreground hidden md:table-cell">RFID</th>
                <th className="text-left p-4 font-medium text-muted-foreground hidden lg:table-cell">Locker</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left p-4 font-medium text-muted-foreground hidden sm:table-cell">Bergabung</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="table-row animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{user.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-sm">{user.rfid}</span>
                    </div>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <span className="font-medium">{user.lockers}</span>
                    <span className="text-muted-foreground"> locker</span>
                  </td>
                  <td className="p-4">
                    <StatusBadge 
                      status={user.status === "active" ? "online" : user.status === "pending" ? "maintenance" : "offline"} 
                      label={user.status === "active" ? "Aktif" : user.status === "pending" ? "Pending" : "Tidak Aktif"}
                    />
                  </td>
                  <td className="p-4 hidden sm:table-cell text-sm text-muted-foreground">
                    {user.joinDate}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Edit className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Tidak ada user yang ditemukan</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminUsers;
