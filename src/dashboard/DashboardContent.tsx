import { FinancialSummary } from "./FinancialSummary";
import { PayrollEntryTable } from "./PayrollEntryTable";

export function DashboardContent() {
  return (
    <div className="p-4 space-y-4">
      {/* Financial Summary Section */}
      <FinancialSummary />

      {/* Monthly Payroll Entry Section */}
      <PayrollEntryTable />

      {/* Footer */}
      <footer className="pt-6 pb-2 border-t border-gray-300">
        <p className="text-xs text-gray-600 text-center">
          © Injibara University Cooperative Union
        </p>
      </footer>
    </div>
  );
}
