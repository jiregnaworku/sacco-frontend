import { Button } from "../components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const loanRequests = [
  {
    id: "LR001",
    memberId: "M045",
    memberName: "Abebe Bekele",
    amount: "50,000",
    purpose: "Home renovation",
    duration: "24 months",
    submittedDate: "Nov 15, 2025",
  },
  {
    id: "LR002",
    memberId: "M078",
    memberName: "Tigist Alemu",
    amount: "75,000",
    purpose: "Business expansion",
    duration: "36 months",
    submittedDate: "Nov 16, 2025",
  },
  {
    id: "LR003",
    memberId: "M132",
    memberName: "Dereje Haile",
    amount: "30,000",
    purpose: "Medical expenses",
    duration: "12 months",
    submittedDate: "Nov 17, 2025",
  },
  {
    id: "LR004",
    memberId: "M089",
    memberName: "Meseret Tadesse",
    amount: "60,000",
    purpose: "Education fees",
    duration: "18 months",
    submittedDate: "Nov 18, 2025",
  },
];

export function PendingLoanRequests() {
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
                  Member Name
                </th>
                <th className="px-2 py-2 text-right text-xs text-gray-900 border-r border-gray-400">
                  Amount (ETB)
                </th>
                <th className="px-2 py-2 text-left text-xs text-gray-900 border-r border-gray-400">
                  Purpose
                </th>
                <th className="px-2 py-2 text-center text-xs text-gray-900 border-r border-gray-400">
                  Duration
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
              {loanRequests.map((request, index) => (
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
                    {request.memberName}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 text-right border-r border-gray-300">
                    {request.amount}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 border-r border-gray-300">
                    {request.purpose}
                  </td>
                  <td className="px-2 py-2 text-xs text-gray-900 text-center border-r border-gray-300">
                    {request.duration}
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