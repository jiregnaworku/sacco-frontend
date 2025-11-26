import { SystemOverview } from "../components/SystemOverview";
import { CreateUserForm } from "../Forms/CreateUserForm";
import { AddMemberForm } from "../Forms/AddMemberForm";
import { LoanFormSubmission } from "../Loan/LoanFormSubmission";
import { ReportsSection } from "../Reports/ReportsSection";
import { ManagerSettings } from "./ManagerSettings";
import { ManagerView } from "./ManagerDashboard";
import { useTheme } from "../components/ThemeContext";
import { UserPlus, Users, FileText, BarChart3, Settings } from "lucide-react";

interface ManagerDashboardContentProps {
  activeView: ManagerView;
}

export function ManagerDashboardContent({ activeView }: ManagerDashboardContentProps) {
  const { theme } = useTheme();

  return (
    <div className="p-7 space-y-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Render content based on active view */}
      {activeView === "dashboard" && <SystemOverview />}
      
      {activeView === "create-user" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <UserPlus className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Create New User</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Add a new user to the system</p>
            </div>
          </div>
          <CreateUserForm />
        </div>
      )}
      
      {activeView === "add-member" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <Users className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Add New Member</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Register a new cooperative member</p>
            </div>
          </div>
          <AddMemberForm />
        </div>
      )}
      
      {activeView === "loan-forms" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <FileText className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Loan Form Submission</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Submit and manage loan applications</p>
            </div>
          </div>
          <LoanFormSubmission />
        </div>
      )}
      
      {activeView === "reports" && (
        <div className="space-y-5">
          <div className={`flex items-center gap-3 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
              <BarChart3 className="size-5 text-white stroke-[1.5]" />
            </div>
            <div>
              <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Reports</h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>View system reports and analytics</p>
            </div>
          </div>
          <ReportsSection />
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
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Configure system preferences</p>
            </div>
          </div>
          <ManagerSettings />
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