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

export function AddMemberForm() {
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
                htmlFor="member-fullname"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Full Name
              </Label>
              <Input
                id="member-fullname"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400"
                    : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300"
                }`}
                placeholder="Enter full name"
              />
            </div>

            {/* Staff Type */}
            <div className="space-y-2">
              <Label
                htmlFor="staff-type"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Staff Type
              </Label>
              <Select>
                <SelectTrigger
                  className={`h-10 text-sm rounded-lg ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700"
                      : "border-gray-200 bg-gray-50 focus:bg-white"
                  }`}
                >
                  <SelectValue placeholder="Select staff type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Member ID */}
            <div className="space-y-2">
              <Label
                htmlFor="member-id"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Member ID
              </Label>
              <Input
                id="member-id"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400"
                    : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300"
                }`}
                placeholder="Enter member ID"
              />
            </div>

            {/* Registration Fee Paid */}
            <div className="space-y-2">
              <Label
                htmlFor="reg-fee"
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Registration Fee Paid
              </Label>
              <Select>
                <SelectTrigger
                  className={`h-10 text-sm rounded-lg ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700"
                      : "border-gray-200 bg-gray-50 focus:bg-white"
                  }`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Share Units */}
          <div className="space-y-2">
            <Label
              htmlFor="share-units"
              className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Share Units
            </Label>
            <Input
              id="share-units"
              type="number"
              className={`h-10 text-sm rounded-lg ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400"
                  : "border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300"
              }`}
              placeholder="Enter number of share units"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-3 flex gap-3">
            <Button
              type="submit"
              className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Add Member
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