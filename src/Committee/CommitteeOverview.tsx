import { FileText, UserCheck, CheckCircle, XCircle, Clock, TrendingUp, Eye, ThumbsUp, ThumbsDown } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { Button } from "../components/ui/button";

export function CommitteeOverview() {
  const { theme } = useTheme();
  
  const stats = [
    { label: "Pending Loan Requests", value: "8", icon: FileText, color: "from-amber-600 to-orange-700", darkColor: "from-amber-500 to-orange-600" },
    { label: "Pending Member Approvals", value: "5", icon: UserCheck, color: "from-blue-600 to-blue-700", darkColor: "from-blue-500 to-blue-600" },
    { label: "Approved This Month", value: "12", icon: CheckCircle, color: "from-green-600 to-emerald-700", darkColor: "from-green-500 to-emerald-600" },
    { label: "Rejected This Month", value: "3", icon: XCircle, color: "from-red-600 to-pink-700", darkColor: "from-red-500 to-pink-600" },
    { label: "Avg. Review Time", value: "2.5 days", icon: Clock, color: "from-purple-600 to-violet-700", darkColor: "from-purple-500 to-violet-600" },
    { label: "Total Approved Amount", value: "ETB 450K", icon: TrendingUp, color: "from-teal-600 to-cyan-700", darkColor: "from-teal-500 to-cyan-600" },
  ];

  const recentActivity = [
    { id: "LN-2025-045", type: "loan", action: "approved", amount: "ETB 50,000", member: "John Doe", time: "2 hours ago" },
    { id: "M-2025-123", type: "member", action: "approved", member: "Jane Smith", role: "Teacher", time: "5 hours ago" },
    { id: "LN-2025-044", type: "loan", action: "rejected", amount: "ETB 100,000", member: "Mike Johnson", time: "1 day ago" },
    { id: "LN-2025-043", type: "loan", action: "approved", amount: "ETB 30,000", member: "Sarah Williams", time: "1 day ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className={`rounded-xl p-6 shadow-lg ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-blue-600 to-teal-600'
          : 'bg-gradient-to-r from-gray-600 to-gray-700'
      }`}>
        <h2 className="text-white text-xl mb-1" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Committee Dashboard
        </h2>
        <p className={`text-sm ${theme === 'dark' ? 'text-blue-200' : 'text-gray-200'}`}>
          Overview of pending approvals and committee activities
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
        <div className="grid grid-cols-2 gap-4">
          <Button 
            className={`p-4 h-auto justify-start transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-600/30'
                : 'bg-gray-600/20 hover:bg-gray-600/30 text-gray-700 border border-gray-600/30'
            }`}
          >
            <FileText className="size-5 mr-3 stroke-[1.5]" />
            <div className="text-left">
              <p className="font-medium">Review Pending Loans</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-gray-600'} mt-1`}>8 requests awaiting review</p>
            </div>
          </Button>
          
          <Button 
            className={`p-4 h-auto justify-start transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-600/30'
                : 'bg-gray-600/20 hover:bg-gray-600/30 text-gray-700 border border-gray-600/30'
            }`}
          >
            <UserCheck className="size-5 mr-3 stroke-[1.5]" />
            <div className="text-left">
              <p className="font-medium">Review Member Applications</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-teal-400' : 'text-gray-600'} mt-1`}>5 applications pending</p>
            </div>
          </Button>
          
          <Button 
            variant="outline"
            className={`p-4 h-auto justify-start transition-all duration-200 ${
              theme === 'dark'
                ? 'border-gray-700 hover:bg-gray-700 text-gray-300'
                : 'border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            <Eye className="size-5 mr-3 stroke-[1.5]" />
            <div className="text-left">
              <p className="font-medium">Generate Monthly Report</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>View committee statistics</p>
            </div>
          </Button>
          
          <Button 
            variant="outline"
            className={`p-4 h-auto justify-start transition-all duration-200 ${
              theme === 'dark'
                ? 'border-gray-700 hover:bg-gray-700 text-gray-300'
                : 'border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            <Clock className="size-5 mr-3 stroke-[1.5]" />
            <div className="text-left">
              <p className="font-medium">View Approval History</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Browse past decisions</p>
            </div>
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`rounded-xl p-6 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Recent Activity
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-900/50'
                  : 'border-gray-200 bg-gray-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-full flex items-center justify-center ${
                  activity.action === 'approved' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-red-500/20 text-red-500'
                } ${theme === 'dark' ? '' : 'bg-opacity-10'}`}>
                  {activity.action === 'approved' ? (
                    <ThumbsUp className="size-5 stroke-[1.5]" />
                  ) : (
                    <ThumbsDown className="size-5 stroke-[1.5]" />
                  )}
                </div>
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {activity.type === 'loan' ? `Loan Request ${activity.id}` : `Member Application ${activity.id}`} {activity.action}
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {activity.amount && `${activity.amount} - `}{activity.member}
                    {activity.role && ` - ${activity.role}`}
                  </p>
                </div>
              </div>
              <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
