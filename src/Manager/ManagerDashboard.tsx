import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { ManagerSidebar } from "./ManagerSidebar";
import { ManagerTopBar } from "./ManagerTopBar";
import { ManagerDashboardContent } from "./ManagerDashboardContent";
import { User } from "../services/authService";

interface ManagerDashboardProps {
  onLogout: () => void;
  user: User;
}

export type ManagerView = "dashboard" | "create-user" | "add-member" | "loan-forms" | "reports" | "settings";

export function ManagerDashboard({ onLogout, user }: ManagerDashboardProps) {
  const [activeView, setActiveView] = useState<ManagerView>("dashboard");
  const { theme } = useTheme();

  return (
    <div 
      className={`h-screen flex flex-col overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30'
      }`} 
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {/* Top Bar */}
      <ManagerTopBar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <ManagerSidebar 
          activeView={activeView}
          onViewChange={setActiveView}
          onLogout={onLogout} 
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <ManagerDashboardContent activeView={activeView} />
        </main>
      </div>
    </div>
  );
}