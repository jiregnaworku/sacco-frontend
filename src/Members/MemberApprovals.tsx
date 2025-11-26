import { Button } from "../components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const memberRequests = [
  {
    id: "MR001",
    memberId: "M345",
    fullName: "Solomon Girma",
    staffType: "Teacher",
    registrationFee: "Yes",
    shareUnits: "10",
    submittedDate: "Nov 18, 2025",
  },
  {
    id: "MR002",
    memberId: "M346",
    fullName: "Hanna Fekadu",
    staffType: "Admin",
    registrationFee: "Yes",
    shareUnits: "5",
    submittedDate: "Nov 19, 2025",
  },
  {
    id: "MR003",
    memberId: "M347",
    fullName: "Getachew Mengistu",
    staffType: "Teacher",
    registrationFee: "No",
    shareUnits: "8",
    submittedDate: "Nov 19, 2025",
  },
];

export function MemberApprovals() {
  return (
    <div className="border border-gray-400 bg-gray-50">
      {/* Table */}
      <div className="p-4">
        <div className="border border-gray-400 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-400">
                <th className="px-2 py-2 text-left text-xs text-gray-900 border-r border-gray-400">
                  Request ID
                </th>
                <th className="px-2 py-2 text-left text-xs text-gray-900 border-r border-gray-400">
                  Member ID
                </th>
                <th className="px-2 py-2 text-left text-xs text-gray-900 border-r border-gray-400">
                  Full Name
                </th>
                <th className="px-2 py-2 text-center text-xs text-gray-900 border-r border-gray-400">
                  Staff Type
                </th>
                <th className="px-2 py-2 text-center text-xs text-gray-900 border-r border-gray-400">
                  Reg. Fee Paid
                </th>
                <th className="px-2 py-2 text-center text-xs text-gray-900 border-r border-gray-400">
                  Share Units
                </th>
                <th className="px-2 py-2 text-center text-xs text-gray-900 border-r border-gray-400">
                  Submitted
                </th>
                <th className="px-2 py-2 text-center text-xs text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {memberRequests.map((request, index) => (
                <tr 
                  key={request.id} 
                  className={`border-b border-gray-300 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-2 py-2 text-xs text-gray-900 border-r border-gray-300">
                    {request.id}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 border-r border-gray-300">
                    {request.memberId}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 border-r border-gray-300">
                    {request.fullName}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 text-center border-r border-gray-300">
                    {request.staffType}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 text-center border-r border-gray-300">
                    <span className={request.registrationFee === "Yes" ? "text-green-700" : "text-red-700"}>
                      {request.registrationFee}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 text-center border-r border-gray-300">
                    {request.shareUnits}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 text-center border-r border-gray-300">
                    {request.submittedDate}
                  </td>
                  <td className="px-2 py-2 border-r border-gray-300">
                    <div className="flex gap-1 justify-center">
                      <Button 
                        size="sm"
                        className="h-6 px-2 text-xs bg-green-600 hover:bg-green-700 text-white border border-green-700"
                      >
                        <CheckCircle className="size-3 mr-1" />
                        Approve
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="h-6 px-2 text-xs bg-red-50 hover:bg-red-100 text-red-700 border border-red-400"
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
      </div>
    </div>
  );
}