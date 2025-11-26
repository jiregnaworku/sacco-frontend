import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useTheme } from "../components/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function CreateUserForm() {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl border shadow-sm max-w-3xl ${
        theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}
    >
      {/* Form */}
      <div className="p-6">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullname"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Full Name
              </Label>
              <Input
                id="fullname"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400"
                    : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300"
                }`}
                placeholder="Enter full name"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label
                htmlFor="role"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Role
              </Label>
              <Select>
                <SelectTrigger
                  className={`h-10 text-sm rounded-lg ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700"
                      : "border-gray-200 bg-gray-50 focus:bg-white"
                  }`}
                >
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="accountant">Accountant</SelectItem>
                  <SelectItem value="committee">Committee</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Email or Worker ID */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Email or Worker ID
              </Label>
              <Input
                id="email"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400"
                    : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300"
                }`}
                placeholder="Enter email or worker ID"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className={`h-10 text-sm rounded-lg ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400"
                    : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300"
                }`}
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3 flex gap-3">
            <Button
              type="submit"
              className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Create User
            </Button>
            <Button
              type="button"
              variant="outline"
              className={`h-10 px-6 text-sm rounded-lg ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}