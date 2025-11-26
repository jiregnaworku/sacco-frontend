import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useTheme } from "../components/ThemeContext";

export function ShareAllocationForm() {
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
              <Label htmlFor="share-member-id" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Member ID:
              </Label>
              <Input
                id="share-member-id"
                type="text"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
                placeholder="Enter member ID"
              />
            </div>

            {/* Current Share Units */}
            <div className="space-y-2">
              <Label htmlFor="current-shares" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Current Share Units:
              </Label>
              <Input
                id="current-shares"
                type="number"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700/50 border-gray-600 text-gray-400' 
                    : 'bg-gray-100 border-gray-300 text-gray-500'
                }`}
                placeholder="Auto-filled"
                disabled
              />
            </div>

            {/* Additional Share Units */}
            <div className="space-y-2">
              <Label htmlFor="additional-shares" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Additional Share Units:
              </Label>
              <Input
                id="additional-shares"
                type="number"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
                placeholder="Enter units to add"
              />
            </div>

            {/* Share Price */}
            <div className="space-y-2">
              <Label htmlFor="share-price" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Price per Share (ETB):
              </Label>
              <Input
                id="share-price"
                type="number"
                defaultValue="1000"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>

            {/* Total Amount */}
            <div className="space-y-2">
              <Label htmlFor="total-amount" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Total Amount (ETB):
              </Label>
              <Input
                id="total-amount"
                type="number"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700/50 border-gray-600 text-gray-400' 
                    : 'bg-gray-100 border-gray-300 text-gray-500'
                }`}
                placeholder="Auto-calculated"
                disabled
              />
            </div>

            {/* Transaction Date */}
            <div className="space-y-2">
              <Label htmlFor="share-date" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Transaction Date:
              </Label>
              <Input
                id="share-date"
                type="date"
                className={`h-10 text-sm rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-gray-200' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>
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
              Allocate Shares
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
