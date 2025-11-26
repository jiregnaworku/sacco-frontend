import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { User, Lock, Bell, Database } from "lucide-react";

export function CommitteeSettings() {
  return (
    <div className="space-y-4">
      {/* Profile Settings */}
      <div className="border border-gray-400 bg-gray-50">
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2 flex items-center gap-2">
          <User className="size-4 text-gray-700" />
          <h3 className="text-sm text-gray-900">Profile Settings</h3>
        </div>
        <div className="p-4">
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="committee-fullname" className="text-xs text-gray-700">
                  Full Name:
                </Label>
                <Input
                  id="committee-fullname"
                  type="text"
                  defaultValue="Committee Member"
                  className="h-7 text-sm border-gray-400 bg-white"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="committee-email" className="text-xs text-gray-700">
                  Email:
                </Label>
                <Input
                  id="committee-email"
                  type="email"
                  defaultValue="committee@injibara.edu.et"
                  className="h-7 text-sm border-gray-400 bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="committee-worker-id" className="text-xs text-gray-700">
                  Worker ID:
                </Label>
                <Input
                  id="committee-worker-id"
                  type="text"
                  defaultValue="C001"
                  className="h-7 text-sm border-gray-400 bg-white"
                  disabled
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="committee-role" className="text-xs text-gray-700">
                  Role:
                </Label>
                <Input
                  id="committee-role"
                  type="text"
                  defaultValue="Committee"
                  className="h-7 text-sm border-gray-400 bg-white"
                  disabled
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className="h-7 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
              >
                Update Profile
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Security Settings */}
      <div className="border border-gray-400 bg-gray-50">
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2 flex items-center gap-2">
          <Lock className="size-4 text-gray-700" />
          <h3 className="text-sm text-gray-900">Security Settings</h3>
        </div>
        <div className="p-4">
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="committee-current-password" className="text-xs text-gray-700">
                  Current Password:
                </Label>
                <Input
                  id="committee-current-password"
                  type="password"
                  className="h-7 text-sm border-gray-400 bg-white"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="committee-new-password" className="text-xs text-gray-700">
                  New Password:
                </Label>
                <Input
                  id="committee-new-password"
                  type="password"
                  className="h-7 text-sm border-gray-400 bg-white"
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className="h-7 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Approval Settings */}
      <div className="border border-gray-400 bg-gray-50">
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2 flex items-center gap-2">
          <Database className="size-4 text-gray-700" />
          <h3 className="text-sm text-gray-900">Approval Thresholds</h3>
        </div>
        <div className="p-4">
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="max-loan-amount" className="text-xs text-gray-700">
                  Max Loan Amount (ETB):
                </Label>
                <Input
                  id="max-loan-amount"
                  type="number"
                  defaultValue="100000"
                  className="h-7 text-sm border-gray-400 bg-white"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="min-repayment-months" className="text-xs text-gray-700">
                  Min Repayment Period (months):
                </Label>
                <Input
                  id="min-repayment-months"
                  type="number"
                  defaultValue="6"
                  className="h-7 text-sm border-gray-400 bg-white"
                />
              </div>
            </div>
            <div className="pt-2">
              <Button 
                type="submit"
                className="h-7 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
              >
                Save Settings
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="border border-gray-400 bg-gray-50">
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2 flex items-center gap-2">
          <Bell className="size-4 text-gray-700" />
          <h3 className="text-sm text-gray-900">Notification Preferences</h3>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                defaultChecked 
                className="border-gray-400" 
              />
              <span className="text-xs text-gray-900">Email notifications for new loan requests</span>
            </label>
            <label className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                defaultChecked 
                className="border-gray-400" 
              />
              <span className="text-xs text-gray-900">Email notifications for new member applications</span>
            </label>
            <label className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                className="border-gray-400" 
              />
              <span className="text-xs text-gray-900">Daily approval summary reports</span>
            </label>
            <label className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                defaultChecked
                className="border-gray-400" 
              />
              <span className="text-xs text-gray-900">Reminders for pending reviews</span>
            </label>
          </div>
          <div className="pt-3">
            <Button 
              className="h-7 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
            >
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
