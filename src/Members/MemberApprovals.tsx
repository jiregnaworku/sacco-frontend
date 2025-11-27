import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useTheme } from "../components/ThemeContext";
import { CheckCircle, XCircle, UserCheck, User, Calendar, DollarSign, Building } from "lucide-react";

const memberRequests = [
  {
    id: "MR001",
    memberId: "M345",
    fullName: "Solomon Girma",
    staffType: "Teacher",
    registrationFee: "Yes",
    shareUnits: "10",
    submittedDate: "Nov 18, 2025",
    priority: "high",
  },
  {
    id: "MR002",
    memberId: "M346",
    fullName: "Hanna Fekadu",
    staffType: "Admin",
    registrationFee: "Yes",
    shareUnits: "5",
    submittedDate: "Nov 19, 2025",
    priority: "medium",
  },
  {
    id: "MR003",
    memberId: "M347",
    fullName: "Getachew Mengistu",
    staffType: "Teacher",
    registrationFee: "No",
    shareUnits: "8",
    submittedDate: "Nov 19, 2025",
    priority: "low",
  },
];

export function MemberApprovals() {
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

  const getStaffTypeColor = (staffType: string) => {
    switch (staffType) {
      case 'Teacher':
        return theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Admin':
        return theme === 'dark' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200';
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
              Member Approvals
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Review and approve new member applications
            </p>
          </div>
          <div className={`px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-50 text-teal-700'
          }`}>
            <p className="text-sm font-medium">{memberRequests.length} Pending</p>
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
                <UserCheck className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {memberRequests.filter(r => r.priority === 'high').length}
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
                <Calendar className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {memberRequests.filter(r => r.priority === 'medium').length}
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
                  {memberRequests.filter(r => r.priority === 'low').length}
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
                  {memberRequests.reduce((sum, r) => sum + parseInt(r.shareUnits), 0)}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Shares</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Member Requests Table */}
      <Card className={`shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Member Applications
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
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Staff Type</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Reg. Fee</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Share Units</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Priority</th>
                  <th className={`px-4 py-3 text-center text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {memberRequests.map((request) => (
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
                          theme === 'dark' ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-50 text-teal-600'
                        }`}>
                          <User className="size-4" />
                        </div>
                        <div>
                          <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {request.fullName}
                          </p>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                            {request.memberId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`px-4 py-3 text-sm text-center`}>
                      <Badge className={`text-xs ${getStaffTypeColor(request.staffType)}`}>
                        <Building className="size-3 mr-1" />
                        {request.staffType}
                      </Badge>
                    </td>
                    <td className={`px-4 py-3 text-sm text-center`}>
                      <Badge className={`text-xs ${
                        request.registrationFee === "Yes"
                          ? theme === 'dark' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : 'bg-green-50 text-green-700 border-green-200'
                          : theme === 'dark'
                            ? 'bg-red-500/20 text-red-400 border-red-500/30'
                            : 'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        {request.registrationFee === "Yes" ? "Paid" : "Unpaid"}
                      </Badge>
                    </td>
                    <td className={`px-4 py-3 text-sm text-center ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      <div className="flex items-center justify-center gap-1">
                        <DollarSign className="size-4" />
                        {request.shareUnits}
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