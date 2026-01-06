import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lock, 
  History, 
  Users, 
  Activity, 
  FileText, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  type: "user" | "admin";
}

const userMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/user/dashboard" },
  { icon: Lock, label: "Akses Locker", path: "/user/locker" },
  { icon: History, label: "Riwayat Aktivitas", path: "/user/history" },
];

const adminMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Users, label: "Manajemen User", path: "/admin/users" },
  { icon: Lock, label: "Manajemen Locker", path: "/admin/locker" },
  { icon: Activity, label: "Monitoring", path: "/admin/monitoring" },
  { icon: History, label: "Riwayat Aktivitas", path: "/admin/history" },
  { icon: FileText, label: "Laporan", path: "/admin/reports" },
];

export const Sidebar = ({ type }: SidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = type === "user" ? userMenuItems : adminMenuItems;

  return (
    <aside 
      className={`hidden lg:flex flex-col bg-sidebar h-screen sticky top-0 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-glow">
            <Lock className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <span className="text-xl font-bold text-sidebar-foreground">LOCKIFY</span>
              <span className="text-xl font-bold text-primary">.IO</span>
            </div>
          )}
        </Link>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? "active" : ""}`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Link to={`/${type}/settings`} className="sidebar-item">
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Pengaturan</span>}
        </Link>
        <Link to="/login" className="sidebar-item text-destructive hover:text-destructive">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Keluar</span>}
        </Link>
      </div>
    </aside>
  );
};
