import { 
  LayoutDashboard, 
  FileText, 
  UserCheck, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "../components/ui/button";
import { CommitteeView } from "./CommitteeDashboard";

interface NavigationItem {
  icon: any;
  label: string;
  view: CommitteeView;
}

const navigationItems: NavigationItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", view: "dashboard" },
  { icon: FileText, label: "Loan Requests", view: "loan-requests" },
  { icon: UserCheck, label: "Member Approvals", view: "member-approvals" },
  { icon: BarChart3, label: "Reports", view: "reports" },
  { icon: Settings, label: "Settings", view: "settings" },
];

interface CommitteeSidebarProps {
  activeView: CommitteeView;
  onViewChange: (view: CommitteeView) => void;
  onLogout: () => void;
}

export function CommitteeSidebar({ activeView, onViewChange, onLogout }: CommitteeSidebarProps) {
  return (
    <aside className="w-52 bg-gray-200 border-r border-gray-400 flex flex-col">
      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.view;
          return (
            <button
              key={item.label}
              onClick={() => onViewChange(item.view)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm border ${
                isActive
                  ? "bg-blue-100 border-blue-600 text-blue-900"
                  : "bg-gray-200 border-transparent text-gray-900 hover:bg-gray-300 hover:border-gray-500"
              }`}
            >
              <Icon className="size-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-2 border-t border-gray-400 bg-gray-200 space-y-2">
        <Button 
          onClick={onLogout}
          className="w-full h-7 text-xs bg-gray-300 hover:bg-gray-400 text-gray-900 border border-gray-500 flex items-center justify-center gap-2"
        >
          <LogOut className="size-3" />
          Logout
        </Button>
        <p className="text-xs text-gray-700 text-center">Version 1.0.0</p>
      </div>
    </aside>
  );
}
