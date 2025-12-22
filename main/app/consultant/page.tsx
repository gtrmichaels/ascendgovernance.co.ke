'use client';

import Link from 'next/link';

export default function ConsultantDashboard() {
  // Mock data
  const kpiData = {
    upcomingSessions: 5,
    totalClients: 24,
    pendingRequests: 3,
  };

  const recentActivity = [
    {
      id: 1,
      type: 'booking',
      message: 'New booking request from Acme Corp',
      time: '2 hours ago',
      status: 'pending',
    },
    {
      id: 2,
      type: 'session',
      message: 'Session completed with Tech Solutions Ltd',
      time: '1 day ago',
      status: 'completed',
    },
    {
      id: 3,
      type: 'message',
      message: 'New message from Global Industries',
      time: '2 days ago',
      status: 'unread',
    },
    {
      id: 4,
      type: 'booking',
      message: 'Booking confirmed for Next Week',
      time: '3 days ago',
      status: 'confirmed',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary mt-2">Welcome back! Here's your overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Upcoming Sessions</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.upcomingSessions}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
          <Link
            href="/consultant/sessions"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            View all sessions →
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Clients</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.totalClients}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <Link
            href="/consultant/bookings"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            Manage clients →
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Pending Requests</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.pendingRequests}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-warning-100 flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
          <Link
            href="/consultant/bookings"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            Review requests →
          </Link>
        </div>
      </div>

      {/* Availability Status */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-1">Availability Status</h2>
            <p className="text-sm text-text-secondary">Control your availability for new bookings</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-14 h-7 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-text-primary">Recent Activity</h2>
          <Link href="/consultant/bookings" className="text-sm text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  {activity.type === 'booking' && <span className="text-lg">📅</span>}
                  {activity.type === 'session' && <span className="text-lg">💼</span>}
                  {activity.type === 'message' && <span className="text-lg">💬</span>}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary">{activity.message}</p>
                <p className="text-xs text-text-secondary mt-1">{activity.time}</p>
              </div>
              <div className="flex-shrink-0">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    activity.status === 'pending'
                      ? 'bg-warning-100 text-warning-700'
                      : activity.status === 'completed' || activity.status === 'confirmed'
                      ? 'bg-success-100 text-success-700'
                      : 'bg-primary-100 text-primary-700'
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

