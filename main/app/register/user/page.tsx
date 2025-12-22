'use client';

import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

export default function RegisterUserPage() {
  return (
    <>
      <div className="h-16" />
      <Breadcrumb items={[
        { label: 'Home', href: '/homepage' },
        { label: 'Register', href: '/register' },
        { label: 'User', href: '/register/user' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-user" width={10} height={10} patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width={100} height={100} fill="url(#grid-user)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Create Your Account
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join Ascend Governance to access expert consultations and governance resources
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20" style={{backgroundColor: '#FAFCFB'}}>
        <div className="max-w-md mx-auto px-6 lg:px-8">
          <div className="card">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-primary text-center mb-2">Create Your Account</h2>
              <p className="text-text-secondary text-center text-sm">
                Fill in your details to get started
              </p>
            </div>

            <form 
              id="user-register-form" 
              className="space-y-6" 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const password = formData.get('password') as string;
                const confirmPassword = formData.get('confirmPassword') as string;

                if (password !== confirmPassword) {
                  alert('Passwords do not match');
                  return;
                }

                try {
                  const response = await fetch('http://localhost:3001/auth/register', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                      email: formData.get('email'),
                      password,
                      firstName: formData.get('firstName'),
                      lastName: formData.get('lastName'),
                      phone: formData.get('phone'),
                      organization: formData.get('organization'),
                      userType: 'user',
                    }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.error || 'Registration failed');
                  }

                  // Store access token in localStorage and cookie
                  localStorage.setItem('accessToken', data.accessToken);
                  localStorage.setItem('user', JSON.stringify(data.user));
                  
                  // Also set cookie for middleware
                  document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Strict`;

                  // Redirect to user dashboard
                  window.location.href = '/user';
                } catch (err) {
                  alert(err instanceof Error ? err.message : 'Registration failed');
                }
              }}
            >
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    className="input-field" 
                    required 
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    className="input-field" 
                    required 
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="input-field" 
                  placeholder="you@example.com"
                  required 
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="input-field" 
                  placeholder="+2547XXXXXXXX"
                  autoComplete="tel"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-text-primary mb-2">
                  Organization
                </label>
                <input 
                  type="text" 
                  id="organization" 
                  name="organization" 
                  className="input-field" 
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                  Password *
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="input-field" 
                  placeholder="Minimum 8 characters"
                  required 
                  autoComplete="new-password"
                  minLength={8}
                />
                <p className="text-xs text-text-secondary mt-1">Must be at least 8 characters long</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
                  Confirm Password *
                </label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  className="input-field" 
                  placeholder="Confirm your password"
                  required 
                  autoComplete="new-password"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  className="mt-1 text-primary focus:ring-primary-500" 
                  required 
                />
                <label htmlFor="terms" className="text-sm text-text-secondary">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  {' '}*
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="btn-primary w-full text-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Create Account
                </button>
              </div>

              {/* Sign In Link */}
              <div className="pt-6 border-t border-border">
                <p className="text-center text-sm text-text-secondary">
                  Already have an account?{' '}
                  <Link href="/signin" className="text-primary hover:text-primary-600 font-medium transition-colors">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

