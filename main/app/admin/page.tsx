'use client';

import Link from 'next/link';
import { mockStats, mockRecentActivity } from './data/mockData';
import StatusBadge from './components/StatusBadge';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: mockStats.totalUsers, href: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { label: 'Consultants', value: mockStats.totalConsultants, href: '/admin/consultants', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Bookings', value: mockStats.totalBookings, href: '/admin/bookings', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Messages', value: mockStats.totalMessages, href: '/admin/messages', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="text-text-secondary mt-1">Overview of your administration panel</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="card hover:shadow-floating transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-xl font-bold text-primary mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-surface">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-border">
              {mockRecentActivity.map((activity) => (
                <tr key={activity.id} className="hover:bg-surface transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{activity.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{activity.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

