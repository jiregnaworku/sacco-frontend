import { AccountantOverview } from "./AccountantOverview";
import { MemberRecordsTable } from "../Members/MemberRecordsTable";
import { SavingsEntryForm } from "../Savings/SavingsEntryForm";
import { LoanManagementTable } from "../Loan/LoanManagementTable";
import { ShareAllocationForm } from "../Shares/ShareAllocationForm";
import { AccountantReports } from "./AccountantReports";
import { AccountantSettings } from "./AccountantSettings";
import { AccountantView } from "./AccountantDashboard";
import { useTheme } from "../components/ThemeContext";
import { Users, PiggyBank, Landmark, TrendingUp, FileText, Settings } from "lucide-react";

interface AccountantDashboardContentProps {
  activeView: AccountantView;
}

export function AccountantDashboardContent({ activeView }: AccountantDashboardContentProps) {
  const { theme } = useTheme();

  return (
    <div className="p-7 space-y-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Render content based on active view */}
      {activeView === "dashboard" && <AccountantOverview />}
      
      {activeView === "member-records" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <Users className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Member Records</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>View and manage member information</p>
            </div>
          </div>
          <MemberRecordsTable />
        </div>
      )}
      
      {activeView === "savings-entry" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <PiggyBank className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Savings Entry</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Record member savings transactions</p>
            </div>
          </div>
          <SavingsEntryForm />
        </div>
      )}
      
      {activeView === "loan-management" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <Landmark className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Loan Management</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Manage loan disbursements and payments</p>
            </div>
          </div>
          <LoanManagementTable />
        </div>
      )}
      
      {activeView === "share-allocation" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <TrendingUp className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Share Allocation</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Allocate and manage member shares</p>
            </div>
          </div>
          <ShareAllocationForm />
        </div>
      )}
      
      {activeView === "reports" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <FileText className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Financial Reports</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Generate and view financial reports</p>
            </div>
          </div>
          <AccountantReports />
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
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Configure accountant preferences</p>
            </div>
          </div>
          <AccountantSettings />
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