'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

export default function RegisterConsultantPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="h-16" />
      <Breadcrumb items={[
        { label: 'Home', href: '/homepage' },
        { label: 'Register', href: '/register' },
        { label: 'Consultant', href: '/register/consultant' }
      ]} />

      {!showForm ? (
        <>
          {/* Hero Section */}
          <section className="relative py-20 bg-primary-700 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-consultant" width={10} height={10} patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width={100} height={100} fill="url(#grid-consultant)" />
              </svg>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Become a Consultant
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Join our network of professional consultants and help organizations achieve governance excellence
              </p>
            </div>
          </section>

          {/* How It Works Guide */}
          <section className="py-20" style={{backgroundColor: '#FAFCFB'}}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">How It Works</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Our consultant registration process is simple and straightforward. Here's what you can expect:
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-8 mb-12">
                {/* Step 1 */}
                <div className="card">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Submit Your Application</h3>
                      <p className="text-text-secondary mb-4">
                        Fill out the registration form with your professional details, including your bio, qualifications, 
                        areas of expertise, and supporting documents (CV, certifications, recommendations).
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Personal and contact information</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Professional bio and qualifications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Areas of expertise and specializations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Supporting documents (CV, certifications)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="card">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Review Process</h3>
                      <p className="text-text-secondary mb-4">
                        Our team will review your application to ensure you meet our quality standards. 
                        This typically takes 2-3 business days.
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Verification of credentials and qualifications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Assessment of expertise and experience</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Review of supporting documents</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="card">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Get Approved</h3>
                      <p className="text-text-secondary mb-4">
                        Once approved, you'll receive access to your consultant dashboard where you can:
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Manage your profile and availability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>View and respond to booking requests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Schedule and manage consultation sessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Communicate directly with clients</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Track your bookings and earnings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="card">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Start Consulting</h3>
                      <p className="text-text-secondary mb-4">
                        Begin receiving booking requests from clients seeking your expertise. 
                        You'll have full control over your schedule and can accept or decline requests based on your availability.
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Set your availability and working hours</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Receive notifications for new bookings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Build your reputation through successful consultations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="card bg-primary-50 border-primary-200 mb-12">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Benefits of Joining</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Professional Network</h4>
                      <p className="text-sm text-text-secondary">Connect with other governance professionals and expand your network</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Verified Status</h4>
                      <p className="text-sm text-text-secondary">Gain verified consultant status that builds trust with clients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Flexible Schedule</h4>
                      <p className="text-sm text-text-secondary">Control your availability and work on your own terms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Direct Communication</h4>
                      <p className="text-sm text-text-secondary">Communicate directly with clients through our messaging system</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button onClick={() => setShowForm(true)} className="btn-primary text-lg px-8 py-4">
                  Continue to Registration
                </button>
                <Link href="/signin" className="btn-secondary text-lg px-8 py-4 text-center">
                  Already have an account? Sign In
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Registration Form Section - Reuse existing form from signup page */}
          <section className="relative py-20 bg-primary-700 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-form" width={10} height={10} patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width={100} height={100} fill="url(#grid-form)" />
              </svg>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Your Registration
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Please provide your details below. Our team will review your application within 2-3 business days.
              </p>
            </div>
          </section>

          {/* Form Section - Using the existing form structure */}
          <section className="py-20" style={{backgroundColor: '#FAFCFB'}}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="mb-6">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-primary hover:text-primary-600 flex items-center space-x-2 mb-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Guide</span>
                </button>
              </div>

              <div className="card mb-8">
                <div className="flex items-start space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-primary mb-2">Registration Information</h2>
                    <p className="text-sm text-text-secondary">Please complete all required fields marked with an asterisk (*). Our team will review your application and contact you within 2-3 business days.</p>
                  </div>
                </div>
              </div>

              {/* Import the form from signup page - I'll create it inline here */}
              <form 
                id="consultant-form" 
                className="card space-y-6" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const password = formData.get('password') as string;
                  const confirmPassword = formData.get('confirmPassword') as string;

                  if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                  }

                  if (password.length < 8) {
                    alert('Password must be at least 8 characters long');
                    return;
                  }
                  
                  try {
                    // For now, submit basic registration. File uploads can be handled separately
                    const response = await fetch('http://localhost:3001/auth/register', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      credentials: 'include',
                      body: JSON.stringify({
                        email: formData.get('email'),
                        password,
                        firstName: formData.get('firstName'),
                        lastName: formData.get('lastName'),
                        phone: formData.get('phone'),
                        linkedinUrl: formData.get('linkedin'),
                        bio: formData.get('bio'),
                        qualifications: formData.get('qualifications'),
                        userType: 'consultant',
                      }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                      throw new Error(data.error || 'Registration failed');
                    }

                    // Store access token in localStorage and cookie
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    // Also set cookie for middleware
                    document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Strict`;

                    // Redirect to consultant dashboard (pending approval)
                    window.location.href = '/consultant';
                  } catch (err) {
                    alert(err instanceof Error ? err.message : 'Registration failed');
                  }
                }}
                noValidate
              >
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" className="input-field" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email *</label>
                    <input type="email" id="email" name="email" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Phone *</label>
                    <input type="tel" id="phone" name="phone" className="input-field" placeholder="+2547XXXXXXXX" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-text-primary mb-2">LinkedIn Profile URL *</label>
                  <input type="url" id="linkedin" name="linkedin" className="input-field" placeholder="https://linkedin.com/in/your-handle" required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">Password *</label>
                    <input type="password" id="password" name="password" className="input-field" placeholder="Minimum 8 characters" required minLength={8} />
                    <p className="text-xs text-text-secondary mt-1">Must be at least 8 characters long</p>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">Confirm Password *</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="input-field" placeholder="Confirm your password" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-text-primary mb-2">Short Bio *</label>
                  <textarea id="bio" name="bio" rows={4} className="input-field" placeholder="Tell us about your expertise, sectors, and years of experience..." required />
                </div>

                <div>
                  <label htmlFor="qualifications" className="block text-sm font-medium text-text-primary mb-2">Professional Qualifications</label>
                  <textarea id="qualifications" name="qualifications" rows={3} className="input-field" placeholder="e.g., MBA (Finance), CPA(K), Certified Governance Auditor" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="profile_photo" className="block text-sm font-medium text-text-primary mb-2">
                      Profile Photo (JPG/PNG)
                      <span className="text-text-secondary font-normal ml-1">Optional</span>
                    </label>
                    <input type="file" id="profile_photo" name="profile_photo" accept="image/*" className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="cv_file" className="block text-sm font-medium text-text-primary mb-2">
                      CV (PDF/DOC)
                      <span className="text-text-secondary font-normal ml-1">Optional</span>
                    </label>
                    <input type="file" id="cv_file" name="cv_file" accept=".pdf,.doc,.docx" className="input-field" />
                  </div>
                </div>

                <div>
                  <label htmlFor="recommendations" className="block text-sm font-medium text-text-primary mb-2">
                    Recommendations (PDF/JPG/PNG)
                    <span className="text-text-secondary font-normal ml-1">Optional - Multiple files allowed</span>
                  </label>
                  <input type="file" id="recommendations" name="recommendations[]" accept=".pdf,.jpg,.jpeg,.png,.webp" className="input-field" multiple />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-text-primary mb-2">
                    Additional Information
                    <span className="text-text-secondary font-normal ml-1">Optional</span>
                  </label>
                  <textarea id="additionalInfo" name="additionalInfo" rows={3} className="input-field" placeholder="Any additional notes or relevant details..." />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="privacy" name="privacy" className="mt-1 text-primary focus:ring-primary-500" required />
                  <label htmlFor="privacy" className="text-sm text-text-secondary">
                    I confirm the details are accurate and consent to processing per the{' '}
                    <a className="text-primary hover:underline" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>. *
                  </label>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-primary flex-1 text-lg py-3">Submit Registration</button>
                    <Link href="/register" className="btn-secondary flex-1 text-center text-lg py-3">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </>
      )}
    </>
  );
}

