import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useTheme } from "../components/ThemeContext";
import { FileCheck, XCircle, Users, Download, Calendar } from "lucide-react";

const approvedLoans = [
  { id: "LR015", memberId: "M023", name: "Almaz Tesfaye", amount: "45,000", approvedDate: "Nov 10, 2025" },
  { id: "LR018", memberId: "M056", name: "Yohannes Mekonnen", amount: "60,000", approvedDate: "Nov 12, 2025" },
  { id: "LR021", memberId: "M089", name: "Rahel Kassaye", amount: "35,000", approvedDate: "Nov 14, 2025" },
];

const rejectedLoans = [
  { id: "LR019", memberId: "M067", name: "Bekele Worku", amount: "80,000", reason: "Insufficient collateral", rejectedDate: "Nov 11, 2025" },
  { id: "LR022", memberId: "M098", name: "Selam Desta", amount: "90,000", reason: "High debt ratio", rejectedDate: "Nov 13, 2025" },
];

const memberActivity = [
  { month: "October 2025", newMembers: 15, approvedMembers: 13, rejectedMembers: 2 },
  { month: "September 2025", newMembers: 18, approvedMembers: 16, rejectedMembers: 2 },
  { month: "August 2025", newMembers: 12, approvedMembers: 11, rejectedMembers: 1 },
];

export function CommitteeReports() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <div className={`rounded-xl p-6 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Committee Reports
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Generate and view committee-specific reports and analytics
            </p>
          </div>
          
          {/* Report Controls */}
          <div className="flex items-end gap-3">
            <div className="space-y-1">
              <Label htmlFor="report-period" className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Select Period:
              </Label>
              <Select>
                <SelectTrigger className={`h-9 w-48 text-sm border ${
                  theme === 'dark' ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-200 bg-white'
                }`}>
                  <SelectValue placeholder="Select month or year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nov-2025">November 2025</SelectItem>
                  <SelectItem value="oct-2025">October 2025</SelectItem>
                  <SelectItem value="sep-2025">September 2025</SelectItem>
                  <SelectItem value="aug-2025">August 2025</SelectItem>
                  <SelectItem value="2025">Full Year 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className={`h-9 px-4 text-sm transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-700'
                  : 'bg-gray-600 hover:bg-gray-700 text-white border-gray-700'
              }`}
            >
              <Download className="size-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </div>

      {/* Report Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
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
                <FileCheck className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {approvedLoans.length}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Approved Loans</p>
              </div>
            </div>
          </CardContent>
        </Card>

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
                <XCircle className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {rejectedLoans.length}
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Rejected Loans</p>
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
                theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-600/20 text-gray-600'
              }`}>
                <Users className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  45
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Members</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`shadow-sm border transition-shadow duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-900/20'
            : 'bg-white border-gray-100 hover:shadow-md'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`size-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-50 text-purple-600'
              }`}>
                <Calendar className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  3
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Months Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabbed Reports */}
      <Card className={`shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <CardHeader className="pb-4">
          <CardTitle className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Detailed Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="approved" className="w-full">
            <div className={`px-6 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <TabsList className="bg-transparent h-auto p-0 gap-0">
                <TabsTrigger 
                  value="approved" 
                  className={`data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-4 py-3 text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-400 data-[state=active]:text-white hover:text-gray-300'
                      : 'text-gray-600 data-[state=active]:text-gray-900 hover:text-gray-800'
                  }`}
                >
                  <FileCheck className="size-4 mr-2" />
                  Approved Loans
                </TabsTrigger>
                <TabsTrigger 
                  value="rejected"
                  className={`data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-4 py-3 text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-400 data-[state=active]:text-white hover:text-gray-300'
                      : 'text-gray-600 data-[state=active]:text-gray-900 hover:text-gray-800'
                  }`}
                >
                  <XCircle className="size-4 mr-2" />
                  Rejected Loans
                </TabsTrigger>
                <TabsTrigger 
                  value="members"
                  className={`data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-4 py-3 text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-400 data-[state=active]:text-white hover:text-gray-300'
                      : 'text-gray-600 data-[state=active]:text-gray-900 hover:text-gray-800'
                  }`}
                >
                  <Users className="size-4 mr-2" />
                  Member Activity
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="approved" className="mt-0">
              <div className="p-6">
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
                        }`}>Member ID</th>
                        <th className={`px-4 py-3 text-left text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Member Name</th>
                        <th className={`px-4 py-3 text-right text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Amount (ETB)</th>
                        <th className={`px-4 py-3 text-center text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Approved Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvedLoans.map((loan) => (
                        <tr 
                          key={loan.id} 
                          className={`border-t transition-colors ${
                            theme === 'dark' 
                              ? 'border-gray-800 hover:bg-gray-800/50' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.id}</td>
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.memberId}</td>
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.name}</td>
                          <td className={`px-4 py-3 text-sm text-right font-medium ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                          }`}>{loan.amount}</td>
                          <td className={`px-4 py-3 text-sm text-center ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.approvedDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rejected" className="mt-0">
              <div className="p-6">
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
                        }`}>Member ID</th>
                        <th className={`px-4 py-3 text-left text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Member Name</th>
                        <th className={`px-4 py-3 text-right text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Amount (ETB)</th>
                        <th className={`px-4 py-3 text-left text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Reason</th>
                        <th className={`px-4 py-3 text-center text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Rejected Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rejectedLoans.map((loan) => (
                        <tr 
                          key={loan.id} 
                          className={`border-t transition-colors ${
                            theme === 'dark' 
                              ? 'border-gray-800 hover:bg-gray-800/50' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.id}</td>
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.memberId}</td>
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.name}</td>
                          <td className={`px-4 py-3 text-sm text-right font-medium ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                          }`}>{loan.amount}</td>
                          <td className={`px-4 py-3 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.reason}</td>
                          <td className={`px-4 py-3 text-sm text-center ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{loan.rejectedDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="members" className="mt-0">
              <div className="p-6">
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
                        }`}>Month</th>
                        <th className={`px-4 py-3 text-center text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>New Members</th>
                        <th className={`px-4 py-3 text-center text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Approved</th>
                        <th className={`px-4 py-3 text-center text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Rejected</th>
                      </tr>
                    </thead>
                    <tbody>
                      {memberActivity.map((activity) => (
                        <tr 
                          key={activity.month} 
                          className={`border-t transition-colors ${
                            theme === 'dark' 
                              ? 'border-gray-800 hover:bg-gray-800/50' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <td className={`px-4 py-3 text-sm font-medium ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                          }`}>{activity.month}</td>
                          <td className={`px-4 py-3 text-sm text-center ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{activity.newMembers}</td>
                          <td className={`px-4 py-3 text-sm text-center ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{activity.approvedMembers}</td>
                          <td className={`px-4 py-3 text-sm text-center ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>{activity.rejectedMembers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}