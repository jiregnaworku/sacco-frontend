import { Users, UserPlus, FileText, CheckCircle, DollarSign, Clock } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function SystemOverview() {
  const { theme } = useTheme();
  
  const stats = [
    { label: "Total Users Created", value: "15", icon: UserPlus, color: "from-blue-600 to-blue-700", darkColor: "from-blue-500 to-blue-600" },
    { label: "Total Members Registered", value: "342", icon: Users, color: "from-teal-600 to-teal-700", darkColor: "from-teal-500 to-teal-600" },
    { label: "Loans Submitted", value: "128", icon: FileText, color: "from-blue-500 to-teal-600", darkColor: "from-blue-400 to-teal-500" },
    { label: "Loans Approved", value: "87", icon: CheckCircle, color: "from-green-600 to-emerald-700", darkColor: "from-green-500 to-emerald-600" },
    { label: "Loans Repaid", value: "62", icon: DollarSign, color: "from-teal-600 to-cyan-700", darkColor: "from-teal-500 to-cyan-600" },
    { label: "Pending Loan Requests", value: "14", icon: Clock, color: "from-amber-600 to-orange-700", darkColor: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-xl mb-1" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Welcome back, Admin
        </h2>
        <p className={`text-sm ${theme === 'dark' ? 'text-blue-200' : 'text-blue-100'}`}>
          Here's what's happening with your financial platform today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              className={`rounded-xl p-6 shadow-sm border transition-shadow duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-teal-900/20'
                  : 'bg-white border-gray-100 hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`size-12 bg-gradient-to-br ${theme === 'dark' ? stat.darkColor : stat.color} rounded-xl flex items-center justify-center shadow-sm`}>
                  <Icon className="size-6 text-white stroke-[1.5]" />
                </div>
              </div>
              <p className={`text-3xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600 }}>
                {stat.value}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className={`rounded-xl p-6 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Quick Actions
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <button className={`p-4 border rounded-xl transition-all duration-200 text-left ${
            theme === 'dark'
              ? 'border-gray-700 hover:border-blue-500 hover:bg-blue-900/20'
              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
          }`}>
            <UserPlus className={`size-5 mb-2 stroke-[1.5] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Create User</p>
          </button>
          <button className={`p-4 border rounded-xl transition-all duration-200 text-left ${
            theme === 'dark'
              ? 'border-gray-700 hover:border-teal-500 hover:bg-teal-900/20'
              : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50'
          }`}>
            <Users className={`size-5 mb-2 stroke-[1.5] ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Add Member</p>
          </button>
          <button className={`p-4 border rounded-xl transition-all duration-200 text-left ${
            theme === 'dark'
              ? 'border-gray-700 hover:border-blue-500 hover:bg-blue-900/20'
              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
          }`}>
            <FileText className={`size-5 mb-2 stroke-[1.5] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>New Loan</p>
          </button>
          <button className={`p-4 border rounded-xl transition-all duration-200 text-left ${
            theme === 'dark'
              ? 'border-gray-700 hover:border-purple-500 hover:bg-purple-900/20'
              : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
          }`}>
            <CheckCircle className={`size-5 mb-2 stroke-[1.5] ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>View Reports</p>
          </button>
        </div>
      </div>
    </div>
  );
}