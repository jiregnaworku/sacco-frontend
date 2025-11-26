import { useState } from "react";
import { CommitteeSidebar } from "./CommitteeSidebar";
import { CommitteeTopBar } from "./CommitteeTopBar";
import { CommitteeDashboardContent } from "./CommitteeDashboardContent";

interface CommitteeDashboardProps {
  onLogout: () => void;
}

export type CommitteeView = "dashboard" | "loan-requests" | "member-approvals" | "reports" | "settings";

export function CommitteeDashboard({ onLogout }: CommitteeDashboardProps) {
  const [activeView, setActiveView] = useState<CommitteeView>("dashboard");

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden font-sans">
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
        <main className="flex-1 overflow-auto bg-white">
          <CommitteeDashboardContent activeView={activeView} />
        </main>
      </div>
    </div>
  );
}
