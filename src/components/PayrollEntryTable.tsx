import { Input } from "./ui/input";
import { Button } from "./ui/button";

const payrollData = [
  {
    memberId: "M001",
    name: "Abebe Bekele",
    voluntarySavings: "500.00",
    compulsorySavings: "300.00",
    loanRepayment: "850.00",
    sharePurchase: "200.00",
  },
  {
    memberId: "M002",
    name: "Tigist Alemu",
    voluntarySavings: "750.00",
    compulsorySavings: "300.00",
    loanRepayment: "0.00",
    sharePurchase: "500.00",
  },
  {
    memberId: "M003",
    name: "Dereje Haile",
    voluntarySavings: "400.00",
    compulsorySavings: "300.00",
    loanRepayment: "1200.00",
    sharePurchase: "100.00",
  },
  {
    memberId: "M004",
    name: "Meseret Tadesse",
    voluntarySavings: "600.00",
    compulsorySavings: "300.00",
    loanRepayment: "450.00",
    sharePurchase: "300.00",
  },
  {
    memberId: "M005",
    name: "Solomon Girma",
    voluntarySavings: "900.00",
    compulsorySavings: "300.00",
    loanRepayment: "0.00",
    sharePurchase: "400.00",
  },
  {
    memberId: "M006",
    name: "Hanna Fekadu",
    voluntarySavings: "550.00",
    compulsorySavings: "300.00",
    loanRepayment: "320.00",
    sharePurchase: "150.00",
  },
  {
    memberId: "M007",
    name: "Getachew Mengistu",
    voluntarySavings: "800.00",
    compulsorySavings: "300.00",
    loanRepayment: "650.00",
    sharePurchase: "250.00",
  },
  {
    memberId: "M008",
    name: "Bethlehem Kassaye",
    voluntarySavings: "700.00",
    compulsorySavings: "300.00",
    loanRepayment: "0.00",
    sharePurchase: "350.00",
  },
];

export function PayrollEntryTable() {
  return (
    <div className="border border-gray-400 bg-gray-50">
      {/* Section Header */}
      <div className="bg-gray-200 border-b border-gray-400 px-3 py-2 flex items-center justify-between">
        <h2 className="text-sm text-gray-900">Monthly Payroll Entry</h2>
        <span className="text-xs text-gray-600">November 2025</span>
      </div>

      {/* Table */}
      <div className="p-4">
        <div className="border border-gray-400 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-400">
                <th className="px-2 py-2 text-left text-xs text-gray-900 border-r border-gray-400">
                  Member ID
                </th>
                <th className="px-2 py-2 text-left text-xs text-gray-900 border-r border-gray-400">
                  Member Name
                </th>
                <th className="px-2 py-2 text-right text-xs text-gray-900 border-r border-gray-400">
                  Voluntary Savings
                </th>
                <th className="px-2 py-2 text-right text-xs text-gray-900 border-r border-gray-400">
                  Compulsory Savings
                </th>
                <th className="px-2 py-2 text-right text-xs text-gray-900 border-r border-gray-400">
                  Loan Repayment
                </th>
                <th className="px-2 py-2 text-right text-xs text-gray-900">
                  Share Purchase
                </th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((member, index) => (
                <tr 
                  key={member.memberId} 
                  className={`border-b border-gray-300 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-2 py-1 text-xs text-gray-900 border-r border-gray-300">
                    {member.memberId}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 border-r border-gray-300">
                    {member.name}
                  </td>
                  <td className="px-2 py-1 border-r border-gray-300">
                    <Input
                      type="text"
                      defaultValue={member.voluntarySavings}
                      className="text-right h-6 text-xs border-gray-400 bg-white"
                    />
                  </td>
                  <td className="px-2 py-1 border-r border-gray-300">
                    <Input
                      type="text"
                      defaultValue={member.compulsorySavings}
                      className="text-right h-6 text-xs border-gray-400 bg-gray-100"
                      readOnly
                    />
                  </td>
                  <td className="px-2 py-1 border-r border-gray-300">
                    <Input
                      type="text"
                      defaultValue={member.loanRepayment}
                      className="text-right h-6 text-xs border-gray-400 bg-white"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <Input
                      type="text"
                      defaultValue={member.sharePurchase}
                      className="text-right h-6 text-xs border-gray-400 bg-white"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-3">
          <Button 
            className="h-8 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
          >
            Save All Entries
          </Button>
        </div>
      </div>
    </div>
  );
}
