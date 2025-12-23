'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ConsultantDashboard() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        location:'consultant/page.tsx:6',
        message:'ConsultantDashboard rendered',
        data:{},
        timestamp:Date.now(),
        sessionId:'debug-session',
        runId:'run1',
        hypothesisId:'G'
      })
    }).catch(()=>{});
  }, []);
  // #endregion

  const [isAvailable, setIsAvailable] = useState(true);
  const [consultantStatus, setConsultantStatus] = useState<'PENDING' | 'APPROVED' | 'REJECTED' | null>(null);

  useEffect(() => {
    // Fetch consultant profile status
    const fetchStatus = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const userStr = localStorage.getItem('user');
        if (!userStr) return;

        const user = JSON.parse(userStr);
        if (user.role !== 'CONSULTANT') return;

        // Fetch user profile to get consultant profile
        const response = await fetch('http://localhost:3001/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          if (data.consultantProfile) {
            setConsultantStatus(data.consultantProfile.status);
          }
        }
      } catch (error) {
        console.error('Error fetching consultant status:', error);
      }
    };

    fetchStatus();
  }, []);

  // Mock data
  const kpiData = {
    upcomingSessions: 5,
    totalClients: 12,
    pendingRequests: 3,
  };

  const recentActivity = [
    {
      id: 1,
      type: 'booking',
      message: 'New booking request from Acme Corporation',
      time: '2 hours ago',
      status: 'pending',
    },
    {
      id: 2,
      type: 'session',
      message: 'Session with Tech Solutions Ltd completed',
      time: '5 hours ago',
      status: 'completed',
    },
    {
      id: 3,
      type: 'message',
      message: 'New message from Global Industries',
      time: '1 day ago',
      status: 'new',
    },
    {
      id: 4,
      type: 'booking',
      message: 'Booking confirmed for Finance Corp',
      time: '2 days ago',
      status: 'confirmed',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Pending Approval Banner */}
      {consultantStatus === 'PENDING' && (
        <div className="bg-warning-50 border-l-4 border-warning-400 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-warning-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-warning-800">
                Application Pending Approval
              </h3>
              <div className="mt-2 text-sm text-warning-700">
                <p>
                  Your consultant application is currently under review. You'll be notified once an admin reviews your application.
                  In the meantime, you can complete your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {consultantStatus === 'REJECTED' && (
        <div className="bg-error-50 border-l-4 border-error-400 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-error-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-error-800">
                Application Rejected
              </h3>
              <div className="mt-2 text-sm text-error-700">
                <p>
                  Your consultant application has been rejected. Please contact support for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-2">Welcome back! Here's your overview</p>
        </div>
        
        {/* Availability Toggle */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-text-secondary">Availability:</span>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAvailable ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAvailable ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAvailable ? 'text-success-600' : 'text-text-secondary'}`}>
            {isAvailable ? 'Available' : 'Unavailable'}
          </span>
        </div>
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
          <Link href="/consultant/sessions" className="text-sm text-primary hover:underline mt-4 inline-block">
            View all →
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Clients</p>
              <p className="text-3xl font-bold text-text-primary">{kpiData.totalClients}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <Link href="/consultant/bookings" className="text-sm text-primary hover:underline mt-4 inline-block">
            View all →
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
          <Link href="/consultant/bookings" className="text-sm text-primary hover:underline mt-4 inline-block">
            Review →
          </Link>
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
                    activity.status === 'pending' || activity.status === 'new'
                      ? 'bg-warning-100 text-warning-700'
                      : activity.status === 'confirmed' || activity.status === 'completed'
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

