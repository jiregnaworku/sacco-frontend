import { useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { LoginPage } from "./Login/LoginPage";
import { ManagerDashboard } from "./Manager/ManagerDashboard";
import { AccountantDashboard } from "./Accountant/AccountantDashboard";
import { CommitteeDashboard } from "./Committee/CommitteeDashboard";

type UserRole = 'manager' | 'committee' | 'accountant' | null;

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  // Show login page if no user role is set
  if (!userRole) {
    return (
      <ThemeProvider>
        <LoginPage onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  // Route to appropriate dashboard based on user role
  return (
    <ThemeProvider>
      {userRole === "manager" && <ManagerDashboard onLogout={handleLogout} />}
      {userRole === "committee" && <CommitteeDashboard onLogout={handleLogout} />}
      {userRole === "accountant" && <AccountantDashboard onLogout={handleLogout} />}
    </ThemeProvider>
  );
}