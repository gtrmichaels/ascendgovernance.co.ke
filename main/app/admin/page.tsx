'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function AdminDashboard() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'admin/page.tsx:7',message:'Admin dashboard rendered',data:{hasToken:!!localStorage.getItem('accessToken'),pathname:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
  }, []);
  // #endregion
  // Mock data
  const kpiData = {
    totalUsers: 156,
    totalConsultants: 24,
    totalBookings: 89,
    totalMessages: 342,
  };

  const recentActivity = [
    {
      id: 1,
      type: 'user',
      message: 'New user registration: john.doe@example.com',
      time: '2 hours ago',
      status: 'new',
    },
    {
      id: 2,
      type: 'booking',
      message: 'Booking confirmed: Acme Corp with Consultant #12',
      time: '1 day ago',
      status: 'confirmed',
    },
    {
      id: 3,
      type: 'consultant',
      message: 'New consultant application: Jane Smith',
      time: '2 days ago',
      status: 'pending',
    },
    {
      id: 4,
      type: 'message',
      message: 'New message from Global Industries',
      time: '3 days ago',
      status: 'unread',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Users</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.totalUsers}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <Link
            href="/admin/users"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            View all users →
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Consultants</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.totalConsultants}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
          </div>
          <Link
            href="/admin/consultants"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            View all consultants →
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Bookings</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.totalBookings}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
          <Link
            href="/admin/bookings"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            View all bookings →
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Messages</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.totalMessages}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-warning-100 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
          </div>
          <Link
            href="/admin/messages"
            className="text-sm text-primary hover:underline mt-4 inline-block"
          >
            View all messages →
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-text-primary">Recent Activity</h2>
          <Link href="/admin/users" className="text-sm text-primary hover:underline">
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
                  {activity.type === 'user' && <span className="text-lg">👥</span>}
                  {activity.type === 'booking' && <span className="text-lg">📅</span>}
                  {activity.type === 'consultant' && <span className="text-lg">💼</span>}
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
                    activity.status === 'pending' || activity.status === 'new'
                      ? 'bg-warning-100 text-warning-700'
                      : activity.status === 'confirmed'
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

