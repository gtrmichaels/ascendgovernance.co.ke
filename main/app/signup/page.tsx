'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function SignupPage() {
  const [uploadProgress, setUploadProgress] = useState(0);

  return (
    <>
      <div className="h-16" />
      <Breadcrumb items={[
        { label: 'Home', href: '/homepage' },
        { label: 'Register as Consultant', href: '/signup' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 overflow-hidden">
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Register as a Consultant
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Join our network of professional consultants and expand your reach in corporate governance. Provide your details below and our team will review your profile.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Professional network access</span>
            <span className="mx-2">•</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Verified consultant status</span>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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

          <div id="form-feedback" className="mb-6" />
          <form id="consultant-form" className="card space-y-6" action="/api/consultant" method="POST" encType="multipart/form-data" noValidate>
            <input type="hidden" name="form_type" defaultValue="consultant" />
            <input type="hidden" name="csrf_token" defaultValue="" />
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{position: 'absolute', left: '-10000px'}} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">First Name *</label>
                <input type="text" id="firstName" name="firstName" className="input-field" required />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">Last Name *</label>
                <input type="text" id="lastName" name="lastName" className="input-field" required />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email *</label>
                <input type="email" id="email" name="email" className="input-field" required />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Phone *</label>
                <input type="tel" id="phone" name="phone" className="input-field" placeholder="+2547XXXXXXXX" required />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-text-primary mb-2">LinkedIn Profile URL *</label>
              <input type="url" id="linkedin" name="linkedin" className="input-field" placeholder="https://linkedin.com/in/your-handle" required />
              <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="profile_photo" className="block text-sm font-medium text-text-primary mb-2">
                  Profile Photo (JPG/PNG)
                  <span className="text-text-secondary font-normal ml-1">Optional</span>
                </label>
                <div className="flex items-center gap-3">
                  <input type="file" id="profile_photo" name="profile_photo" accept="image/*" className="input-field flex-1" />
                  <button type="button" id="clear_profile_photo" className="btn-secondary px-4 py-2 whitespace-nowrap">Clear</button>
                </div>
                <p id="profile_photo_info" className="text-caption mt-1" />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
              <div>
                <label htmlFor="cv_file" className="block text-sm font-medium text-text-primary mb-2">
                  CV (PDF/DOC)
                  <span className="text-text-secondary font-normal ml-1">Optional</span>
                </label>
                <div className="flex items-center gap-3">
                  <input type="file" id="cv_file" name="cv_file" accept=".pdf,.doc,.docx" className="input-field flex-1" />
                  <button type="button" id="clear_cv_file" className="btn-secondary px-4 py-2 whitespace-nowrap">Clear</button>
                </div>
                <p id="cv_file_info" className="text-caption mt-1" />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-text-primary mb-2">Short Bio *</label>
              <textarea id="bio" name="bio" rows={4} className="input-field" placeholder="Tell us about your expertise, sectors, and years of experience..." required defaultValue="" />
              <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
            </div>

            <div>
              <label htmlFor="qualifications" className="block text-sm font-medium text-text-primary mb-2">Professional Qualifications</label>
              <textarea id="qualifications" name="qualifications" rows={3} className="input-field" placeholder="e.g., MBA (Finance), CPA(K), Certified Governance Auditor" defaultValue="" />
            </div>

            <div>
              <label htmlFor="recommendations" className="block text-sm font-medium text-text-primary mb-2">
                Recommendations (PDF/JPG/PNG)
                <span className="text-text-secondary font-normal ml-1">Optional - Multiple files allowed</span>
              </label>
              <input type="file" id="recommendations" name="recommendations[]" accept=".pdf,.jpg,.jpeg,.png,.webp" className="input-field" multiple />
              <div id="rec_list" className="mt-3 space-y-2" />
              <div id="rec_meta" className="text-caption mt-1" />
              <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-text-primary mb-2">
                Additional Information
                <span className="text-text-secondary font-normal ml-1">Optional</span>
              </label>
              <textarea id="additionalInfo" name="additionalInfo" rows={3} className="input-field" placeholder="Any additional notes or relevant details that may help us understand your expertise better..." defaultValue="" />
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" id="privacy" name="privacy" className="mt-1 text-primary focus:ring-primary-500" required />
              <label htmlFor="privacy" className="text-sm text-text-secondary">
                I confirm the details are accurate and consent to processing and storage per the{' '}
                <a className="text-primary hover:text-primary-600 underline" href="https://ascendgovernance.co.ke/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>. *
              </label>
            </div>

            <div className="pt-4 border-t border-border">
              {uploadProgress > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">Uploading files...</span>
                    <span className="text-sm font-medium text-primary">{uploadProgress}%</span>
                  </div>
                  <progress id="upload-progress" max={100} value={uploadProgress} className="w-full h-2 rounded-full" />
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-primary flex-1 text-lg py-3">Submit Registration</button>
                <Link href="/homepage" className="btn-secondary flex-1 text-center text-lg py-3">Cancel</Link>
              </div>
              <p className="text-xs text-text-secondary text-center mt-4">
                By submitting this form, you agree to our{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                {' '}and{' '}
                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
