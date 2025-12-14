import Link from 'next/link';

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="bg-surface py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && (
                <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href ? (
                <Link href={item.href} className="text-text-secondary hover:text-primary transition-colors duration-200">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}

