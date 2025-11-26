export function FinancialSummary() {
  return (
    <div className="border border-gray-400 bg-gray-50">
      {/* Section Header */}
      <div className="bg-gray-200 border-b border-gray-400 px-3 py-2">
        <h2 className="text-sm text-gray-900">Financial Summary</h2>
      </div>

      {/* Summary Grid */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-gray-300 bg-white p-3">
            <p className="text-xs text-gray-600 mb-1">Total Members</p>
            <p className="text-gray-900">342</p>
          </div>
          <div className="border border-gray-300 bg-white p-3">
            <p className="text-xs text-gray-600 mb-1">Total Savings This Month</p>
            <p className="text-gray-900">ETB 486,250</p>
          </div>
          <div className="border border-gray-300 bg-white p-3">
            <p className="text-xs text-gray-600 mb-1">Active Loans</p>
            <p className="text-gray-900">87</p>
          </div>
          <div className="border border-gray-300 bg-white p-3">
            <p className="text-xs text-gray-600 mb-1">Pending Approvals</p>
            <p className="text-gray-900">14</p>
          </div>
        </div>
      </div>
    </div>
  );
}
