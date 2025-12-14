'use client';

export default function ProfilePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: "\n        /* Align profile details card with heading on wider screens */\n        .profile-align { margin-top: 0; }\n        @media (min-width: 768px) {\n            .profile-align { margin-top: 0; }\n        }\n        /* Make the \"Edit My Details\" button smaller */\n        #toggleEditBtn { font-size: 0.875rem; line-height: 1.25rem; padding: 0.375rem 0.75rem; }\n        /* Subtle greenish pattern for profile content area */\n        .profile-surface {\n            background-image: radial-gradient(rgba(16, 185, 129, 0.12) 1px, transparent 1px);\n            background-size: 24px 24px;\n            border-radius: 12px;\n        }\n        /* Pattern overlay with varying density */\n        .profile-wrap { position: relative; }\n        .profile-pattern { position: absolute; inset: 0; pointer-events: none; z-index: 0; }\n    " }} />
      <div className="h-16" />
          <div className="bg-primary text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold">Welcome, <span id="welcomeName">John</span></h1>
              <p className="text-white/90 mt-2">Manage your profile details and account settings</p>
            </div>
          </div>
          <div className="min-h-screen max-w-3xl mx-auto p-6 profile-surface profile-wrap">
            <div className="profile-pattern" aria-hidden="true">
              <svg width="100%" height="100%" viewBox="0 0 1000 1200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="softGreen" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                  </radialGradient>
                </defs>
                {/* Soft blobs */}
                <g>
                  <circle cx={140} cy={160} r={160} fill="url(#softGreen)" />
                  <circle cx={860} cy={420} r={180} fill="url(#softGreen)" />
                  <circle cx={300} cy={880} r={200} fill="url(#softGreen)" />
                </g>
                {/* Dense dot cluster top-left */}
                <g fill="#10b981" fillOpacity="0.22">
                  <circle cx={90} cy={120} r={3} />
                  <circle cx={120} cy={90} r="2.5" />
                  <circle cx={150} cy={130} r="2.5" />
                  <circle cx={110} cy={160} r={2} />
                  <circle cx={170} cy={100} r={2} />
                  <circle cx={180} cy={150} r={3} />
                  <circle cx={210} cy={120} r={2} />
                  <circle cx={220} cy={170} r="2.5" />
                </g>
                {/* Sparse net bottom-right */}
                <g stroke="#10b981" strokeOpacity="0.18" strokeWidth={1}>
                  <path d="M780 920 C820 880, 900 880, 940 920" fill="none" />
                  <path d="M780 960 C820 920, 900 920, 940 960" fill="none" />
                  <path d="M780 1000 C820 960, 900 960, 940 1000" fill="none" />
                  <path d="M810 890 L810 1030" />
                  <path d="M860 890 L860 1030" />
                  <path d="M910 890 L910 1030" />
                </g>
                {/* Medium cluster mid-right */}
                <g fill="#10b981" fillOpacity="0.16">
                  <circle cx={780} cy={520} r="2.5" />
                  <circle cx={800} cy={540} r={2} />
                  <circle cx={820} cy={560} r="2.5" />
                  <circle cx={840} cy={540} r={2} />
                  <circle cx={860} cy={520} r={3} />
                </g>
              </svg>
            </div>
            <div id="feedback" className="mb-4" />
            {/* View-only section */}
            <div id="viewSection" className="grid md:grid-cols-3 gap-6 mb-6 items-start">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-4">My Profile</h1>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto overflow-hidden border border-border">
                    <img id="viewAvatarImg" src="/images/swklogo.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 profile-align">
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-primary">Profile Details</h2>
                    <button id="toggleEditBtn" className="btn-secondary">Edit My Details</button>
                  </div>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm text-text-secondary">Name</dt>
                      <dd id="viewName" className="font-medium text-text-primary">John Doe</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-text-secondary">Email</dt>
                      <dd className="font-medium text-text-primary">
                        <span id="viewEmail">john@example.com</span>
                        <span id="viewEmailStatus" className="ml-2 text-xs px-2 py-0.5 rounded bg-success/10 text-success border border-success" style={{display: 'none'}}>Verified</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-text-secondary">Phone</dt>
                      <dd id="viewPhone" className="font-medium text-text-primary">+254712345678</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-text-secondary">Bio</dt>
                      <dd id="viewBio" className="text-text-primary">Experienced governance consultant with focus on board effectiveness.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* Edit section (hidden by default) */}
            <div id="editSection" className="hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card md:col-span-1 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto overflow-hidden border border-border">
                    <img id="avatarImg" src="/images/swklogo.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <form id="avatarForm" className="mt-4" action="/api/profile/avatar" method="POST" encType="multipart/form-data">
                    <input type="hidden" name="form_type" defaultValue="auth_upload_avatar" />
                    <input type="hidden" name="csrf_token" defaultValue="" />
                    <input type="file" name="avatar" accept="image/*" className="input-field" />
                    <button type="submit" className="btn-secondary w-full mt-3">Update Avatar</button>
                  </form>
                </div>
                <div className="card md:col-span-2">
                  <form id="profileForm" action="/api/profile/update" method="POST" className="space-y-4">
                    <input type="hidden" name="form_type" defaultValue="auth_update_profile" />
                    <input type="hidden" name="csrf_token" defaultValue="" />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input type="tel" id="phone" name="phone" className="input-field" placeholder="+2547XXXXXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <textarea id="bio" name="bio" rows={4} className="input-field" defaultValue="" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" id="emailReadonly" className="input-field" readOnly />
                      <div className="text-sm text-text-secondary mt-1">To change email, enter a new one below and verify it.</div>
                      <input type="email" id="newEmail" name="newEmail" placeholder="New email (optional)" className="input-field mt-2" />
                    </div>
                    <button type="submit" className="btn-primary w-full">Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button id="logoutBtn" className="btn-secondary">Sign Out</button>
            </div>
          </div>
    </>
  );
}