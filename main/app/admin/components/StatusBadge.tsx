interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending' | 'approved' | 'rejected' | 'suspended' | 'completed' | 'cancelled';
  children?: React.ReactNode;
}

export default function StatusBadge({ status, children }: StatusBadgeProps) {
  const statusConfig = {
    active: { bg: 'bg-success/10', text: 'text-success', label: 'Active' },
    inactive: { bg: 'bg-text-secondary/10', text: 'text-text-secondary', label: 'Inactive' },
    pending: { bg: 'bg-warning/10', text: 'text-warning', label: 'Pending' },
    approved: { bg: 'bg-success/10', text: 'text-success', label: 'Approved' },
    rejected: { bg: 'bg-error/10', text: 'text-error', label: 'Rejected' },
    suspended: { bg: 'bg-error/10', text: 'text-error', label: 'Suspended' },
    completed: { bg: 'bg-success/10', text: 'text-success', label: 'Completed' },
    cancelled: { bg: 'bg-text-secondary/10', text: 'text-text-secondary', label: 'Cancelled' },
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {children || config.label}
    </span>
  );
}

