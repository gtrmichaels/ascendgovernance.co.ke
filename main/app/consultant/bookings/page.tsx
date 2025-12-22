'use client';

import { useState } from 'react';

interface Booking {
  id: number;
  clientName: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed';
}

export default function ConsultantBookings() {
  const [bookings] = useState<Booking[]>([
    {
      id: 1,
      clientName: 'Acme Corporation',
      service: 'Board Composition Review',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'pending',
    },
    {
      id: 2,
      clientName: 'Tech Solutions Ltd',
      service: 'Compliance Audit',
      date: '2024-01-18',
      time: '2:00 PM',
      status: 'confirmed',
    },
    {
      id: 3,
      clientName: 'Global Industries',
      service: 'Strategic Planning Session',
      date: '2024-01-20',
      time: '9:00 AM',
      status: 'pending',
    },
    {
      id: 4,
      clientName: 'Finance Corp',
      service: 'Risk Management Consultation',
      date: '2024-01-12',
      time: '3:00 PM',
      status: 'completed',
    },
  ]);

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-warning-100 text-warning-700',
      confirmed: 'bg-success-100 text-success-700',
      completed: 'bg-secondary-200 text-text-secondary',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const handleAction = (bookingId: number, action: string) => {
    // In a real app, this would update the booking status
    console.log(`Action: ${action} for booking ${bookingId}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Bookings</h1>
          <p className="text-text-secondary mt-2">Manage your booking requests and appointments</p>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Client Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-secondary-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-text-primary">{booking.clientName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text-primary">{booking.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text-primary">{booking.date}</div>
                    <div className="text-xs text-text-secondary">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleAction(booking.id, 'accept')}
                            className="text-success-600 hover:text-success-700"
                          >
                            Accept
                          </button>
                          <span className="text-border">|</span>
                          <button
                            onClick={() => handleAction(booking.id, 'decline')}
                            className="text-error-600 hover:text-error-700"
                          >
                            Decline
                          </button>
                          <span className="text-border">|</span>
                        </>
                      )}
                      <button
                        onClick={() => handleAction(booking.id, 'view')}
                        className="text-primary hover:text-primary-600"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State (if no bookings) */}
      {bookings.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-text-secondary">No bookings found</p>
        </div>
      )}
    </div>
  );
}

