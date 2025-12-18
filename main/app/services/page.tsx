'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function ServicesPage() {
  useEffect(() => {
    // Handle toggle details buttons
    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const serviceCard = (e.target as HTMLElement).closest('.service-card');
        if (serviceCard) {
          const detailsDiv = serviceCard.querySelector('.service-details');
          const button = serviceCard.querySelector('.toggle-details') as HTMLElement;
          
          if (detailsDiv && button) {
            const isHidden = detailsDiv.classList.contains('hidden');
            if (isHidden) {
              detailsDiv.classList.remove('hidden');
              button.textContent = 'Hide Details';
            } else {
              detailsDiv.classList.add('hidden');
              button.textContent = 'Show Details';
            }
          }
        }
      });
    });

    // Handle service filters
    const filterInputs = document.querySelectorAll('.service-filter');
    const serviceCards = document.querySelectorAll('.service-card');
    const noResults = document.getElementById('no-results');
    const servicesGrid = document.getElementById('services-grid');

    const filterServices = () => {
      const activeCategories = Array.from(filterInputs)
        .filter((input: HTMLInputElement) => input.checked)
        .map((input: HTMLInputElement) => input.dataset.category);

      let visibleCount = 0;
      serviceCards.forEach((card: HTMLElement) => {
        const category = card.dataset.category;
        if (activeCategories.length === 0 || activeCategories.includes(category)) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults && servicesGrid) {
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
          servicesGrid.style.display = 'none';
        } else {
          noResults.classList.add('hidden');
          servicesGrid.style.display = '';
        }
      }
    };

    filterInputs.forEach(input => {
      input.addEventListener('change', filterServices);
    });

    // Handle search
    const searchInput = document.getElementById('service-search') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
        serviceCards.forEach((card: HTMLElement) => {
          const text = card.textContent?.toLowerCase() || '';
          const isVisible = text.includes(searchTerm);
          card.style.display = isVisible ? '' : 'none';
        });
      });
    }

    // Handle reset filters
    const resetButton = document.getElementById('reset-filters');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        filterInputs.forEach((input: HTMLInputElement) => {
          input.checked = true;
        });
        if (searchInput) {
          searchInput.value = '';
        }
        filterServices();
        // Reset all service cards to visible
        serviceCards.forEach((card: HTMLElement) => {
          card.style.display = '';
        });
      });
    }

    // Handle FAQ dropdowns
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', (e) => {
        const faqItem = (e.target as HTMLElement).closest('.faq-item');
        if (faqItem) {
          const answer = faqItem.querySelector('.faq-answer');
          const svg = faqItem.querySelector('svg');
          
          if (answer && svg) {
            const isHidden = answer.classList.contains('hidden');
            if (isHidden) {
              answer.classList.remove('hidden');
              svg.style.transform = 'rotate(180deg)';
            } else {
              answer.classList.add('hidden');
              svg.style.transform = 'rotate(0deg)';
            }
          }
        }
      });
    });

    return () => {
      toggleButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      filterInputs.forEach(input => {
        input.removeEventListener('change', filterServices);
      });
      if (searchInput) {
        searchInput.removeEventListener('input', () => {});
      }
      if (resetButton) {
        resetButton.removeEventListener('click', () => {});
      }
      faqQuestions.forEach(question => {
        question.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="h-16" />
      <Breadcrumb items={[
        { label: 'Home', href: '/homepage' },
        { label: 'Services', href: '/services' }
      ]} />
          {/* Hero Section */}
          <section className="relative py-20 bg-primary-700">
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
                Comprehensive Governance Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Discover our complete portfolio of corporate governance services designed to elevate leadership capabilities, ensure regulatory compliance, and strengthen organizational governance frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-accent text-lg px-8 py-4">Schedule Consultation</Link>
                <button id="download-brochure" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">Download Brochure</button>
              </div>
            </div>
          </section>
          {/* Main Content Area */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                {/* Left Sidebar - Filters */}
                <div className="lg:col-span-1 self-start">
                  <div className="sticky top-24 space-y-6">
                    {/* Search */}
                    <div className="card">
                      <h3 className="text-lg font-semibold text-primary mb-4">Search Services</h3>
                      <div className="relative">
                        <input type="text" id="service-search" placeholder="Search services..." className="input-field pl-10" />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    {/* Service Categories */}
                    <div className="card">
                      <h3 className="text-lg font-semibold text-primary mb-4">Service Categories</h3>
                      <div className="space-y-3" style={{accentColor: '#295D44'}}>
                        <label className="flex items-center">
                          <input type="checkbox" className="service-filter" data-category="evaluation" defaultChecked />
                          <span className="ml-2 text-text-primary">Board Evaluations</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="service-filter" data-category="training" defaultChecked />
                          <span className="ml-2 text-text-primary">Training Programs</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="service-filter" data-category="consultancy" defaultChecked />
                          <span className="ml-2 text-text-primary">Consultancy Services</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="service-filter" data-category="recruitment" defaultChecked />
                          <span className="ml-2 text-text-primary">Recruitment &amp; Induction</span>
                        </label>
                      </div>
                      <button id="reset-filters" className="mt-4 text-accent hover:text-accent-600 text-sm font-medium">Reset Filters</button>
                    </div>
                    {/* Service Comparison */}
                    {/* Removed Compare Services section */}
                  </div>
                </div>
                {/* Main Content - Services Grid */}
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Our Services</h2>
                    <p className="text-text-secondary">Explore our comprehensive range of corporate governance services designed to meet your organization's specific needs.</p>
                  </div>
                  <div className="pr-2" style={{maxHeight: '80vh', overflowY: 'auto'}}>
                    <div id="services-grid" className="space-y-6">
                      {/* Service Card 1: Board Evaluations */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="evaluation" data-service="board-evaluations">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Board Evaluations</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Comprehensive assessment of board effectiveness, governance practices, and strategic oversight capabilities. Our evaluation process includes individual director assessments, board dynamics analysis, and governance framework review to identify strengths and improvement opportunities.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Enhanced board effectiveness</li>
                                    <li>• Improved decision-making processes</li>
                                    <li>• Regulatory compliance assurance</li>
                                    <li>• Strategic oversight optimization</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">4-6 weeks comprehensive evaluation including interviews, surveys, and detailed reporting</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-accent/10 text-accent px-2 py-1 rounded text-xs">Premium Service</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 2: Board Trainings */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="training" data-service="board-trainings">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Board Trainings</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Specialized training programs designed for board members and directors to enhance governance knowledge, fiduciary responsibilities, and strategic decision-making capabilities. Programs cover regulatory compliance, risk management, and leadership excellence.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Enhanced governance knowledge</li>
                                    <li>• Improved fiduciary understanding</li>
                                    <li>• Strategic thinking development</li>
                                    <li>• Regulatory compliance mastery</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">1-3 day intensive workshops or modular online programs with certification</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-success/10 text-success px-2 py-1 rounded text-xs">Popular Choice</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 3: Secretarial Trainings */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="training" data-service="secretarial-trainings">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Secretarial Trainings</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Professional development programs for company secretaries and compliance officers focusing on statutory compliance, corporate law updates, and best practices in corporate secretarial functions. Includes practical workshops and case study analysis.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Statutory compliance expertise</li>
                                    <li>• Corporate law proficiency</li>
                                    <li>• Documentation best practices</li>
                                    <li>• Regulatory update awareness</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">2-day intensive program with practical exercises and certification</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-warning/10 text-warning px-2 py-1 rounded text-xs">Specialized</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 4: Corporate Governance Trainings */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="training" data-service="governance-trainings">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Corporate Governance Trainings</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Comprehensive governance training programs for all organizational levels covering governance frameworks, ethical leadership, stakeholder management, and regulatory compliance. Tailored modules for different roles and responsibilities within the organization.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Comprehensive governance understanding</li>
                                    <li>• Ethical leadership development</li>
                                    <li>• Stakeholder management skills</li>
                                    <li>• Risk awareness enhancement</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">Flexible modular programs from half-day to multi-week comprehensive courses</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-success/10 text-success px-2 py-1 rounded text-xs">Most Comprehensive</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 5: Governance Consultancy */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="consultancy" data-service="governance-consultancy">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Governance Consultancy</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Strategic advisory services for governance framework development, policy creation, and organizational structure optimization. Our consultants work closely with leadership teams to design and implement effective governance systems tailored to specific business needs.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Customized governance frameworks</li>
                                    <li>• Strategic policy development</li>
                                    <li>• Organizational optimization</li>
                                    <li>• Regulatory alignment</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">Project-based engagement from 2-12 months depending on scope and complexity</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-accent/10 text-accent px-2 py-1 rounded text-xs">Strategic</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 6: Committee Trainings */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="training" data-service="committee-trainings">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Committee Trainings</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Specialized training programs for audit, risk, governance, and other board committees. Focus on committee-specific responsibilities, regulatory requirements, and best practices for effective committee operations and oversight functions.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Committee-specific expertise</li>
                                    <li>• Enhanced oversight capabilities</li>
                                    <li>• Regulatory compliance focus</li>
                                    <li>• Effective committee operations</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">1-2 day focused workshops tailored to specific committee types</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-warning/10 text-warning px-2 py-1 rounded text-xs">Committee-Specific</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 7: Board Recruitment */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="recruitment" data-service="board-recruitment">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Board Recruitment</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Executive search and recruitment services for board positions including independent directors, committee chairs, and specialized board roles. Comprehensive candidate assessment, due diligence, and matching services to ensure optimal board composition.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Quality candidate sourcing</li>
                                    <li>• Comprehensive due diligence</li>
                                    <li>• Skills matrix alignment</li>
                                    <li>• Diversity and inclusion focus</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">3-6 months search process with ongoing support and placement guarantee</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-error/10 text-error px-2 py-1 rounded text-xs">Executive Search</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Service Card 8: Board Induction */}
                      <div className="service-card card hover:shadow-floating transition-all duration-300" data-category="recruitment" data-service="board-induction">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">Board Induction</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                              Comprehensive onboarding programs for new board members including company orientation, governance framework introduction, regulatory compliance briefing, and integration support to ensure effective contribution from day one.
                            </p>
                            <div className="service-details hidden">
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                                  <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Accelerated integration</li>
                                    <li>• Comprehensive orientation</li>
                                    <li>• Regulatory briefing</li>
                                    <li>• Ongoing mentorship support</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-primary mb-2">Duration &amp; Format:</h4>
                                  <p className="text-sm text-text-secondary">2-4 week structured program with ongoing support for first 6 months</p>
                                  <div className="mt-2 text-sm">
                                    <span className="inline-block bg-success/10 text-success px-2 py-1 rounded text-xs">Onboarding</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <button className="toggle-details text-accent hover:text-accent-600 font-medium text-sm">Show Details</button>
                              <Link href="/contact" className="btn-primary text-sm px-4 py-2">Request Information</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* No Results Message */}
                    <div id="no-results" className="hidden text-center py-12">
                      <svg className="w-16 h-16 text-text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h3 className="text-lg font-medium text-text-primary mb-2">No services found</h3>
                      <p className="text-text-secondary">Try adjusting your search criteria or filters</p>
                    </div>
                  </div>
                </div>
                {/* Right Sidebar */}
                <div className="lg:col-span-1 self-start">
                  <div className="sticky top-24 space-y-6">
                    {/* Downloadable Resources */}
                    <div className="relative card overflow-visible pt-8">
                      <span className="absolute right-2 -translate-y-1/2 bg-accent text-primary text-[10px] font-semibold px-2 py-[2px] z-20 shadow-subtle" style={{top: 0}}>Coming Soon</span>
                      <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none z-0" />
                      <h3 className="text-lg font-semibold text-primary mb-4">Training Brochures</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <div className="text-sm font-medium text-text-primary">Board Training Guide</div>
                              <div className="text-xs text-text-secondary">PDF • 2.4 MB</div>
                            </div>
                          </div>
                          <button className="download-btn text-accent hover:text-accent-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <div className="text-sm font-medium text-text-primary">Governance Framework</div>
                              <div className="text-xs text-text-secondary">PDF • 1.8 MB</div>
                            </div>
                          </div>
                          <button className="download-btn text-accent hover:text-accent-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Case Study Highlights */}
                    <div className="card">
                      <h3 className="text-lg font-semibold text-primary mb-4">Success Stories</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-medium text-text-primary text-sm">TechCorp Board Transformation</h4>
                          <p className="text-xs text-text-secondary mt-1">40% improvement in board effectiveness through comprehensive evaluation and training</p>
                        </div>
                        <div className="border-l-4 border-success pl-4">
                          <h4 className="font-medium text-text-primary text-sm">Global Finance Compliance</h4>
                          <p className="text-xs text-text-secondary mt-1">100% regulatory compliance achieved through secretarial training program</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="py-16" style={{backgroundColor: '#E0E8EB'}}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-text-secondary">Get answers to common questions about our services</p>
              </div>
              <div className="space-y-4">
                <div className="faq-item card">
                  <button className="faq-question w-full text-left flex items-center justify-between p-0">
                    <span className="font-medium text-primary">What is included in a board evaluation?</span>
                    <svg className="w-5 h-5 text-text-secondary transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="faq-answer hidden mt-4 text-text-secondary">
                    Our board evaluation includes individual director assessments, board dynamics analysis, governance framework review, and comprehensive reporting with actionable recommendations for improvement.
                  </div>
                </div>
                <div className="faq-item card">
                  <button className="faq-question w-full text-left flex items-center justify-between p-0">
                    <span className="font-medium text-primary">How long do training programs typically last?</span>
                    <svg className="w-5 h-5 text-text-secondary transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="faq-answer hidden mt-4 text-text-secondary">
                    Training duration varies by program type. Board trainings are typically 1-3 days, secretarial trainings are 2 days, while comprehensive governance programs can be modular from half-day to multi-week courses.
                  </div>
                </div>
                <div className="faq-item card">
                  <button className="faq-question w-full text-left flex items-center justify-between p-0">
                    <span className="font-medium text-primary">Do you provide customized training programs?</span>
                    <svg className="w-5 h-5 text-text-secondary transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="faq-answer hidden mt-4 text-text-secondary">
                    Yes, all our training programs are tailored to meet specific organizational needs, industry requirements, and regulatory frameworks relevant to your business.
                  </div>
                </div>
                <div className="faq-item card">
                  <button className="faq-question w-full text-left flex items-center justify-between p-0">
                    <span className="font-medium text-primary">What is the typical timeline for board recruitment?</span>
                    <svg className="w-5 h-5 text-text-secondary transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="faq-answer hidden mt-4 text-text-secondary">
                    Board recruitment typically takes 3-6 months depending on the role complexity, candidate availability, and specific requirements. We provide ongoing support throughout the process.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="relative py-20 bg-primary-800">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated on Governance Best Practices
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights, regulatory updates, and governance trends delivered to your inbox.
              </p>
              <form id="services-newsletter-form" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/newsletter" method="POST">
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
                <input type="hidden" name="form_type" defaultValue="newsletter" />
                <input type="hidden" name="csrf_token" defaultValue="" />
                <input type="email" name="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-lg bg-white text-text-primary border-0 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm" required />
                <button type="submit" className="btn-accent whitespace-nowrap">Subscribe</button>
              </form>
              <div id="newsletter-feedback" className="mt-4 text-sm text-white/90" />
            </div>
          </section>
    </>
  );
}