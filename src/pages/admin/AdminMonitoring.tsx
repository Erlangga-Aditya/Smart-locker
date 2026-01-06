import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Server, Wifi, Cpu, HardDrive, Activity, RefreshCw } from "lucide-react";

const AdminMonitoring = () => {
  const devices = [
    { 
      id: "SRV-001", 
      name: "Server Utama", 
      type: "server",
      status: "online" as const, 
      uptime: "45 hari 12 jam",
      cpu: 32,
      memory: 64,
      lastPing: "2 detik lalu"
    },
    { 
      id: "DB-001", 
      name: "Database Server", 
      type: "database",
      status: "online" as const, 
      uptime: "45 hari 12 jam",
      cpu: 18,
      memory: 42,
      lastPing: "1 detik lalu"
    },
    { 
      id: "GW-001", 
      name: "RFID Gateway", 
      type: "gateway",
      status: "online" as const, 
      uptime: "30 hari 8 jam",
      cpu: 12,
      memory: 28,
      lastPing: "3 detik lalu"
    },
    { 
      id: "IOT-001", 
      name: "IoT Controller A", 
      type: "iot",
      status: "offline" as const, 
      uptime: "-",
      cpu: 0,
      memory: 0,
      lastPing: "5 menit lalu"
    },
    { 
      id: "IOT-002", 
      name: "IoT Controller B", 
      type: "iot",
      status: "online" as const, 
      uptime: "15 hari 3 jam",
      cpu: 25,
      memory: 35,
      lastPing: "1 detik lalu"
    },
    { 
      id: "IOT-003", 
      name: "IoT Controller C", 
      type: "iot",
      status: "online" as const, 
      uptime: "20 hari 6 jam",
      cpu: 22,
      memory: 31,
      lastPing: "2 detik lalu"
    },
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "server":
        return Server;
      case "database":
        return HardDrive;
      case "gateway":
        return Wifi;
      default:
        return Cpu;
    }
  };

  const onlineCount = devices.filter((d) => d.status === "online").length;
  const offlineCount = devices.filter((d) => d.status === "offline").length;

  return (
    <DashboardLayout type="admin" title="Monitoring Real-Time" subtitle="Pantau status semua perangkat">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fade-in">
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-3xl font-bold">{devices.length}</p>
              <p className="text-sm text-muted-foreground">Total Perangkat</p>
            </div>
          </div>
        </div>
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center relative">
              <Server className="w-6 h-6 text-success" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse" />
            </div>
            <div>
              <p className="text-3xl font-bold text-success">{onlineCount}</p>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
        </div>
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <Server className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <p className="text-3xl font-bold text-destructive">{offlineCount}</p>
              <p className="text-sm text-muted-foreground">Offline</p>
            </div>
          </div>
        </div>
      </div>

      {/* Refresh button */}
      <div className="flex justify-end mb-4">
        <button className="btn-secondary flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Devices grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {devices.map((device) => {
          const Icon = getDeviceIcon(device.type);
          const isOnline = device.status === "online";

          return (
            <div
              key={device.id}
              className={`card-elevated p-6 transition-all duration-300 ${
                isOnline ? "border-success/20" : "border-destructive/20 opacity-75"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isOnline ? "bg-success/10" : "bg-destructive/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${isOnline ? "text-success" : "text-destructive"}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{device.name}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{device.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    isOnline ? "bg-success" : "bg-destructive"
                  } ${isOnline ? "animate-pulse" : ""}`} />
                  <StatusBadge status={device.status} />
                </div>
              </div>

              {/* Stats */}
              {isOnline ? (
                <div className="space-y-4">
                  {/* CPU */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">{device.cpu}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${device.cpu}%` }}
                      />
                    </div>
                  </div>

                  {/* Memory */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="font-medium">{device.memory}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-500"
                        style={{ width: `${device.memory}%` }}
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex justify-between text-sm pt-2 border-t border-border">
                    <span className="text-muted-foreground">Uptime</span>
                    <span className="font-medium">{device.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Ping</span>
                    <span className="text-success">{device.lastPing}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-destructive font-medium">Perangkat Tidak Merespons</p>
                  <p className="text-sm text-muted-foreground mt-1">Last ping: {device.lastPing}</p>
                  <button className="btn-secondary mt-4 text-sm">
                    Coba Hubungkan
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Connection log */}
      <div className="mt-8 card-elevated p-6">
        <h3 className="text-lg font-semibold mb-4">Log Koneksi Terbaru</h3>
        <div className="space-y-3">
          {[
            { time: "14:32:15", device: "IOT-001", event: "Koneksi terputus", type: "error" },
            { time: "14:30:00", device: "GW-001", event: "Heartbeat diterima", type: "success" },
            { time: "14:29:45", device: "DB-001", event: "Query latency: 12ms", type: "info" },
            { time: "14:28:30", device: "SRV-001", event: "CPU spike: 45%", type: "warning" },
            { time: "14:27:00", device: "IOT-002", event: "Locker A-02 dibuka", type: "info" },
          ].map((log, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-xs text-muted-foreground font-mono w-20">{log.time}</span>
              <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">{log.device}</span>
              <span className={`flex-1 text-sm ${
                log.type === "error" ? "text-destructive" :
                log.type === "success" ? "text-success" :
                log.type === "warning" ? "text-warning" : ""
              }`}>
                {log.event}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminMonitoring;
