'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-surface py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/homepage" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-primary font-medium">Contact</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact &amp; Consultation Booking
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to elevate your governance standards? Connect with our experts to discuss your organization&apos;s needs and schedule a personalized consultation.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form - Left Side (7 cols) */}
            <div className="lg:col-span-7">
              <div className="card">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">Schedule Your Consultation</h2>
                  <p className="text-text-secondary">Fill out the form below and our governance experts will get back to you within 24 hours to schedule your personalized consultation.</p>
                </div>
                <form id="consultation-form" className="space-y-6" action="/api/contact" method="POST">
                  <input type="hidden" name="form_type" defaultValue="consultation" />
                  <input type="hidden" name="csrf_token" defaultValue="" />
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
                  
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">First Name *</label>
                      <input type="text" id="firstName" name="firstName" className="input-field" required />
                      <span className="error-message hidden text-error text-sm mt-1">Please enter your first name</span>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" className="input-field" required />
                      <span className="error-message hidden text-error text-sm mt-1">Please enter your last name</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-text-primary mb-2">Job Title</label>
                    <input type="text" id="title" name="title" className="input-field" placeholder="e.g., Board Chair, CEO, Company Secretary" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">Company Name *</label>
                    <input type="text" id="company" name="company" className="input-field" required />
                    <span className="error-message hidden text-error text-sm mt-1">Please enter your company name</span>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" className="input-field" required />
                      <span className="error-message hidden text-error text-sm mt-1">Please enter a valid email address</span>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="input-field" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">Service Interest *</label>
                    <select id="service" name="service" className="input-field" required>
                      <option value="">Select a service</option>
                      <option value="board-evaluation">Board Evaluations</option>
                      <option value="board-training">Board Trainings</option>
                      <option value="secretarial-training">Secretarial Trainings</option>
                      <option value="governance-training">Corporate Governance Trainings</option>
                      <option value="consultancy">Governance Consultancy</option>
                      <option value="committee-training">Committee Trainings</option>
                      <option value="board-recruitment">Board Recruitment</option>
                      <option value="board-induction">Board Induction</option>
                    </select>
                    <span className="error-message hidden text-error text-sm mt-1">Please select a service</span>
                  </div>

                  {/* Consultation Format */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-3">Preferred Consultation Format *</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-surface transition-colors duration-200">
                        <input type="radio" name="format" value="in-person" className="text-primary focus:ring-primary-500" required />
                        <div className="ml-3">
                          <div className="font-medium text-text-primary">In-Person</div>
                          <div className="text-sm text-text-secondary">Face-to-face meeting</div>
                        </div>
                      </label>
                      <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-surface transition-colors duration-200">
                        <input type="radio" name="format" value="virtual" className="text-primary focus:ring-primary-500" required />
                        <div className="ml-3">
                          <div className="font-medium text-text-primary">Virtual</div>
                          <div className="text-sm text-text-secondary">Video conference</div>
                        </div>
                      </label>
                      <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-surface transition-colors duration-200">
                        <input type="radio" name="format" value="phone" className="text-primary focus:ring-primary-500" required />
                        <div className="ml-3">
                          <div className="font-medium text-text-primary">Phone</div>
                          <div className="text-sm text-text-secondary">Voice call</div>
                        </div>
                      </label>
                    </div>
                    <span className="error-message hidden text-error text-sm mt-1">Please select a consultation format</span>
                  </div>

                  {/* Scheduling Widget */}
                  <div className="bg-surface p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-4">Schedule Your Consultation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-text-primary mb-2">Preferred Date</label>
                        <input type="date" id="preferredDate" name="preferredDate" className="input-field" />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-text-primary mb-2">Preferred Time</label>
                        <select id="preferredTime" name="preferredTime" className="input-field">
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <label htmlFor="timezone" className="block text-sm font-medium text-text-primary mb-2">Timezone</label>
                        <select id="timezone" name="timezone" className="input-field">
                          <option value="EST">Eastern Time (EST)</option>
                          <option value="CST">Central Time (CST)</option>
                          <option value="MST">Mountain Time (MST)</option>
                          <option value="PST">Pacific Time (PST)</option>
                          <option value="GMT">Greenwich Mean Time (GMT)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-text-primary mb-2">Meeting Duration</label>
                        <select id="duration" name="duration" className="input-field" defaultValue="60">
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="90">1.5 hours</option>
                          <option value="120">2 hours</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} className="input-field" placeholder="Tell us about your governance needs, current challenges, or specific areas you'd like to discuss..." defaultValue="" />
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="privacy" name="privacy" className="mt-1 text-primary focus:ring-primary-500" required />
                    <label htmlFor="privacy" className="text-sm text-text-secondary">
                      I agree to the <a href="https://ascendgovernance.co.ke/privacy-policy" className="text-primary hover:text-primary-600 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to being contacted by Ascend Governance regarding my inquiry. *
                    </label>
                    <span className="error-message hidden text-error text-sm">Please accept the privacy policy</span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button type="submit" className="btn-primary w-full text-lg py-4">
                      Schedule Consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Business Information - Right Side (5 cols) */}
            <div className="lg:col-span-5 space-y-8 sticky top-24 self-start">
              {/* Contact Information */}
              <div className="card">
                <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Office Address</div>
                      <div className="text-text-secondary">
                        Royal Offices |1st Floor | No. 17 Mogotio Rd<br />Off Chiromo Lane Westlands
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Phone Number</div>
                      <div className="text-text-secondary">
                        +254 726 328 555
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Email</div>
                      <div className="text-text-secondary">
                        info@ascendgovernance.co.ke
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Business Hours</div>
                      <div className="text-text-secondary">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">LinkedIn</div>
                      <a href="#" className="text-accent hover:text-accent-600 transition-colors duration-200">
                        linkedin.com/company/ascend-governance
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="card p-0 overflow-hidden">
                <div className="h-64 bg-surface relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.484668390335!2d36.80749677496542!3d-1.2673932987205434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c2cc63abf%3A0x8a56926007976f30!2sRoyal%20Offices!5e1!3m2!1sen!2ske!4v1754654275233!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                  />
                </div>
              </div>

              {/* Resource Downloads */}
              <div className="relative card overflow-visible pt-8">
                <span className="absolute right-2 -translate-y-1/2 bg-accent text-primary text-[10px] font-semibold px-2 py-[2px] z-20 shadow-subtle" style={{top: 0}}>Coming Soon</span>
                <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none z-0" />
                <h3 className="text-xl font-semibold text-primary mb-6">Free Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <div className="font-medium text-primary">Governance Assessment Checklist</div>
                        <div className="text-sm text-text-secondary">Comprehensive evaluation framework</div>
                      </div>
                    </div>
                    <button className="btn-secondary text-sm">Download</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div>
                        <div className="font-medium text-primary">Company Brochure</div>
                        <div className="text-sm text-text-secondary">Complete service overview</div>
                      </div>
                    </div>
                    <button className="btn-secondary text-sm">Download</button>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card bg-primary text-white">
                <h3 className="text-xl font-semibold mb-4">Stay Informed</h3>
                <p className="text-white/90 mb-6">Subscribe to our governance insights newsletter for the latest regulatory updates and best practices.</p>
                <form id="sidebar-newsletter-form" className="space-y-4" action="/api/newsletter" method="POST">
                  <input type="hidden" name="form_type" defaultValue="newsletter" />
                  <input type="hidden" name="csrf_token" defaultValue="" />
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
                  <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border-0 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <button type="submit" className="btn-accent w-full">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Consultation Scheduled!</h3>
            <p className="text-text-secondary mb-6">Thank you for your interest. We&apos;ll send you a calendar invite and confirmation email within the next hour.</p>
            <button onClick={() => setShowSuccessModal(false)} className="btn-primary">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
