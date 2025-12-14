'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div id="feedback" className="mb-4" />
        <div className="card">
          <h1 className="text-2xl font-semibold text-primary mb-4">Sign In</h1>
          <form id="login-form" className="space-y-4" action="/api/auth/login" method="POST">
            <input type="hidden" name="form_type" defaultValue="auth_login" />
            <input type="hidden" name="csrf_token" defaultValue="" />
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input id="email" type="email" name="email" className="input-field" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <input id="password" type="password" name="password" className="input-field" required />
            </div>
            <button type="submit" className="btn-primary w-full">Sign In</button>
          </form>
          <div className="mt-4 text-sm">
            <a href="#" id="resetLink" className="text-primary hover:text-primary-600 underline">Forgot password?</a>
          </div>
        </div>
        <div className="card mt-6">
          <h2 className="text-lg font-semibold text-primary mb-3">Create Account</h2>
          <form id="register-form" className="space-y-3" action="/api/auth/register" method="POST">
            <input type="hidden" name="form_type" defaultValue="auth_register" />
            <input type="hidden" name="csrf_token" defaultValue="" />
            <div className="grid md:grid-cols-2 gap-3">
              <input type="text" name="firstName" placeholder="First name" className="input-field" required />
              <input type="text" name="lastName" placeholder="Last name" className="input-field" required />
            </div>
            <input type="email" name="email" placeholder="Email" className="input-field" required />
            <input type="password" name="password" placeholder="Password (min 8 chars)" className="input-field" required />
            <button type="submit" className="btn-secondary w-full">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
