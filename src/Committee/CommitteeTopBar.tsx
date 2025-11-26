import { Search, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export function CommitteeTopBar() {
  return (
    <header className="h-12 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4">
      {/* Title */}
      <h1 className="text-gray-900">Committee Dashboard</h1>

      {/* Right Section - Search and Profile */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="text-sm text-gray-700">
            Search Member or Loan by ID:
          </label>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3 text-gray-600" />
            <Input
              id="search"
              type="text"
              className="pl-7 h-7 w-64 bg-white border-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Profile Icon */}
        <Button 
          variant="outline" 
          size="sm" 
          className="h-7 px-2 border-gray-400 bg-gray-200 hover:bg-gray-300"
        >
          <User className="size-4" />
        </Button>
      </div>
    </header>
  );
}
