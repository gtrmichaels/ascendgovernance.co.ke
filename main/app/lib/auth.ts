// Auth utility functions

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'CONSULTANT' | 'USER';
  phone?: string;
  organization?: string;
}

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('accessToken');
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

export function setAuth(token: string, user: User): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('accessToken', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export function clearAuth(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  // Clear cookie
  document.cookie = 'accessToken=; path=/; max-age=0';
}

export function isAuthenticated(): boolean {
  return getAccessToken() !== null;
}

export function getRole(): User['role'] | null {
  const user = getUser();
  return user?.role || null;
}

export function getDashboardPath(role: User['role']): string {
  const paths = {
    ADMIN: '/admin',
    CONSULTANT: '/consultant',
    USER: '/user',
  };
  return paths[role] || '/homepage';
}

