'use client';

import { useState } from 'react';

export default function ConsultantProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@ascendgovernance.co.ke',
    phone: '+254 712 345 678',
    bio: 'Experienced corporate governance consultant with over 15 years of expertise in board composition, compliance, and organizational leadership. Specialized in helping organizations achieve governance excellence.',
    expertise: ['Board Composition', 'Compliance', 'Risk Management', 'Strategic Planning'],
    credentials: 'MBA, Certified Corporate Governance Professional (CCGP)',
    verificationStatus: 'verified',
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Profile</h1>
          <p className="text-text-secondary mt-2">Manage your consultant profile and credentials</p>
        </div>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="btn-primary"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Photo Section */}
      <div className="card">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary-200 flex items-center justify-center">
              <span className="text-3xl font-semibold text-primary-700">JD</span>
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <div className="flex items-center space-x-2 mt-2">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  profileData.verificationStatus === 'verified'
                    ? 'bg-success-100 text-success-700'
                    : 'bg-warning-100 text-warning-700'
                }`}
              >
                {profileData.verificationStatus === 'verified' ? '✓ Verified' : 'Pending Verification'}
              </span>
            </div>
            {isEditing && (
              <p className="text-sm text-text-secondary mt-2">Click the camera icon to upload a new photo</p>
            )}
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">First Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.firstName}
                onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-text-primary">{profileData.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-text-primary">{profileData.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-text-primary">{profileData.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-text-primary">{profileData.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Bio</h3>
        {isEditing ? (
          <textarea
            value={profileData.bio}
            onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
            rows={4}
            className="input-field"
          />
        ) : (
          <p className="text-text-primary leading-relaxed">{profileData.bio}</p>
        )}
      </div>

      {/* Areas of Expertise */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {profileData.expertise.map((area, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>
        {isEditing && (
          <button className="mt-4 text-sm text-primary hover:underline">
            + Add Expertise Area
          </button>
        )}
      </div>

      {/* Credentials */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Credentials</h3>
        {isEditing ? (
          <input
            type="text"
            value={profileData.credentials}
            onChange={(e) => setProfileData({ ...profileData, credentials: e.target.value })}
            className="input-field"
          />
        ) : (
          <p className="text-text-primary">{profileData.credentials}</p>
        )}
      </div>
    </div>
  );
}


