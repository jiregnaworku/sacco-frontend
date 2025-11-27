import { Search, Bell, User, TrendingUp, Users, Moon, Sun } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export function CommitteeTopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`h-16 border-b flex items-center justify-between px-6 shadow-md ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 border-white/10'
        : 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 border-gray-300/20'
    }`}>
      {/* Left Section - Title & Quick Metrics */}
      <div className="flex items-center gap-6">
        <h1 className="text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Committee Dashboard
        </h1>
        
        {/* Quick Metrics */}
        <div className="flex items-center gap-4 ml-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
            <Users className="size-4 text-white" />
            <span className="text-xs text-white">8 Pending Loans</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
            <TrendingUp className="size-4 text-white" />
            <span className="text-xs text-white">3 New Members</span>
          </div>
        </div>
      </div>

      {/* Right Section - Search, Notifications & Profile */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/70" />
          <Input
            type="text"
            placeholder="Search loans or members..."
            className="pl-10 h-9 w-72 bg-white/15 backdrop-blur-sm border-white/20 text-sm text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 rounded-lg"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          />
        </div>

        {/* Theme Toggle */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleTheme}
          className="h-9 w-9 p-0 border-white/30 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon className="size-4 text-white" />
          ) : (
            <Sun className="size-4 text-white" />
          )}
        </Button>

        {/* Notifications */}
        <Button 
          variant="outline" 
          size="sm" 
          className="h-9 w-9 p-0 border-white/30 bg-white/10 hover:bg-white/20 rounded-lg relative backdrop-blur-sm"
        >
          <Bell className="size-4 text-white" />
          <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full ring-2 ring-white/30"></span>
        </Button>

        {/* Profile Chip */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm">
          <div className="size-6 bg-white rounded-full flex items-center justify-center">
            <User className="size-3.5 text-blue-600" />
          </div>
          <span className="text-sm text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Committee
          </span>
        </div>
      </div>
    </header>
  );
}
