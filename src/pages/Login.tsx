import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi loading
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-sidebar relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center animate-glow">
              <Lock className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-2xl font-bold text-sidebar-foreground">LOCKIFY</span>
              <span className="text-2xl font-bold text-primary">.IO</span>
            </div>
          </div>

          {/* Hero content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-sidebar-foreground leading-tight">
              Smart Locker<br />
              <span className="text-gradient">Berbasis IoT</span>
            </h1>
            <p className="text-lg text-sidebar-muted max-w-md">
              Solusi penyimpanan modern dengan teknologi Internet of Things. 
              Akses locker Anda kapanpun, dimanapun.
            </p>
            
            {/* Features */}
            <div className="space-y-4 pt-8">
              {[
                "Akses real-time dengan RFID & mobile",
                "Monitoring status locker 24/7",
                "Keamanan terenkripsi end-to-end",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sidebar-foreground/80 animate-slide-in-left" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-sidebar-muted">
            © 2024 LOCKIFY.IO - Smart Locker System
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex flex-col p-6 lg:p-12">
        {/* Mobile header */}
        <div className="flex items-center justify-between lg:justify-end mb-8">
          <div className="flex items-center gap-3 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">LOCKIFY<span className="text-primary">.IO</span></span>
          </div>
          <ThemeToggle />
        </div>

        {/* Form container */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md animate-scale-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Selamat Datang</h2>
              <p className="text-muted-foreground">Masuk ke akun LOCKIFY.IO Anda</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="input-field pl-12"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="input-field pl-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
                  <span>Ingat saya</span>
                </label>
                <a href="#" className="text-primary hover:underline">Lupa password?</a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Masuk
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">atau masuk sebagai</span>
              </div>
            </div>

            {/* Quick access buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/user/dashboard" className="btn-secondary text-center">
                Demo User
              </Link>
              <Link to="/admin/dashboard" className="btn-secondary text-center">
                Demo Admin
              </Link>
            </div>

            {/* Register link */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Belum punya akun?{" "}
              <a href="#" className="text-primary hover:underline font-medium">Daftar sekarang</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
