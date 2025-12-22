interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

export default function StatusBadge({ status, variant = 'default' }: StatusBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-success-100 text-success-700';
      case 'warning':
        return 'bg-warning-100 text-warning-700';
      case 'error':
        return 'bg-error-100 text-error-700';
      case 'info':
        return 'bg-primary-100 text-primary-700';
      default:
        return 'bg-secondary-200 text-text-secondary';
    }
  };

  // Auto-detect variant from status if not provided
  const autoVariant = variant === 'default' 
    ? (status.toLowerCase().includes('active') || status.toLowerCase().includes('approved') || status.toLowerCase().includes('confirmed') || status.toLowerCase().includes('completed')
        ? 'success'
        : status.toLowerCase().includes('pending') || status.toLowerCase().includes('waiting')
        ? 'warning'
        : status.toLowerCase().includes('suspended') || status.toLowerCase().includes('rejected') || status.toLowerCase().includes('cancelled')
        ? 'error'
        : 'info')
    : variant;

  const styles = {
    success: 'bg-success-100 text-success-700',
    warning: 'bg-warning-100 text-warning-700',
    error: 'bg-error-100 text-error-700',
    info: 'bg-primary-100 text-primary-700',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[autoVariant as keyof typeof styles]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

