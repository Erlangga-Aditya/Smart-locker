import { Link } from "react-router-dom";
import { Lock, Shield, Smartphone, Zap, ArrowRight, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const features = [
    {
      icon: Lock,
      title: "Keamanan Tinggi",
      description: "Enkripsi end-to-end dan autentikasi RFID untuk keamanan maksimal"
    },
    {
      icon: Smartphone,
      title: "Akses Mobile",
      description: "Kontrol locker Anda dari smartphone kapanpun, dimanapun"
    },
    {
      icon: Zap,
      title: "Real-Time",
      description: "Monitoring status locker secara langsung dengan notifikasi instan"
    },
    {
      icon: Shield,
      title: "IoT Terintegrasi",
      description: "Teknologi Internet of Things untuk manajemen yang lebih pintar"
    }
  ];

  const benefits = [
    "Akses 24/7 dengan kartu RFID atau smartphone",
    "Dashboard monitoring untuk user dan admin",
    "Riwayat aktivitas lengkap dan terstruktur",
    "Sistem notifikasi real-time",
    "Laporan penggunaan otomatis",
    "Dukungan multi-lokasi"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-glow">
              <Lock className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">LOCKIFY<span className="text-primary">.IO</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login" className="btn-primary">
              Masuk
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero text */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Smart Locker berbasis IoT
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Solusi Penyimpanan
                <span className="text-gradient block mt-2">Cerdas & Aman</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                LOCKIFY.IO menghadirkan sistem smart locker dengan teknologi Internet of Things 
                untuk kemudahan akses dan keamanan terjamin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="btn-primary inline-flex items-center justify-center gap-2">
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/user/dashboard" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Lihat Demo
                </Link>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Locker grid illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
                <div className="absolute inset-4 grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-xl ${
                        i === 4 ? "bg-primary animate-glow" : "bg-card border border-border"
                      } flex items-center justify-center transition-all duration-300 hover:scale-105`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <Lock className={`w-8 h-8 ${i === 4 ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Fitur Unggulan</h2>
            <p className="text-muted-foreground">
              Teknologi canggih untuk pengalaman penyimpanan yang lebih baik
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-elevated p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Mengapa Memilih
                <span className="text-gradient block">LOCKIFY.IO?</span>
              </h2>
              <p className="text-muted-foreground">
                Kami menyediakan solusi lengkap untuk kebutuhan penyimpanan Anda dengan 
                teknologi terdepan dan kemudahan akses.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Unit Locker" },
                { value: "10K+", label: "Pengguna Aktif" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="card-elevated p-8 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sidebar">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-sidebar-foreground">
              Siap Memulai?
            </h2>
            <p className="text-sidebar-muted">
              Bergabung dengan ribuan pengguna yang sudah mempercayakan penyimpanan mereka kepada LOCKIFY.IO
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-primary inline-flex items-center justify-center gap-2">
                Coba Gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/admin/dashboard" className="btn-secondary inline-flex items-center justify-center gap-2 bg-sidebar-accent text-sidebar-foreground border-sidebar-border">
                Demo Admin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Lock className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">LOCKIFY<span className="text-primary">.IO</span></span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LOCKIFY.IO - Smart Locker System. Semua hak dilindungi.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Tentang</a>
              <a href="#" className="hover:text-foreground transition-colors">Kontak</a>
              <a href="#" className="hover:text-foreground transition-colors">Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
