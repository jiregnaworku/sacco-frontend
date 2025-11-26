import { Button } from "../components/ui/button";
import { useTheme } from "../components/ThemeContext";

const activeLoans = [
  { loanId: "LN-001", memberId: "M045", memberName: "Abebe Bekele", loanAmount: "50,000", outstandingBalance: "35,000", monthlyPayment: "2,500", nextDueDate: "Dec 01, 2025", status: "Active" },
  { loanId: "LN-002", memberId: "M078", memberName: "Tigist Alemu", loanAmount: "75,000", outstandingBalance: "60,000", monthlyPayment: "3,500", nextDueDate: "Dec 05, 2025", status: "Active" },
  { loanId: "LN-003", memberId: "M132", memberName: "Dereje Haile", loanAmount: "30,000", outstandingBalance: "18,000", monthlyPayment: "2,000", nextDueDate: "Dec 10, 2025", status: "Active" },
  { loanId: "LN-004", memberId: "M089", memberName: "Meseret Tadesse", loanAmount: "60,000", outstandingBalance: "48,000", monthlyPayment: "3,000", nextDueDate: "Nov 28, 2025", status: "Overdue" },
];

export function LoanManagementTable() {
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl overflow-hidden border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
        : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
    }`}>
      <div className="p-6">
        <div className={`rounded-xl overflow-hidden border ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${
                  theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
                }`}>
                  <th className={`px-4 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Loan ID
                  </th>
                  <th className={`px-4 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Member ID
                  </th>
                  <th className={`px-4 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Member Name
                  </th>
                  <th className={`px-4 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Loan Amount
                  </th>
                  <th className={`px-4 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Outstanding
                  </th>
                  <th className={`px-4 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Monthly Payment
                  </th>
                  <th className={`px-4 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Next Due
                  </th>
                  <th className={`px-4 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Status
                  </th>
                  <th className={`px-4 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeLoans.map((loan, index) => (
                  <tr 
                    key={loan.loanId}
                    className={`border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}
                  >
                    <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.loanId}
                    </td>
                    <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.memberId}
                    </td>
                    <td className={`px-4 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.memberName}
                    </td>
                    <td className={`px-4 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.loanAmount}
                    </td>
                    <td className={`px-4 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.outstandingBalance}
                    </td>
                    <td className={`px-4 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.monthlyPayment}
                    </td>
                    <td className={`px-4 py-3 text-sm text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {loan.nextDueDate}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        loan.status === "Active" 
                          ? theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                          : theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                      }`}>
                        {loan.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-center">
                        <Button 
                          size="sm"
                          className={`h-8 px-4 text-xs rounded-lg ${
                            theme === 'dark'
                              ? 'bg-blue-600 hover:bg-blue-500 text-white'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          Payment
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className={`h-8 px-4 text-xs rounded-lg border ${
                            theme === 'dark'
                              ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-200'
                              : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'
                          }`}
                        >
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
