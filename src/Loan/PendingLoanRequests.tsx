import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useTheme } from "../components/ThemeContext";
import { CheckCircle, XCircle, FileText, Calendar, Clock, User, DollarSign } from "lucide-react";

const loanRequests = [
  {
    id: "LR001",
    memberId: "M045",
    memberName: "Abebe Bekele",
    amount: "50,000",
    purpose: "Home renovation",
    duration: "24 months",
    submittedDate: "Nov 15, 2025",
    priority: "medium",
  },
  {
    id: "LR002",
    memberId: "M078",
    memberName: "Tigist Alemu",
    amount: "75,000",
    purpose: "Business expansion",
    duration: "36 months",
    submittedDate: "Nov 16, 2025",
    priority: "high",
  },
  {
    id: "LR003",
    memberId: "M132",
    memberName: "Dereje Haile",
    amount: "30,000",
    purpose: "Medical expenses",
    duration: "12 months",
    submittedDate: "Nov 17, 2025",
    priority: "low",
  },
  {
    id: "LR004",
    memberId: "M089",
    memberName: "Meseret Tadesse",
    amount: "60,000",
    purpose: "Education fees",
    duration: "18 months",
    submittedDate: "Nov 18, 2025",
    priority: "medium",
  },
];

export function PendingLoanRequests() {
  const { theme } = useTheme();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return theme === 'dark' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return theme === 'dark' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-amber-50 text-amber-700 border-amber-200';
      case 'low':
        return theme === 'dark' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-50 text-green-700 border-green-200';
      default:
        return theme === 'dark' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`rounded-xl p-6 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Pending Loan Requests
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Review and approve loan applications from members
            </p>
          </div>
          <div className={`px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-700'
          }`}>
            <p className="text-sm font-medium">{loanRequests.length} Pending</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className={`shadow-sm border transition-shadow duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-red-900/20'
            : 'bg-white border-gray-100 hover:shadow-md'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`size-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-50 text-red-600'
              }`}>
                <FileText className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {loanRequests.filter(r => r.priority === 'high').length}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>High Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`shadow-sm border transition-shadow duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-amber-900/20'
            : 'bg-white border-gray-100 hover:shadow-md'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`size-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-50 text-amber-600'
              }`}>
                <Clock className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {loanRequests.filter(r => r.priority === 'medium').length}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Medium Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`shadow-sm border transition-shadow duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-green-900/20'
            : 'bg-white border-gray-100 hover:shadow-md'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`size-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600'
              }`}>
                <CheckCircle className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {loanRequests.filter(r => r.priority === 'low').length}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Low Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`shadow-sm border transition-shadow duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-900/20'
            : 'bg-white border-gray-100 hover:shadow-md'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`size-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                <DollarSign className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {loanRequests.reduce((sum, r) => sum + parseInt(r.amount.replace(/,/g, '')), 0).toLocaleString()}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Amount</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Loan Requests Table */}
      <Card className={`shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Loan Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`rounded-lg border overflow-hidden ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <table className="w-full">
              <thead>
                <tr className={`${
                  theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'
                }`}>
                  <th className={`px-4 py-3 text-left text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Request ID</th>
                  <th className={`px-4 py-3 text-left text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Member</th>
                  <th className={`px-4 py-3 text-left text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Amount</th>
                  <th className={`px-4 py-3 text-left text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Purpose</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Duration</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Priority</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loanRequests.map((request) => (
                  <tr 
                    key={request.id} 
                    className={`border-t transition-colors ${
                      theme === 'dark' 
                        ? 'border-gray-800 hover:bg-gray-800/50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <td className={`px-4 py-3 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                    }`}>{request.id}</td>
                    <td className={`px-4 py-3 text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`size-8 rounded-full flex items-center justify-center ${
                          theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                        }`}>
                          <User className="size-4" />
                        </div>
                        <div>
                          <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {request.memberName}
                          </p>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                            {request.memberId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`px-4 py-3 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                    }`}>ETB {request.amount}</td>
                    <td className={`px-4 py-3 text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                    }`}>{request.purpose}</td>
                    <td className={`px-4 py-3 text-sm text-center ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="size-4" />
                        {request.duration}
                      </div>
                    </td>
                    <td className={`px-4 py-3 text-sm text-center`}>
                      <Badge className={`text-xs ${getPriorityColor(request.priority)}`}>
                        {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                      </Badge>
                    </td>
                    <td className={`px-4 py-3 text-sm text-center`}>
                      <div className="flex items-center gap-2 justify-center">
                        <Button 
                          size="sm"
                          className={`h-8 px-3 text-xs transition-all duration-200 ${
                            theme === 'dark'
                              ? 'bg-green-600 hover:bg-green-700 text-white border-green-700'
                              : 'bg-green-600 hover:bg-green-700 text-white border-green-700'
                          }`}
                        >
                          <CheckCircle className="size-3 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className={`h-8 px-3 text-xs transition-all duration-200 ${
                            theme === 'dark'
                              ? 'border-red-700 bg-red-600/20 hover:bg-red-600/30 text-red-400'
                              : 'border-red-200 bg-red-50 hover:bg-red-100 text-red-700'
                          }`}
                        >
                          <XCircle className="size-3 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}