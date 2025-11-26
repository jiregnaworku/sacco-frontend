import { CommitteeOverview } from "./CommitteeOverview";
import { PendingLoanRequests } from "../Loan/PendingLoanRequests";
import { MemberApprovals } from "../Members/MemberApprovals";
import { CommitteeReports } from "./CommitteeReports";
import { CommitteeSettings } from "./CommitteeSettings";
import { CommitteeView } from "./CommitteeDashboard";

interface CommitteeDashboardContentProps {
  activeView: CommitteeView;
}

export function CommitteeDashboardContent({ activeView }: CommitteeDashboardContentProps) {
  return (
    <div className="p-4 space-y-4">
      {/* Render content based on active view */}
      {activeView === "dashboard" && <CommitteeOverview />}
      
      {activeView === "loan-requests" && (
        <div className="space-y-4">
          <div className="border-b border-gray-300 pb-2">
            <h2 className="text-gray-900">Pending Loan Requests</h2>
          </div>
          <PendingLoanRequests />
        </div>
      )}
      
      {activeView === "member-approvals" && (
        <div className="space-y-4">
          <div className="border-b border-gray-300 pb-2">
            <h2 className="text-gray-900">Member Approvals</h2>
          </div>
          <MemberApprovals />
        </div>
      )}
      
      {activeView === "reports" && (
        <div className="space-y-4">
          <div className="border-b border-gray-300 pb-2">
            <h2 className="text-gray-900">Committee Reports</h2>
          </div>
          <CommitteeReports />
        </div>
      )}
      
      {activeView === "settings" && (
        <div className="space-y-4">
          <div className="border-b border-gray-300 pb-2">
            <h2 className="text-gray-900">Settings</h2>
          </div>
          <CommitteeSettings />
        </div>
      )}

      {/* Footer */}
      <footer className="pt-6 pb-2 border-t border-gray-300">
        <p className="text-xs text-gray-600 text-center">
          © Injibara University Cooperative Union
        </p>
      </footer>
    </div>
  );
}
