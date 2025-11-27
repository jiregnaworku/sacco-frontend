import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import { useTheme } from "../components/ThemeContext";
import { User, Lock, Bell, Database, Save, Shield } from "lucide-react";

export function CommitteeSettings() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Settings Header */}
      <div className={`rounded-xl p-6 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <h2 className={`text-xl mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Committee Settings
        </h2>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage your profile, security, and committee preferences
        </p>
      </div>

      {/* Profile Settings */}
      <Card className={`shadow-sm border transition-shadow duration-200 ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div className={`size-8 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}>
              <User className="size-4 stroke-[1.5]" />
            </div>
            Profile Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="committee-fullname" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </Label>
                <Input
                  id="committee-fullname"
                  type="text"
                  defaultValue="Committee Member"
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500' 
                      : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="committee-email" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </Label>
                <Input
                  id="committee-email"
                  type="email"
                  defaultValue="committee@injibara.edu.et"
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500' 
                      : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400'
                  }`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="committee-worker-id" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Worker ID
                </Label>
                <Input
                  id="committee-worker-id"
                  type="text"
                  defaultValue="C001"
                  disabled
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-gray-500' 
                      : 'border-gray-200 bg-gray-50 text-gray-500'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="committee-role" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Role
                </Label>
                <Input
                  id="committee-role"
                  type="text"
                  defaultValue="Committee"
                  disabled
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-gray-500' 
                      : 'border-gray-200 bg-gray-50 text-gray-500'
                  }`}
                />
              </div>
            </div>
            <div className="pt-4">
              <Button 
                type="submit"
                className={`h-10 px-6 text-sm transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700 text-white border-blue-700'
                }`}
              >
                <Save className="size-4 mr-2" />
                Update Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className={`shadow-sm border transition-shadow duration-200 ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div className={`size-8 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600'
            }`}>
              <Shield className="size-4 stroke-[1.5]" />
            </div>
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="committee-current-password" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Current Password
                </Label>
                <Input
                  id="committee-current-password"
                  type="password"
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500' 
                      : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="Enter current password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="committee-new-password" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  New Password
                </Label>
                <Input
                  id="committee-new-password"
                  type="password"
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500' 
                      : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="Enter new password"
                />
              </div>
            </div>
            <div className="pt-4">
              <Button 
                type="submit"
                className={`h-10 px-6 text-sm transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-green-600 hover:bg-green-700 text-white border-green-700'
                    : 'bg-green-600 hover:bg-green-700 text-white border-green-700'
                }`}
              >
                <Lock className="size-4 mr-2" />
                Change Password
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Approval Settings */}
      <Card className={`shadow-sm border transition-shadow duration-200 ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div className={`size-8 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-50 text-purple-600'
            }`}>
              <Database className="size-4 stroke-[1.5]" />
            </div>
            Approval Thresholds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="max-loan-amount" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Maximum Loan Amount (ETB)
                </Label>
                <Input
                  id="max-loan-amount"
                  type="number"
                  defaultValue="100000"
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500' 
                      : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400'
                  }`}
                />
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  Maximum amount committee members can approve
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-repayment-months" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Minimum Repayment Period (months)
                </Label>
                <Input
                  id="min-repayment-months"
                  type="number"
                  defaultValue="6"
                  className={`h-10 text-sm ${
                    theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900/50 text-white placeholder:text-gray-500' 
                      : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400'
                  }`}
                />
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  Minimum allowed repayment duration
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                type="submit"
                className={`h-10 px-6 text-sm transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-700'
                    : 'bg-purple-600 hover:bg-purple-700 text-white border-purple-700'
                }`}
              >
                <Database className="size-4 mr-2" />
                Save Settings
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className={`shadow-sm border transition-shadow duration-200 ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div className={`size-8 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-50 text-amber-600'
            }`}>
              <Bell className="size-4 stroke-[1.5]" />
            </div>
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className={`flex items-center justify-between p-4 rounded-lg border ${
              theme === 'dark' ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                <Bell className={`size-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Email notifications for new loan requests
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Get notified when new loan applications are submitted
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className={`flex items-center justify-between p-4 rounded-lg border ${
              theme === 'dark' ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                <User className={`size-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Email notifications for new member applications
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Receive alerts for pending member approvals
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className={`flex items-center justify-between p-4 rounded-lg border ${
              theme === 'dark' ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                <Database className={`size-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Daily approval summary reports
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Get daily digest of committee activities
                  </p>
                </div>
              </div>
              <Switch />
            </div>
            
            <div className={`flex items-center justify-between p-4 rounded-lg border ${
              theme === 'dark' ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                <Bell className={`size-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Reminders for pending reviews
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Get reminders about items needing your attention
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
          <div className="pt-4">
            <Button 
              className={`h-10 px-6 text-sm transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-amber-600 hover:bg-amber-700 text-white border-amber-700'
                  : 'bg-amber-600 hover:bg-amber-700 text-white border-amber-700'
              }`}
            >
              <Bell className="size-4 mr-2" />
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
