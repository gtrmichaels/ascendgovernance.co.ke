'use client';

export default function UserBookings() {
  // Mock data
  const bookings = [
    {
      id: 1,
      date: '2024-01-20',
      consultant: 'Dr. Jane Smith',
      service: 'Board Composition Review',
      status: 'confirmed',
    },
    {
      id: 2,
      date: '2024-01-15',
      consultant: 'John Doe',
      service: 'Compliance Audit',
      status: 'completed',
    },
    {
      id: 3,
      date: '2024-01-10',
      consultant: 'Sarah Johnson',
      service: 'Strategic Planning Session',
      status: 'completed',
    },
    {
      id: 4,
      date: '2024-01-05',
      consultant: 'Michael Brown',
      service: 'Risk Management Consultation',
      status: 'completed',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: 'bg-success-100 text-success-700',
      completed: 'bg-secondary-200 text-text-secondary',
      cancelled: 'bg-error-100 text-error-700',
    };
    return styles[status as keyof typeof styles] || styles.completed;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Bookings</h1>
          <p className="text-text-secondary mt-1">View your consultation history</p>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                    Consultant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                    Service Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-secondary-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-text-primary">{booking.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-text-primary">{booking.consultant}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-text-primary">{booking.service}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="bg-white rounded-lg border border-border p-12 text-center">
            <p className="text-text-secondary mb-4">No bookings found</p>
            <a href="/services" className="btn-primary inline-block">
              Book Your First Consultation
            </a>
          </div>
        )}
      </div>
    </div>
  );
}


