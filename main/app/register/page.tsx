'use client';

import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';

export default function RegisterPage() {
  return (
    <>
      <div className="h-16" />
      <Breadcrumb items={[
        { label: 'Home', href: '/homepage' },
        { label: 'Register', href: '/register' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-register" width={10} height={10} patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width={100} height={100} fill="url(#grid-register)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Create Your Account
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose how you'd like to join Ascend Governance
          </p>
        </div>
      </section>

      {/* Registration Options Section */}
      <section className="py-20" style={{backgroundColor: '#FAFCFB'}}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Consultant Registration Card */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Register as Consultant</h2>
                <p className="text-text-secondary">
                  Join our network of professional consultants and help organizations achieve governance excellence.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Access to professional network</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Verified consultant status</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Manage bookings and sessions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Direct client communication</span>
                </div>
              </div>

              <Link href="/register/consultant" className="btn-primary w-full text-center block">
                Register as Consultant
              </Link>
            </div>

            {/* User Registration Card */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Register as User</h2>
                <p className="text-text-secondary">
                  Create an account to book consultations, access resources, and connect with expert consultants.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Book consultations with experts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Access governance resources</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Track your bookings and sessions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-primary">Direct messaging with consultants</span>
                </div>
              </div>

              <Link href="/register/user" className="btn-accent w-full text-center block">
                Register as User
              </Link>
            </div>
          </div>

          {/* Sign In Option */}
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">
              Already have an account?
            </p>
            <Link href="/signin" className="text-primary hover:text-primary-600 font-medium text-lg">
              Sign In →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

