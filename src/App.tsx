import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import UserDashboard from "./pages/user/UserDashboard";
import UserLocker from "./pages/user/UserLocker";
import UserHistory from "./pages/user/UserHistory";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminLocker from "./pages/admin/AdminLocker";
import AdminMonitoring from "./pages/admin/AdminMonitoring";
import AdminHistory from "./pages/admin/AdminHistory";
import AdminReports from "./pages/admin/AdminReports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/locker" element={<UserLocker />} />
          <Route path="/user/history" element={<UserHistory />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/locker" element={<AdminLocker />} />
          <Route path="/admin/monitoring" element={<AdminMonitoring />} />
          <Route path="/admin/history" element={<AdminHistory />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
