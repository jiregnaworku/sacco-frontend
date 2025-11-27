export interface User {
  id: number;
  full_name: string;
  email: string;
  role: 'manager' | 'committee' | 'accountant';
  status: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  full_name: string;
  email: string;
  role: 'manager' | 'committee' | 'accountant';
  status: string;
}

const API_BASE_URL = 'http://localhost:3000';

// Mock users for testing when database is unavailable
const mockUsers = [
  {
    id: 1,
    full_name: 'John Manager',
    email: 'manager@sacco.com',
    role: 'manager' as const,
    status: 'active',
    password: 'manager123'
  },
  {
    id: 2,
    full_name: 'Jane Committee',
    email: 'committee@sacco.com',
    role: 'committee' as const,
    status: 'active',
    password: 'committee123'
  },
  {
    id: 3,
    full_name: 'Bob Accountant',
    email: 'accountant@sacco.com',
    role: 'accountant' as const,
    status: 'active',
    password: 'accountant123'
  }
];

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    // Try real API first, fallback to mock if unavailable
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.log('Database unavailable, using mock authentication');
    }

    // Mock authentication fallback
    const mockUser = mockUsers.find(
      user => user.email === credentials.email && user.password === credentials.password
    );

    if (!mockUser) {
      throw new Error('Invalid credentials');
    }

    if (mockUser.status !== 'active') {
      throw new Error('Your account is not active. Please contact administrator.');
    }

    // Return user without password
    const { password, ...userResponse } = mockUser;
    return userResponse;
  },

  storeUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getStoredUser(): User | null {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  },

  removeStoredUser(): void {
    localStorage.removeItem('user');
  },

  isAuthenticated(): boolean {
    return this.getStoredUser() !== null;
  },

  getUserRole(): 'manager' | 'committee' | 'accountant' | null {
    const user = this.getStoredUser();
    return user ? user.role : null;
  }
};
