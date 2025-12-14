'use client';

import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';

export default function ResearchPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', href: '/homepage' },
        { label: 'Research & Insights' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width={10} height={10} patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width={100} height={100} fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research &amp; Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our collection of articles, reports, and guides on corporate governance to stay ahead of the latest trends and regulatory changes.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6" style={{height: 'max-content'}}>
                {/* Search */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-primary mb-4">Search Resources</h3>
                  <div className="relative">
                    <input type="text" id="resource-search" placeholder="Search resources..." className="input-field pl-10" />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                {/* Resource Categories */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-primary mb-4">Resource Categories</h3>
                  <div className="space-y-3" style={{accentColor: '#213B31'}}>
                    <label className="flex items-center">
                      <input type="checkbox" className="resource-filter" data-category="blog" defaultChecked />
                      <span className="ml-2 text-text-primary">News &amp; Blog</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="resource-filter" data-category="report" defaultChecked />
                      <span className="ml-2 text-text-primary">Reports &amp; Whitepapers</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="resource-filter" data-category="guide" defaultChecked />
                      <span className="ml-2 text-text-primary">Guides &amp; Checklists</span>
                    </label>
                  </div>
                  <button id="reset-filters" className="mt-4 text-accent hover:text-accent-600 text-sm font-medium">Reset Filters</button>
                </div>
              </div>
            </div>

            {/* Main Content - Resources Grid */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Research Resources</h2>
                <p className="text-text-secondary">Explore our latest insights, reports, and resources to help you stay informed about corporate governance trends and best practices.</p>
              </div>
              <div className="pr-2" style={{maxHeight: '80vh', overflowY: 'auto'}}>
                <div id="resources-grid" className="space-y-6">
                  {/* Blog Post 1 */}
                  <div className="resource-card card hover:shadow-floating transition-all duration-300" data-category="blog">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">The Future of Board Evaluations</h3>
                        </div>
                        <p className="text-text-secondary mb-4">
                          Discover how technology and evolving best practices are shaping the next generation of board effectiveness reviews and their impact on governance effectiveness.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">Published: January 2025</span>
                          <a href="#" className="text-accent hover:text-accent-600 font-medium text-sm">Read More →</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blog Post 2 */}
                  <div className="resource-card card hover:shadow-floating transition-all duration-300" data-category="blog">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">Navigating New ESG Reporting Standards</h3>
                        </div>
                        <p className="text-text-secondary mb-4">
                          A deep dive into the latest ESG regulations and what they mean for your company&apos;s compliance and strategy in the evolving governance landscape.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">Published: December 2024</span>
                          <a href="#" className="text-accent hover:text-accent-600 font-medium text-sm">Read More →</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Report 1 */}
                  <div className="resource-card card hover:shadow-floating transition-all duration-300" data-category="report">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">Annual Governance Trends Report</h3>
                        </div>
                        <p className="text-text-secondary mb-4">
                          An in-depth look at the key governance trends from the past year and predictions for the future, analyzing global practices and regulatory changes.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">PDF • 45 pages</span>
                          <button className="btn-secondary text-sm">Download PDF</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Report 2 */}
                  <div className="resource-card card hover:shadow-floating transition-all duration-300" data-category="report">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">Whitepaper: AI in the Boardroom</h3>
                        </div>
                        <p className="text-text-secondary mb-4">
                          Exploring the risks and opportunities of integrating artificial intelligence into corporate governance and board decision-making processes.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">PDF • 32 pages</span>
                          <button className="btn-secondary text-sm">Download PDF</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guide 1 */}
                  <div className="resource-card card hover:shadow-floating transition-all duration-300" data-category="guide">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v10a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">Board Readiness Checklist</h3>
                        </div>
                        <p className="text-text-secondary mb-4">
                          A practical checklist to ensure your board is prepared for the next strategic phase with essential governance elements and preparation requirements.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">PDF • 12 pages</span>
                          <button className="btn-secondary text-sm">Download PDF</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guide 2 */}
                  <div className="resource-card card hover:shadow-floating transition-all duration-300" data-category="guide">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2 -2 .9-2 2 .9 2 2 2zM4 22h16v-2c0-2.21-3.582-4-8-4s-8 1.79-8 4v2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">Training Brochure: Governance Essentials</h3>
                        </div>
                        <p className="text-text-secondary mb-4">
                          Comprehensive outline of training modules offered by Ascend Governance with professional development programs and certification courses.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">PDF • 8 pages</span>
                          <button className="btn-secondary text-sm">Download PDF</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Additional Resources */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6" style={{height: 'max-content'}}>
                {/* Schedule Consultation */}
                <div className="card bg-primary text-white">
                  <h3 className="text-lg font-semibold mb-2">Schedule a Consultation</h3>
                  <p className="text-white/90 mb-4">Discuss your governance needs with our experts</p>
                  <Link href="/contact" className="btn-accent w-full text-center block">Book Consultation</Link>
                </div>
                {/* Training Brochures */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-primary mb-4">Training Brochures</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                      <div className="flex items-center space-x-3">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v10a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <p className="font-medium text-sm">Board Training Guide</p>
                          <p className="text-xs text-text-secondary">PDF • 2.4 MB</p>
                        </div>
                      </div>
                      <button className="text-accent hover:text-accent-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                      <div className="flex items-center space-x-3">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v10a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <p className="font-medium text-sm">Governance Framework</p>
                          <p className="text-xs text-text-secondary">PDF • 1.8 MB</p>
                        </div>
                      </div>
                      <button className="text-accent hover:text-accent-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Never Miss a Governance Update
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest research insights, regulatory news, and exclusive training resources from Ascend Governance.
          </p>
          <form id="research-newsletter-form" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/newsletter" method="POST">
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
            <input type="hidden" name="form_type" defaultValue="newsletter" />
            <input type="hidden" name="csrf_token" defaultValue="" />
            <input type="email" name="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent" required />
            <button type="submit" className="btn-accent whitespace-nowrap">Subscribe</button>
          </form>
          <div id="newsletter-feedback" className="mt-4 text-sm text-white/90" />
        </div>
      </section>
    </>
  );
}
