import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

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
  return (
    <div className="border border-gray-400 bg-gray-50">
      {/* Reports Content */}
      <div className="p-4 space-y-4">
        {/* Report Controls */}
        <div className="flex items-end gap-3">
          <div className="space-y-1">
            <Label htmlFor="report-period" className="text-xs text-gray-700">
              Select Period:
            </Label>
            <Select>
              <SelectTrigger className="h-7 w-48 text-sm border-gray-400 bg-white">
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
            className="h-7 px-4 text-xs bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
          >
            Generate Report
          </Button>
        </div>

        {/* Tabbed Reports */}
        <div className="border border-gray-400 bg-white">
          <Tabs defaultValue="approved" className="w-full">
            <div className="bg-gray-100 border-b border-gray-400">
              <TabsList className="bg-transparent h-auto p-0 gap-0">
                <TabsTrigger 
                  value="approved" 
                  className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-2 text-xs border-r border-gray-400"
                >
                  Approved Loans
                </TabsTrigger>
                <TabsTrigger 
                  value="rejected"
                  className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-2 text-xs border-r border-gray-400"
                >
                  Rejected Loans
                </TabsTrigger>
                <TabsTrigger 
                  value="members"
                  className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-2 text-xs"
                >
                  Member Activity
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="approved" className="p-0 m-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-400">
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Request ID</th>
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Member ID</th>
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Member Name</th>
                    <th className="px-3 py-2 text-right text-xs text-gray-900 border-r border-gray-400">Amount (ETB)</th>
                    <th className="px-3 py-2 text-center text-xs text-gray-900">Approved Date</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedLoans.map((loan, index) => (
                    <tr key={loan.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.id}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.memberId}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.name}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-right border-r border-gray-300">{loan.amount}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-center">{loan.approvedDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>

            <TabsContent value="rejected" className="p-0 m-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-400">
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Request ID</th>
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Member ID</th>
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Member Name</th>
                    <th className="px-3 py-2 text-right text-xs text-gray-900 border-r border-gray-400">Amount (ETB)</th>
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Reason</th>
                    <th className="px-3 py-2 text-center text-xs text-gray-900">Rejected Date</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectedLoans.map((loan, index) => (
                    <tr key={loan.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.id}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.memberId}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.name}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-right border-r border-gray-300">{loan.amount}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{loan.reason}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-center">{loan.rejectedDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>

            <TabsContent value="members" className="p-0 m-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-400">
                    <th className="px-3 py-2 text-left text-xs text-gray-900 border-r border-gray-400">Month</th>
                    <th className="px-3 py-2 text-center text-xs text-gray-900 border-r border-gray-400">New Members</th>
                    <th className="px-3 py-2 text-center text-xs text-gray-900 border-r border-gray-400">Approved</th>
                    <th className="px-3 py-2 text-center text-xs text-gray-900">Rejected</th>
                  </tr>
                </thead>
                <tbody>
                  {memberActivity.map((activity, index) => (
                    <tr key={activity.month} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs text-gray-900 border-r border-gray-300">{activity.month}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-center border-r border-gray-300">{activity.newMembers}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-center border-r border-gray-300">{activity.approvedMembers}</td>
                      <td className="px-3 py-2 text-xs text-gray-900 text-center">{activity.rejectedMembers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}