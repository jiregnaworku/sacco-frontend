import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Building2, ArrowRight, Mail, Lock } from "lucide-react";

type UserRole = 'manager' | 'committee' | 'accountant';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple role-based routing based on username
    if (username.toLowerCase().includes("manager")) {
      onLogin("manager");
    } else if (username.toLowerCase().includes("committee")) {
      onLogin("committee");
    } else {
      onLogin("accountant");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2.5" style={{ backgroundColor: '#d0e3ff' }}>
      {/* System Title */}
      <h1 className="text-3xl text-gray-900 mb-6 text-center">
        Cooperative Savings & Credit Management System
      </h1>
      
      {/* Main Container */}
      <div className="w-full max-w-6xl flex gap-2.5 rounded-2xl overflow-hidden">
        {/* Left Side - Welcome Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 rounded-2xl" style={{ backgroundColor: '#334eac' }}>
          {/* Logo and Header */}
          <div className="space-y-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl text-white">Injibara University</h1>
                <p className="text-sm text-blue-200">Cooperative Union</p>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="space-y-6">
              <h2 className="text-6xl text-white tracking-tight leading-tight">
                Hello — Welcome Back!
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Sign in to access your account and manage your cooperative union activities securely.
              </p>
            </div>

            {/* Go to Portal Link */}
            <div>
              <button className="group inline-flex items-center gap-2 text-white hover:text-blue-100 transition-all">
                <span className="text-base border-b border-transparent group-hover:border-blue-100 transition-all">Go to Portal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12 rounded-2xl backdrop-blur-md" style={{ backgroundColor: 'rgba(112, 150, 209, 0.4)' }}>
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-lg text-gray-900">Injibara University</h1>
                  <p className="text-xs text-gray-700">Cooperative Union</p>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-2 font-bold">Sign In</h3>
                <p className="text-sm text-gray-700">Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email/Username Field */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm text-gray-900">
                    Email or Username
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-12 h-12 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm text-gray-900">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-12 h-12 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
                >
                  Login
                </Button>
              </form>

              {/* Test Credentials Info */}
              <div className="mt-6 pt-4 border-t border-gray-400/30">
                <p className="text-xs text-gray-700 mb-1.5">For testing:</p>
                <div className="space-y-0.5 text-xs text-gray-700">
                  <p>• <span className="text-gray-900">manager</span>, <span className="text-gray-900">committee</span>, or <span className="text-gray-900">accountant</span></p>
                </div>
              </div>
            </div>

            {/* Help Text */}
            <p className="text-center text-sm text-gray-700 mt-5">
              Need assistance?{" "}
              <a href="#" className="text-gray-900 hover:text-gray-700">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}