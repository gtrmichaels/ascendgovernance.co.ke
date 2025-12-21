'use client';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Settings</h1>
        <p className="text-text-secondary mt-1">Manage system settings and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Admin Profile */}
        <div className="card">
          <h2 className="text-xl font-bold text-primary mb-4">Admin Profile</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
                <input type="text" className="input-field w-full" defaultValue="Admin User" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                <input type="email" className="input-field w-full" defaultValue="admin@ascendgovernance.co.ke" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Password</label>
                <input type="password" className="input-field w-full" placeholder="Enter new password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Confirm Password</label>
                <input type="password" className="input-field w-full" placeholder="Confirm new password" />
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="card">
          <h2 className="text-xl font-bold text-primary mb-4">System Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Site Name</label>
              <input type="text" className="input-field w-full" defaultValue="Ascend Governance" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Site Email</label>
              <input type="email" className="input-field w-full" defaultValue="info@ascendgovernance.co.ke" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Maintenance Mode</label>
              <label className="flex items-center space-x-2 mt-2">
                <input type="checkbox" className="text-primary focus:ring-primary-500" />
                <span className="text-sm text-text-secondary">Enable maintenance mode</span>
              </label>
            </div>
            <div className="pt-4 border-t border-border">
              <button className="btn-primary">Save Settings</button>
            </div>
          </div>
        </div>

        {/* Role Permissions */}
        <div className="card">
          <h2 className="text-xl font-bold text-primary mb-4">Role Permissions</h2>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium text-text-primary">Admin</h3>
                  <p className="text-sm text-text-secondary">Full system access</p>
                </div>
                <button className="btn-secondary text-sm">Manage</button>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium text-text-primary">Editor</h3>
                  <p className="text-sm text-text-secondary">Content management access</p>
                </div>
                <button className="btn-secondary text-sm">Manage</button>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium text-text-primary">Viewer</h3>
                  <p className="text-sm text-text-secondary">Read-only access</p>
                </div>
                <button className="btn-secondary text-sm">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

