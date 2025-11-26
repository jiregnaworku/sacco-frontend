import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { useTheme } from "../components/ThemeContext";

const memberRecords = [
  { memberId: "M001", name: "Abebe Bekele", staffType: "Teacher", savingsBalance: "45,200", shareUnits: 10, status: "Active" },
  { memberId: "M002", name: "Tigist Alemu", staffType: "Admin", savingsBalance: "32,800", shareUnits: 8, status: "Active" },
  { memberId: "M003", name: "Dereje Haile", staffType: "Teacher", savingsBalance: "28,500", shareUnits: 6, status: "Active" },
  { memberId: "M004", name: "Meseret Tadesse", staffType: "Other", savingsBalance: "51,300", shareUnits: 12, status: "Active" },
  { memberId: "M005", name: "Solomon Girma", staffType: "Teacher", savingsBalance: "19,700", shareUnits: 5, status: "Active" },
  { memberId: "M006", name: "Hanna Fekadu", staffType: "Admin", savingsBalance: "38,400", shareUnits: 9, status: "Inactive" },
];

export function MemberRecordsTable() {
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl overflow-hidden border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
        : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
    }`}>
      <div className="p-6 space-y-5">
        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className={`flex-1 flex items-center gap-3 border rounded-lg px-4 h-10 ${
            theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
          }`}>
            <Search className={`size-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            <Input
              type="text"
              placeholder="Search by Member ID or Name..."
              className={`flex-1 border-0 h-8 text-sm p-0 focus-visible:ring-0 ${
                theme === 'dark' 
                  ? 'bg-transparent text-gray-200 placeholder:text-gray-500' 
                  : 'bg-transparent placeholder:text-gray-400'
              }`}
            />
          </div>
          <Button className={`h-10 px-5 text-sm rounded-xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
              : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
          }`}>
            Search
          </Button>
        </div>

        {/* Table */}
        <div className={`rounded-xl overflow-hidden border ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <table className="w-full">
            <thead>
              <tr className={`border-b ${
                theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <th className={`px-6 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Member ID
                </th>
                <th className={`px-6 py-3 text-left text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Full Name
                </th>
                <th className={`px-6 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Staff Type
                </th>
                <th className={`px-6 py-3 text-right text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Savings Balance (ETB)
                </th>
                <th className={`px-6 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Share Units
                </th>
                <th className={`px-6 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {memberRecords.map((member, index) => (
                <tr 
                  key={member.memberId}
                  className={`border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}
                >
                  <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {member.memberId}
                  </td>
                  <td className={`px-6 py-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {member.name}
                  </td>
                  <td className={`px-6 py-3 text-sm text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {member.staffType}
                  </td>
                  <td className={`px-6 py-3 text-sm text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {member.savingsBalance}
                  </td>
                  <td className={`px-6 py-3 text-sm text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {member.shareUnits}
                  </td>
                  <td className="px-6 py-3 text-sm text-center">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      member.status === "Active" 
                        ? theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                        : theme === 'dark' ? 'bg-gray-600/20 text-gray-400' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex gap-2 justify-center">
                      <Button 
                        size="sm"
                        className={`h-8 px-4 text-xs rounded-lg ${
                          theme === 'dark'
                            ? 'bg-blue-600 hover:bg-blue-500 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        View
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className={`h-8 px-4 text-xs rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-200'
                            : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'
                        }`}
                      >
                        Edit
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
