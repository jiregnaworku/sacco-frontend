import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { AccountantSidebar } from "./AccountantSidebar";
import { AccountantTopBar } from "./AccountantTopBar";
import { AccountantDashboardContent } from "./AccountantDashboardContent";

interface AccountantDashboardProps {
  onLogout: () => void;
}

export type AccountantView = "dashboard" | "member-records" | "savings-entry" | "loan-management" | "share-allocation" | "reports" | "settings";

export function AccountantDashboard({ onLogout }: AccountantDashboardProps) {
  const [activeView, setActiveView] = useState<AccountantView>("dashboard");
  const { theme } = useTheme();

  return (
    <div className={`h-screen flex flex-col overflow-hidden font-sans ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Top Bar */}
      <AccountantTopBar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AccountantSidebar 
          activeView={activeView}
          onViewChange={setActiveView}
          onLogout={onLogout} 
        />
        
        {/* Main Content Area */}
        <main className={`flex-1 overflow-auto ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <AccountantDashboardContent activeView={activeView} />
        </main>
      </div>
    </div>
  );
}