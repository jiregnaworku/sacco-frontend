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
import { Download, FileText } from "lucide-react";

export function ReportsSection() {
  const { theme } = useTheme();

  const reportData = [
    {
      month: "October 2025",
      loansSubmitted: 12,
      loansApproved: 9,
      totalRepayments: "ETB 85,400",
      newUsers: 2,
    },
    {
      month: "September 2025",
      loansSubmitted: 15,
      loansApproved: 11,
      totalRepayments: "ETB 92,100",
      newUsers: 1,
    },
    {
      month: "August 2025",
      loansSubmitted: 10,
      loansApproved: 8,
      totalRepayments: "ETB 78,600",
      newUsers: 3,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Report Controls */}
      <div
        className={`rounded-xl border shadow-sm p-6 ${
          theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
        }`}
      >
        <div className="flex items-end gap-4">
          <div className="space-y-2 flex-1 max-w-xs">
            <Label
              htmlFor="report-period"
              className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Select Period
            </Label>
            <Select>
              <SelectTrigger
                className={`h-10 text-sm rounded-lg ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700/50 text-white focus:bg-gray-700"
                    : "border-gray-200 bg-gray-50 focus:bg-white"
                }`}
              >
                <SelectValue placeholder="Select month or year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nov-2025">November 2025</SelectItem>
                <SelectItem value="oct-2025">October 2025</SelectItem>
                <SelectItem value="sep-2025">September 2025</SelectItem>
                <SelectItem value="aug-2025">August 2025</SelectItem>
                <SelectItem value="2025">Full Year 2025</SelectItem>
                <SelectItem value="2024">Full Year 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm flex items-center gap-2"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            <FileText className="size-4" />
            Generate Report
          </Button>
          <Button
            variant="outline"
            className={`h-10 px-6 text-sm rounded-lg flex items-center gap-2 ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600"
                : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
            }`}
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            <Download className="size-4" />
            Export to PDF
          </Button>
        </div>
      </div>

      {/* Report Table */}
      <div
        className={`rounded-xl border shadow-sm overflow-hidden ${
          theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
        }`}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`border-b ${
                theme === "dark"
                  ? "bg-gradient-to-r from-gray-700/50 to-gray-700/30 border-gray-700"
                  : "bg-gradient-to-r from-blue-50 to-teal-50 border-gray-200"
              }`}
            >
              <th
                className={`px-6 py-3 text-left text-sm border-r ${
                  theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-200"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Month
              </th>
              <th
                className={`px-6 py-3 text-center text-sm border-r ${
                  theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-200"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Loans Submitted
              </th>
              <th
                className={`px-6 py-3 text-center text-sm border-r ${
                  theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-200"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Loans Approved
              </th>
              <th
                className={`px-6 py-3 text-right text-sm border-r ${
                  theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-200"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Total Repayments
              </th>
              <th
                className={`px-6 py-3 text-center text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                New Users
              </th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, index) => (
              <tr
                key={row.month}
                className={`border-b transition-colors ${
                  theme === "dark"
                    ? `border-gray-700 hover:bg-teal-900/20 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-800/50"}`
                    : `border-gray-100 hover:bg-blue-50/30 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`
                }`}
              >
                <td
                  className={`px-6 py-3 text-sm border-r ${
                    theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-900 border-gray-100"
                  }`}
                >
                  {row.month}
                </td>
                <td
                  className={`px-6 py-3 text-sm text-center border-r ${
                    theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-900 border-gray-100"
                  }`}
                >
                  {row.loansSubmitted}
                </td>
                <td
                  className={`px-6 py-3 text-sm text-center border-r ${
                    theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-900 border-gray-100"
                  }`}
                >
                  {row.loansApproved}
                </td>
                <td
                  className={`px-6 py-3 text-sm text-right border-r ${
                    theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-900 border-gray-100"
                  }`}
                >
                  {row.totalRepayments}
                </td>
                <td
                  className={`px-6 py-3 text-sm text-center ${
                    theme === "dark" ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  {row.newUsers}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}