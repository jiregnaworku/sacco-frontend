import { CommitteeOverview } from "./CommitteeOverview";
import { PendingLoanRequests } from "../Loan/PendingLoanRequests";
import { MemberApprovals } from "../Members/MemberApprovals";
import { CommitteeReports } from "./CommitteeReports";
import { CommitteeSettings } from "./CommitteeSettings";
import { CommitteeView } from "./CommitteeDashboard";
import { useTheme } from "../components/ThemeContext";
import { FileText, Users, BarChart3, Settings } from "lucide-react";

interface CommitteeDashboardContentProps {
  activeView: CommitteeView;
}

export function CommitteeDashboardContent({ activeView }: CommitteeDashboardContentProps) {
  const { theme } = useTheme();

  return (
    <div className="p-7 space-y-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Render content based on active view */}
      {activeView === "dashboard" && <CommitteeOverview />}
      
      {activeView === "loan-requests" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <FileText className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Pending Loan Requests</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Review and approve loan applications</p>
            </div>
          </div>
          <PendingLoanRequests />
        </div>
      )}
      
      {activeView === "member-approvals" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <Users className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Member Approvals</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Approve new member registrations</p>
            </div>
          </div>
          <MemberApprovals />
        </div>
      )}
      
      {activeView === "reports" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <BarChart3 className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Committee Reports</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>View committee-specific reports</p>
            </div>
          </div>
          <CommitteeReports />
        </div>
      )}
      
      {activeView === "settings" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <Settings className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Settings</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Configure committee preferences</p>
            </div>
          </div>
          <CommitteeSettings />
        </div>
      )}

      {/* Footer */}
      <footer className={`pt-8 pb-4 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200/60'}`}>
        <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
          © 2025 Injibara University Cooperative Union. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
