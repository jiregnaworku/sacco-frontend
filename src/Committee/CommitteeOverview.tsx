import { FileText, UserCheck, CheckCircle, XCircle, Clock, TrendingUp } from "lucide-react";

export function CommitteeOverview() {
  const stats = [
    {
      icon: FileText,
      label: "Pending Loan Requests",
      value: "8",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      iconColor: "text-yellow-700",
    },
    {
      icon: UserCheck,
      label: "Pending Member Approvals",
      value: "5",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      iconColor: "text-blue-700",
    },
    {
      icon: CheckCircle,
      label: "Approved This Month",
      value: "12",
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      iconColor: "text-green-700",
    },
    {
      icon: XCircle,
      label: "Rejected This Month",
      value: "3",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
      iconColor: "text-red-700",
    },
    {
      icon: Clock,
      label: "Avg. Review Time",
      value: "2.5 days",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-400",
      iconColor: "text-gray-700",
    },
    {
      icon: TrendingUp,
      label: "Total Approved Amount",
      value: "ETB 450,000",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400",
      iconColor: "text-purple-700",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <div className="border-b border-gray-300 pb-2">
        <h2 className="text-gray-900">Committee Dashboard</h2>
        <p className="text-xs text-gray-600 mt-1">Overview of pending approvals and committee activities</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`border ${stat.borderColor} ${stat.bgColor} p-3`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-700 mb-1">{stat.label}</p>
                  <p className="text-gray-900">{stat.value}</p>
                </div>
                <Icon className={`size-5 ${stat.iconColor}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="border border-gray-400 bg-gray-50">
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2">
          <h3 className="text-sm text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-4 grid grid-cols-2 gap-3">
          <button className="h-8 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 text-left">
            Review Pending Loans
          </button>
          <button className="h-8 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 text-left">
            Review Member Applications
          </button>
          <button className="h-8 px-4 text-xs bg-gray-200 hover:bg-gray-300 text-gray-900 border border-gray-500 text-left">
            Generate Monthly Report
          </button>
          <button className="h-8 px-4 text-xs bg-gray-200 hover:bg-gray-300 text-gray-900 border border-gray-500 text-left">
            View Approval History
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border border-gray-400 bg-gray-50">
        <div className="bg-gray-200 border-b border-gray-400 px-3 py-2">
          <h3 className="text-sm text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <div>
                <p className="text-xs text-gray-900">Loan Request #LN-2025-045 approved</p>
                <p className="text-xs text-gray-600">ETB 50,000 - John Doe</p>
              </div>
              <span className="text-xs text-gray-600">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <div>
                <p className="text-xs text-gray-900">Member Application #M-2025-123 approved</p>
                <p className="text-xs text-gray-600">Jane Smith - Teacher</p>
              </div>
              <span className="text-xs text-gray-600">5 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <div>
                <p className="text-xs text-gray-900">Loan Request #LN-2025-044 rejected</p>
                <p className="text-xs text-gray-600">ETB 100,000 - Mike Johnson</p>
              </div>
              <span className="text-xs text-gray-600">1 day ago</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-xs text-gray-900">Loan Request #LN-2025-043 approved</p>
                <p className="text-xs text-gray-600">ETB 30,000 - Sarah Williams</p>
              </div>
              <span className="text-xs text-gray-600">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
