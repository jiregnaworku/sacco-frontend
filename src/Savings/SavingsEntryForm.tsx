import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useTheme } from "../components/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function SavingsEntryForm() {
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl overflow-hidden border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/20' 
        : 'bg-white border-gray-200 shadow-lg shadow-gray-900/5'
    }`}>
      <div className="p-6">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-5">
            {/* Member ID */}
            <div className="space-y-2">
              <Label htmlFor="savings-member-id" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Member ID:
              </Label>
              <Input
                id="savings-member-id"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
                placeholder="Enter member ID"
              />
            </div>

            {/* Transaction Type */}
            <div className="space-y-2">
              <Label htmlFor="transaction-type" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Transaction Type:
              </Label>
              <Select>
                <SelectTrigger className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deposit">Deposit</SelectItem>
                  <SelectItem value="withdrawal">Withdrawal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="savings-amount" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Amount (ETB):
              </Label>
              <Input
                id="savings-amount"
                type="number"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
                placeholder="Enter amount"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="transaction-date" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Transaction Date:
              </Label>
              <Input
                id="transaction-date"
                type="date"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>
          </div>

          {/* Reference Number */}
          <div className="space-y-2">
            <Label htmlFor="reference-number" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Reference Number:
            </Label>
            <Input
              id="reference-number"
              type="text"
              className={`h-10 text-sm rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-gray-200' 
                  : 'bg-white border-gray-300'
              }`}
              placeholder="Enter reference/receipt number"
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-3 flex gap-3">
            <Button 
              type="submit"
              className={`h-10 px-6 text-sm rounded-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg shadow-blue-900/30'
                  : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-900/20'
              }`}
            >
              Record Transaction
            </Button>
            <Button 
              type="button"
              variant="outline"
              className={`h-10 px-6 text-sm rounded-xl border ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-200'
                  : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'
              }`}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
