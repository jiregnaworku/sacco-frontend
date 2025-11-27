import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { LoginPage } from "./Login/LoginPage";
import { ManagerDashboard } from "./Manager/ManagerDashboard";
import { AccountantDashboard } from "./Accountant/AccountantDashboard";
import { CommitteeDashboard } from "./Committee/CommitteeDashboard";
import { authService, User } from "./services/authService";

type UserRole = 'manager' | 'committee' | 'accountant' | null;

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user on app load
    const storedUser = authService.getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    authService.removeStoredUser();
    setUser(null);
  };

  // Show login page if no user is authenticated
  if (!user) {
    return (
      <ThemeProvider>
        <LoginPage onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  // Route to appropriate dashboard based on user role
  return (
    <ThemeProvider>
      {user.role === "manager" && <ManagerDashboard onLogout={handleLogout} user={user} />}
      {user.role === "committee" && <CommitteeDashboard onLogout={handleLogout} user={user} />}
      {user.role === "accountant" && <AccountantDashboard onLogout={handleLogout} user={user} />}
    </ThemeProvider>
  );
}