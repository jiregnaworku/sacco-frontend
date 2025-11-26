import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useTheme } from "../components/ThemeContext";
import { User, Lock, Bell, Database } from "lucide-react";

export function ManagerSettings() {
  const { theme } = useTheme();

  return (
    <div className="space-y-5">
      {/* Profile Settings */}
      <div className={`rounded-xl border shadow-sm overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div className={`border-b px-6 py-4 flex items-center gap-3 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-700/50 to-gray-700/30 border-gray-700'
            : 'bg-gradient-to-r from-blue-50 to-teal-50 border-gray-200'
        }`}>
          <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
            <User className="size-5 text-white stroke-[1.5]" />
          </div>
          <h3 className={theme === 'dark' ? 'text-white' : 'text-gray-900'} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Profile Settings</h3>
        </div>
        <div className="p-6">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="settings-fullname" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Full Name
                </Label>
                <Input
                  id="settings-fullname"
                  type="text"
                  defaultValue="Admin User"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700 focus:border-blue-400'
                      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-email" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Email
                </Label>
                <Input
                  id="settings-email"
                  type="email"
                  defaultValue="admin@injibara.edu.et"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700 focus:border-blue-400'
                      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                  }`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="settings-worker-id" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Worker ID
                </Label>
                <Input
                  id="settings-worker-id"
                  type="text"
                  defaultValue="M001"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700/30 text-gray-400'
                      : 'border-gray-200 bg-gray-100'
                  }`}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-role" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Role
                </Label>
                <Input
                  id="settings-role"
                  type="text"
                  defaultValue="Manager"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700/30 text-gray-400'
                      : 'border-gray-200 bg-gray-100'
                  }`}
                  disabled
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Update Profile
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Security Settings */}
      <div className={`rounded-xl border shadow-sm overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div className={`border-b px-6 py-4 flex items-center gap-3 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-700/50 to-gray-700/30 border-gray-700'
            : 'bg-gradient-to-r from-blue-50 to-teal-50 border-gray-200'
        }`}>
          <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
            <Lock className="size-5 text-white stroke-[1.5]" />
          </div>
          <h3 className={theme === 'dark' ? 'text-white' : 'text-gray-900'} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Security Settings</h3>
        </div>
        <div className="p-6">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="settings-current-password" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Current Password
                </Label>
                <Input
                  id="settings-current-password"
                  type="password"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700 focus:border-blue-400'
                      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-new-password" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  New Password
                </Label>
                <Input
                  id="settings-new-password"
                  type="password"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700 focus:border-blue-400'
                      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                  }`}
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* System Settings */}
      <div className={`rounded-xl border shadow-sm overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div className={`border-b px-6 py-4 flex items-center gap-3 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-700/50 to-gray-700/30 border-gray-700'
            : 'bg-gradient-to-r from-blue-50 to-teal-50 border-gray-200'
        }`}>
          <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
            <Database className="size-5 text-white stroke-[1.5]" />
          </div>
          <h3 className={theme === 'dark' ? 'text-white' : 'text-gray-900'} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>System Information</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className={`flex justify-between py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>System Version:</span>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>v1.0.0</span>
            </div>
            <div className={`flex justify-between py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Database Status:</span>
              <span className="text-sm text-green-500 flex items-center gap-2">
                <span className="size-2 bg-green-500 rounded-full"></span>
                Connected
              </span>
            </div>
            <div className={`flex justify-between py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Last Login:</span>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Nov 20, 2025 10:30 AM</span>
            </div>
            <div className="flex justify-between py-3">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Active Users:</span>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className={`rounded-xl border shadow-sm overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div className={`border-b px-6 py-4 flex items-center gap-3 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-700/50 to-gray-700/30 border-gray-700'
            : 'bg-gradient-to-r from-blue-50 to-teal-50 border-gray-200'
        }`}>
          <div className="size-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
            <Bell className="size-5 text-white stroke-[1.5]" />
          </div>
          <h3 className={theme === 'dark' ? 'text-white' : 'text-gray-900'} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Notification Preferences</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <label className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors cursor-pointer ${
              theme === 'dark'
                ? 'bg-gray-700/50 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input 
                type="checkbox" 
                defaultChecked 
                className="size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" 
              />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Email notifications for new loan requests</span>
            </label>
            <label className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors cursor-pointer ${
              theme === 'dark'
                ? 'bg-gray-700/50 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input 
                type="checkbox" 
                defaultChecked 
                className="size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" 
              />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Email notifications for new member registrations</span>
            </label>
            <label className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors cursor-pointer ${
              theme === 'dark'
                ? 'bg-gray-700/50 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input 
                type="checkbox" 
                className="size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" 
              />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Daily system summary reports</span>
            </label>
          </div>
          <div className="pt-5">
            <Button 
              className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}