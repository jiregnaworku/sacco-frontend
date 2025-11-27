import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { CommitteeSidebar } from "./CommitteeSidebar";
import { CommitteeTopBar } from "./CommitteeTopBar";
import { CommitteeDashboardContent } from "./CommitteeDashboardContent";
import { User } from "../services/authService";

interface CommitteeDashboardProps {
  onLogout: () => void;
  user: User;
}

export type CommitteeView = "dashboard" | "loan-requests" | "member-approvals" | "reports" | "settings";

export function CommitteeDashboard({ onLogout }: CommitteeDashboardProps) {
  const [activeView, setActiveView] = useState<CommitteeView>("dashboard");
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
      <CommitteeTopBar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <CommitteeSidebar 
          activeView={activeView}
          onViewChange={setActiveView}
          onLogout={onLogout} 
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <CommitteeDashboardContent activeView={activeView} />
        </main>
      </div>
    </div>
  );
}
