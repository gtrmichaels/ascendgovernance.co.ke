'use client';

import Link from 'next/link';

export default function UserDashboard() {
  // Mock data
  const nextConsultation = {
    date: '2024-01-20',
    time: '10:00 AM',
    consultant: 'Dr. Jane Smith',
    service: 'Board Composition Review',
    status: 'confirmed',
  };

  const stats = {
    totalConsultations: 8,
    accountStatus: 'Active',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">Welcome back! Here's your overview.</p>
        </div>

        {/* Next Scheduled Consultation */}
        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Next Scheduled Consultation</h2>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-success-100 text-success-700">
              {nextConsultation.status}
            </span>
          </div>
          {nextConsultation ? (
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📅</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-text-primary">{nextConsultation.service}</h3>
                  <p className="text-sm text-text-secondary mt-1">with {nextConsultation.consultant}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-text-secondary">
                    <span>{nextConsultation.date}</span>
                    <span>•</span>
                    <span>{nextConsultation.time}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <Link href="/user/bookings" className="text-sm text-primary hover:underline">
                  View all bookings →
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-text-secondary mb-4">No upcoming consultations</p>
              <Link href="/services" className="btn-primary inline-block">
                Book Consultation
              </Link>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Total Consultations</p>
                <p className="text-2xl font-bold text-text-primary">{stats.totalConsultations}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <span className="text-lg">💼</span>
              </div>
            </div>
            <Link href="/user/bookings" className="text-sm text-primary hover:underline mt-3 inline-block">
              View history →
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Account Status</p>
                <p className="text-2xl font-bold text-text-primary">{stats.accountStatus}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-success-100 flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
            </div>
            <Link href="/user/settings" className="text-sm text-primary hover:underline mt-3 inline-block">
              Manage account →
            </Link>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="bg-primary-50 rounded-lg border border-primary-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Need a consultation?</h3>
              <p className="text-sm text-text-secondary">Book a session with one of our expert consultants</p>
            </div>
            <Link href="/services" className="btn-primary">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


