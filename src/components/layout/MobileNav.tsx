import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lock, 
  History, 
  Users, 
  Activity, 
  FileText,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  type: "user" | "admin";
}

const userMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/user/dashboard" },
  { icon: Lock, label: "Locker", path: "/user/locker" },
  { icon: History, label: "Riwayat", path: "/user/history" },
];

const adminMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Users, label: "User", path: "/admin/users" },
  { icon: Lock, label: "Locker", path: "/admin/locker" },
  { icon: Activity, label: "Monitor", path: "/admin/monitoring" },
];

const adminMoreItems = [
  { icon: History, label: "Riwayat Aktivitas", path: "/admin/history" },
  { icon: FileText, label: "Laporan", path: "/admin/reports" },
];

export const MobileNav = ({ type }: MobileNavProps) => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);
  const menuItems = type === "user" ? userMenuItems : adminMenuItems;

  return (
    <>
      {/* Top Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Lock className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">LOCKIFY<span className="text-primary">.IO</span></span>
          </Link>
          {type === "admin" && (
            <button 
              onClick={() => setShowMore(!showMore)}
              className="btn-ghost p-2"
            >
              {showMore ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </header>

      {/* More menu overlay for admin */}
      {showMore && type === "admin" && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 pt-16 animate-fade-in">
          <nav className="p-4 space-y-2">
            {adminMoreItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setShowMore(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border">
        <div className="flex items-center justify-around py-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${location.pathname === item.path ? "active" : ""}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
