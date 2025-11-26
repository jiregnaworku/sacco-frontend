import { 
  LayoutDashboard, 
  UserPlus, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { Button } from "../components/ui/button";
import { ManagerView } from "./ManagerDashboard";

interface NavigationItem {
  icon: any;
  label: string;
  view: ManagerView;
}

const navigationItems: NavigationItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", view: "dashboard" },
  { icon: UserPlus, label: "Create User", view: "create-user" },
  { icon: Users, label: "Add Member", view: "add-member" },
  { icon: FileText, label: "Loan Forms", view: "loan-forms" },
  { icon: BarChart3, label: "Reports", view: "reports" },
  { icon: Settings, label: "Settings", view: "settings" },
];

interface ManagerSidebarProps {
  activeView: ManagerView;
  onViewChange: (view: ManagerView) => void;
  onLogout: () => void;
}

export function ManagerSidebar({ activeView, onViewChange, onLogout }: ManagerSidebarProps) {
  const { theme } = useTheme();

  return (
    <aside className={`w-64 flex flex-col ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 shadow-lg shadow-black/30'
        : 'bg-gradient-to-b from-blue-600 via-blue-700 to-teal-700 shadow-lg shadow-blue-900/20'
    }`}>
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className={`size-10 rounded-xl flex items-center justify-center shadow-lg ${
            theme === 'dark' ? 'bg-teal-500/20 border border-teal-400/30' : 'bg-white/90'
          }`}>
            <span className={`${theme === 'dark' ? 'text-teal-300' : 'text-blue-600'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 700 }}>SC</span>
          </div>
          <div>
            <h2 className="text-white text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600 }}>SACCO</h2>
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-blue-200'}`}>Financial Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.view;
          return (
            <button
              key={item.label}
              onClick={() => onViewChange(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 rounded-xl ${
                isActive
                  ? theme === 'dark'
                    ? "bg-teal-500/20 text-teal-300 shadow-lg shadow-teal-900/20 border border-teal-400/30"
                    : "bg-white text-blue-700 shadow-lg shadow-blue-900/10"
                  : theme === 'dark'
                    ? "text-gray-300 hover:bg-white/5 hover:text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: isActive ? 500 : 400 }}
            >
              <Icon className="size-5 stroke-[1.5]" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-white/10 space-y-3">
        <Button 
          onClick={onLogout}
          className={`w-full h-10 text-sm flex items-center justify-center gap-2 rounded-xl transition-all duration-200 backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <LogOut className="size-4 stroke-[1.5]" />
          Logout
        </Button>
        <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-blue-200'}`}>Version 1.0.0</p>
      </div>
    </aside>
  );
}