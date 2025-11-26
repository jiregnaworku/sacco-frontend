import { DollarSign, Users, PiggyBank, TrendingUp, CreditCard, FileText } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

export function AccountantOverview() {
  const { theme } = useTheme();

  const stats = [
    {
      icon: DollarSign,
      label: "Total Deposits (This Month)",
      value: "ETB 285,400",
      trend: "+12.5%",
      trendPositive: true,
      bgGradient: "from-green-500 to-emerald-600",
      iconBg: theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50',
      iconColor: theme === 'dark' ? 'text-green-400' : 'text-green-600',
    },
    {
      icon: CreditCard,
      label: "Total Withdrawals (This Month)",
      value: "ETB 142,800",
      trend: "-3.2%",
      trendPositive: false,
      bgGradient: "from-red-500 to-rose-600",
      iconBg: theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50',
      iconColor: theme === 'dark' ? 'text-red-400' : 'text-red-600',
    },
    {
      icon: Users,
      label: "Active Members",
      value: "342",
      trend: "+8",
      trendPositive: true,
      bgGradient: "from-blue-500 to-blue-600",
      iconBg: theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50',
      iconColor: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
    },
    {
      icon: PiggyBank,
      label: "Total Savings Balance",
      value: "ETB 1,245,600",
      trend: "+18.3%",
      trendPositive: true,
      bgGradient: "from-purple-500 to-purple-600",
      iconBg: theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50',
      iconColor: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
    },
    {
      icon: TrendingUp,
      label: "Outstanding Loans",
      value: "ETB 890,200",
      trend: "+5.7%",
      trendPositive: true,
      bgGradient: "from-teal-500 to-teal-600",
      iconBg: theme === 'dark' ? 'bg-teal-500/10' : 'bg-teal-50',
      iconColor: theme === 'dark' ? 'text-teal-400' : 'text-teal-600',
    },
    {
      icon: FileText,
      label: "Pending Transactions",
      value: "23",
      trend: "Review needed",
      trendPositive: null,
      bgGradient: "from-orange-500 to-orange-600",
      iconBg: theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-50',
      iconColor: theme === 'dark' ? 'text-orange-400' : 'text-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className={`pb-5 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <h2 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Accountant Dashboard</h2>
        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Overview of financial data and transactions
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`rounded-xl p-6 transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600 shadow-lg shadow-black/20'
                  : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg shadow-gray-900/5 hover:shadow-xl'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                  <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                  {stat.trendPositive !== null && (
                    <span className={`text-xs ${
                      stat.trendPositive 
                        ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        : theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>
                      {stat.trend}
                    </span>
                  )}
                  {stat.trendPositive === null && (
                    <span className={`text-xs ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                      {stat.trend}
                    </span>
                  )}
                </div>
                <div className={`size-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`size-6 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className={`rounded-xl overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
      }`}>
        <div className={`px-6 py-4 border-b ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <h3 className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Quick Actions
          </h3>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          <button className={`h-11 px-5 text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
              : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
          }`}>
            Record Savings Deposit
          </button>
          <button className={`h-11 px-5 text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
              : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
          }`}>
            Process Loan Payment
          </button>
          <button className={`h-11 px-5 text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border ${
            theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-200'
              : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'
          }`}>
            Generate Monthly Report
          </button>
          <button className={`h-11 px-5 text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border ${
            theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-200'
              : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'
          }`}>
            View Transaction History
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className={`rounded-xl overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
          : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
      }`}>
        <div className={`px-6 py-4 border-b ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <h3 className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Recent Transactions
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${
                theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <th className={`px-6 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Date
                </th>
                <th className={`px-6 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Member ID
                </th>
                <th className={`px-6 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Type
                </th>
                <th className={`px-6 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Amount (ETB)
                </th>
                <th className={`px-6 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Nov 20, 2025
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  M045
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Savings Deposit
                </td>
                <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  5,000
                </td>
                <td className="px-6 py-3 text-sm text-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                  }`}>
                    Completed
                  </span>
                </td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Nov 20, 2025
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  M078
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Loan Payment
                </td>
                <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  3,200
                </td>
                <td className="px-6 py-3 text-sm text-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                  }`}>
                    Completed
                  </span>
                </td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Nov 19, 2025
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  M132
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Share Purchase
                </td>
                <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  10,000
                </td>
                <td className="px-6 py-3 text-sm text-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                  }`}>
                    Completed
                  </span>
                </td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Nov 19, 2025
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  M089
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Withdrawal
                </td>
                <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  8,500
                </td>
                <td className="px-6 py-3 text-sm text-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Nov 18, 2025
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  M156
                </td>
                <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  Savings Deposit
                </td>
                <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                  7,200
                </td>
                <td className="px-6 py-3 text-sm text-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                  }`}>
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
