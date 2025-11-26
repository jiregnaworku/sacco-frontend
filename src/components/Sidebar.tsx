import { 
  LayoutDashboard, 
  UserPlus, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "./ui/button";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: UserPlus, label: "Create User", active: false },
  { icon: Users, label: "Add Member", active: false },
  { icon: FileText, label: "Loan Forms", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <aside className="w-52 bg-gray-200 border-r border-gray-400 flex flex-col">
      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm border ${
                item.active
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
