import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { useTheme } from "../components/ThemeContext";
import { User, Lock, Bell, Database } from "lucide-react";

export function AccountantSettings() {
  const { theme } = useTheme();

  return (
    <div className="space-y-5">
      {/* Profile Settings */}
      <div className={`rounded-xl overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
      }`}>
        <div className={`px-6 py-4 border-b flex items-center gap-3 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`size-8 rounded-lg flex items-center justify-center ${
            theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
          }`}>
            <User className={`size-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h3 className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Profile Settings
          </h3>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountant-fullname" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name:
                </Label>
                <Input
                  id="accountant-fullname"
                  type="text"
                  defaultValue="Accountant User"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-gray-200' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountant-email" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email:
                </Label>
                <Input
                  id="accountant-email"
                  type="email"
                  defaultValue="accountant@injibara.edu.et"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-gray-200' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountant-worker-id" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Worker ID:
                </Label>
                <Input
                  id="accountant-worker-id"
                  type="text"
                  defaultValue="A001"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 border-gray-600 text-gray-400' 
                      : 'bg-gray-100 border-gray-300 text-gray-500'
                  }`}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountant-role" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Role:
                </Label>
                <Input
                  id="accountant-role"
                  type="text"
                  defaultValue="Accountant"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 border-gray-600 text-gray-400' 
                      : 'bg-gray-100 border-gray-300 text-gray-500'
                  }`}
                  disabled
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className={`h-10 px-5 text-sm rounded-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
                }`}
              >
                Update Profile
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Security Settings */}
      <div className={`rounded-xl overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
      }`}>
        <div className={`px-6 py-4 border-b flex items-center gap-3 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`size-8 rounded-lg flex items-center justify-center ${
            theme === 'dark' ? 'bg-red-500/20' : 'bg-red-100'
          }`}>
            <Lock className={`size-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
          </div>
          <h3 className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Security Settings
          </h3>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountant-current-password" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Current Password:
                </Label>
                <Input
                  id="accountant-current-password"
                  type="password"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-gray-200' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountant-new-password" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  New Password:
                </Label>
                <Input
                  id="accountant-new-password"
                  type="password"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-gray-200' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className={`h-10 px-5 text-sm rounded-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
                }`}
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Transaction Settings */}
      <div className={`rounded-xl overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
      }`}>
        <div className={`px-6 py-4 border-b flex items-center gap-3 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`size-8 rounded-lg flex items-center justify-center ${
            theme === 'dark' ? 'bg-teal-500/20' : 'bg-teal-100'
          }`}>
            <Database className={`size-4 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
          </div>
          <h3 className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Transaction Settings
          </h3>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="max-daily-withdrawal" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Max Daily Withdrawal (ETB):
                </Label>
                <Input
                  id="max-daily-withdrawal"
                  type="number"
                  defaultValue="50000"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-gray-200' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-savings-balance" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Min Savings Balance (ETB):
                </Label>
                <Input
                  id="min-savings-balance"
                  type="number"
                  defaultValue="1000"
                  className={`h-10 text-sm rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-gray-200' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className={`h-10 px-5 text-sm rounded-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
                }`}
              >
                Save Settings
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Notification Settings */}
      <div className={`rounded-xl overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
      }`}>
        <div className={`px-6 py-4 border-b flex items-center gap-3 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`size-8 rounded-lg flex items-center justify-center ${
            theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
          }`}>
            <Bell className={`size-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <h3 className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Notification Preferences
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox defaultChecked id="notif-large" />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Email notifications for large transactions (above ETB 20,000)
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox defaultChecked id="notif-overdue" />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Email notifications for overdue loan payments
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox id="notif-daily" />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Daily transaction summary reports
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox defaultChecked id="notif-monthly" />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Monthly financial reports
              </span>
            </label>
          </div>
          <div className="pt-5">
            <Button 
              className={`h-10 px-5 text-sm rounded-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
                  : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
              }`}
            >
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
