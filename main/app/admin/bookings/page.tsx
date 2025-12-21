'use client';

import { mockBookings } from '../data/mockData';
import Table from '../components/Table';
import StatusBadge from '../components/StatusBadge';

export default function BookingsPage() {
  const columns = [
    { key: 'userName', label: 'User' },
    { key: 'consultantName', label: 'Consultant' },
    { key: 'service', label: 'Service' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    {
      key: 'status',
      label: 'Status',
      render: (booking: any) => <StatusBadge status={booking.status as any} />,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (booking: any) => (
        <div className="flex items-center space-x-2">
          <button className="text-accent hover:text-accent-600 text-sm font-medium">
            View
          </button>
          <button className="text-primary hover:text-primary-600 text-sm font-medium">
            Update Status
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Bookings Management</h1>
        <p className="text-text-secondary mt-1">Manage all consultation bookings</p>
      </div>

      <div className="card">
        <Table columns={columns} data={mockBookings} />
      </div>
    </div>
  );
}

