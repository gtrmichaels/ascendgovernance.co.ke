'use client';

import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';

interface Booking {
  id: number;
  user: string;
  consultant: string;
  date: string;
  time: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export default function AdminBookings() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [bookings] = useState<Booking[]>([
    {
      id: 1,
      user: 'John Doe',
      consultant: 'Dr. Jane Smith',
      date: '2024-01-20',
      time: '10:00 AM',
      service: 'Board Composition Review',
      status: 'confirmed',
    },
    {
      id: 2,
      user: 'Jane Smith',
      consultant: 'John Doe',
      date: '2024-01-18',
      time: '2:00 PM',
      service: 'Compliance Audit',
      status: 'pending',
    },
    {
      id: 3,
      user: 'Bob Johnson',
      consultant: 'Sarah Johnson',
      date: '2024-01-15',
      time: '9:00 AM',
      service: 'Strategic Planning Session',
      status: 'completed',
    },
    {
      id: 4,
      user: 'Alice Williams',
      consultant: 'Michael Brown',
      date: '2024-01-12',
      time: '3:00 PM',
      service: 'Risk Management Consultation',
      status: 'cancelled',
    },
  ]);

  const handleView = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleUpdateStatus = (bookingId: number, newStatus: string) => {
    // In a real app, this would update the booking status
    console.log(`Update booking ${bookingId} to ${newStatus}`);
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Bookings</h1>
          <p className="text-text-secondary mt-2">Manage all consultation bookings</p>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Consultant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Service
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
                    <div className="text-sm font-medium text-text-primary">{booking.user}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text-primary">{booking.consultant}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text-primary">{booking.date}</div>
                    <div className="text-xs text-text-secondary">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-text-primary">{booking.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={booking.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleView(booking)}
                        className="text-primary hover:text-primary-600"
                      >
                        View
                      </button>
                      <span className="text-border">|</span>
                      <button
                        onClick={() => handleUpdateStatus(booking.id, 'confirmed')}
                        className="text-success-600 hover:text-success-700"
                      >
                        Update Status
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Detail Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Booking Details"
      >
        {selectedBooking && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">User</label>
              <p className="text-text-primary font-medium">{selectedBooking.user}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Consultant</label>
              <p className="text-text-primary">{selectedBooking.consultant}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Service</label>
              <p className="text-text-primary">{selectedBooking.service}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Date</label>
                <p className="text-text-primary">{selectedBooking.date}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Time</label>
                <p className="text-text-primary">{selectedBooking.time}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Status</label>
              <StatusBadge status={selectedBooking.status} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Update Status</label>
              <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 pt-4 border-t border-border">
              <button onClick={() => setShowModal(false)} className="btn-secondary">
                Close
              </button>
              <button
                onClick={() => handleUpdateStatus(selectedBooking.id, 'confirmed')}
                className="btn-primary"
              >
                Update Status
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

