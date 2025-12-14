'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [uploadProgress, setUploadProgress] = useState(0);

  return (
    <>
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Register as a Consultant</h1>
          <p className="text-white/90">Join our network of professional consultants. Provide your details below and our team will review your profile.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div id="form-feedback" className="mb-6" />
          <form id="consultant-form" className="space-y-6" action="/api/consultant" method="POST" encType="multipart/form-data" noValidate>
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
                <label htmlFor="profile_photo" className="block text-sm font-medium text-text-primary mb-2">Profile Photo (JPG/PNG) </label>
                <div className="flex items-center gap-4">
                  <input type="file" id="profile_photo" name="profile_photo" accept="image/*" className="input-field" />
                  <button type="button" id="clear_profile_photo" className="btn-secondary px-4 py-2">Clear</button>
                </div>
                <p id="profile_photo_info" className="text-caption mt-1" />
                <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
              </div>
              <div>
                <label htmlFor="cv_file" className="block text-sm font-medium text-text-primary mb-2">CV (PDF/DOC) </label>
                <div className="flex items-center gap-4">
                  <input type="file" id="cv_file" name="cv_file" accept=".pdf,.doc,.docx" className="input-field" />
                  <button type="button" id="clear_cv_file" className="btn-secondary px-4 py-2">Clear</button>
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
              <label htmlFor="recommendations" className="block text-sm font-medium text-text-primary mb-2">Recommendations (PDF/JPG/PNG) - multiple</label>
              <input type="file" id="recommendations" name="recommendations[]" accept=".pdf,.jpg,.jpeg,.png,.webp" className="input-field" multiple />
              <div id="rec_list" className="mt-2 space-y-2" />
              <div id="rec_meta" className="text-caption mt-1" />
              <p className="field-error text-error text-sm mt-1" style={{display: 'none'}} />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Additional Information</label>
              <textarea name="additionalInfo" rows={3} className="input-field" placeholder="Any additional notes or relevant details" defaultValue="" />
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

            <div className="pt-2 space-y-3">
              {uploadProgress > 0 && (
                <progress id="upload-progress" max={100} value={uploadProgress} style={{width: '100%'}} />
              )}
              <button type="submit" className="btn-primary w-full">Submit Registration</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
