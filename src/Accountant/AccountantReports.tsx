import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useTheme } from "../components/ThemeContext";
import { FileDown, FileBarChart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const financialSummary = [
  { month: "October 2025", totalDeposits: "285,400", totalWithdrawals: "142,800", netChange: "+142,600", loanPayments: "95,200" },
  { month: "September 2025", totalDeposits: "310,200", totalWithdrawals: "156,900", netChange: "+153,300", loanPayments: "102,400" },
  { month: "August 2025", totalDeposits: "268,900", totalWithdrawals: "138,200", netChange: "+130,700", loanPayments: "88,600" },
];

export function AccountantReports() {
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl overflow-hidden border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
        : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
    }`}>
      <div className="p-6 space-y-5">
        {/* Report Controls */}
        <div className="flex items-end gap-3">
          <div className="flex-1 space-y-2">
            <Label htmlFor="accountant-report-period" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Select Period:
            </Label>
            <Select>
              <SelectTrigger className={`h-10 text-sm rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-gray-200' 
                  : 'bg-white border-gray-300'
              }`}>
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
            className={`h-10 px-5 text-sm rounded-xl flex items-center gap-2 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
                : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
            }`}
          >
            <FileBarChart className="size-4" />
            Generate Report
          </Button>
          <Button 
            variant="outline"
            className={`h-10 px-5 text-sm rounded-xl flex items-center gap-2 border ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-200'
                : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'
            }`}
          >
            <FileDown className="size-4" />
            Export to Excel
          </Button>
        </div>

        {/* Financial Summary Table */}
        <div className={`rounded-xl overflow-hidden border ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <table className="w-full">
            <thead>
              <tr className={`border-b ${
                theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <th className={`px-6 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Month
                </th>
                <th className={`px-6 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Deposits (ETB)
                </th>
                <th className={`px-6 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Withdrawals (ETB)
                </th>
                <th className={`px-6 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Net Change (ETB)
                </th>
                <th className={`px-6 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Loan Payments (ETB)
                </th>
              </tr>
            </thead>
            <tbody>
              {financialSummary.map((row, index) => (
                <tr 
                  key={row.month}
                  className={`border-b ${
                    theme === 'dark' 
                      ? 'border-gray-700/50' 
                      : index % 2 === 0 ? 'bg-white border-gray-100' : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {row.month}
                  </td>
                  <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {row.totalDeposits}
                  </td>
                  <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {row.totalWithdrawals}
                  </td>
                  <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                    {row.netChange}
                  </td>
                  <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {row.loanPayments}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
