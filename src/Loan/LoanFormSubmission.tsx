import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useTheme } from "../components/ThemeContext";

export function LoanFormSubmission() {
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl border shadow-sm max-w-4xl ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
    }`}>
      {/* Form */}
      <div className="p-6">
        <form 
          className="space-y-5" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-3 gap-5">
            {/* Member ID */}
            <div className="space-y-2">
              <Label htmlFor="loan-member-id" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Member ID
              </Label>
              <Input
                id="loan-member-id"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark'
                    ? 'border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400'
                    : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                }`}
                placeholder="Enter member ID"
              />
            </div>

            {/* Loan Amount */}
            <div className="space-y-2">
              <Label htmlFor="loan-amount" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Loan Amount (ETB)
              </Label>
              <Input
                id="loan-amount"
                type="number"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark'
                    ? 'border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400'
                    : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                }`}
                placeholder="Enter amount"
              />
            </div>

            {/* Repayment Duration */}
            <div className="space-y-2">
              <Label htmlFor="repayment-duration" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Repayment Duration (months)
              </Label>
              <Input
                id="repayment-duration"
                type="number"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark'
                    ? 'border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400'
                    : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
                }`}
                placeholder="Enter duration"
              />
            </div>
          </div>

          {/* Purpose - Full Width */}
          <div className="space-y-2">
            <Label htmlFor="loan-purpose" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Purpose
            </Label>
            <Textarea
              id="loan-purpose"
              rows={4}
              className={`text-sm resize-none rounded-lg ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-700 focus:border-blue-400'
                  : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300'
              }`}
              placeholder="Enter loan purpose..."
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-3 flex gap-3">
            <Button 
              type="submit"
              className="h-10 px-6 text-sm bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 rounded-lg shadow-sm"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Send to Committee
            </Button>
            <Button 
              type="button"
              variant="outline"
              className={`h-10 px-6 text-sm rounded-lg ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
              }`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}