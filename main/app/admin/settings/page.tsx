'use client';

import { useState } from 'react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    system: {
      siteName: 'Ascend Governance',
      maintenanceMode: false,
      registrationEnabled: true,
    },
    permissions: {
      admin: ['all'],
      consultant: ['view_bookings', 'manage_sessions', 'view_messages'],
      user: ['view_bookings', 'send_messages'],
    },
    profile: {
      name: 'Admin User',
      email: 'admin@ascendgovernance.co.ke',
      role: 'Administrator',
    },
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary mt-2">Manage system settings and preferences</p>
      </div>

      {/* System Settings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">System Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Site Name</label>
            <input
              type="text"
              value={settings.system.siteName}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  system: { ...settings.system, siteName: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <h3 className="font-medium text-text-primary">Maintenance Mode</h3>
              <p className="text-sm text-text-secondary">Enable maintenance mode to restrict access</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.system.maintenanceMode}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    system: { ...settings.system, maintenanceMode: e.target.checked },
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="font-medium text-text-primary">User Registration</h3>
              <p className="text-sm text-text-secondary">Allow new users to register</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.system.registrationEnabled}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    system: { ...settings.system, registrationEnabled: e.target.checked },
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Role Permissions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Role Permissions</h2>
        <div className="space-y-4">
          {Object.entries(settings.permissions).map(([role, permissions]) => (
            <div key={role} className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-text-primary mb-3 capitalize">{role} Permissions</h3>
              <div className="space-y-2">
                {permissions.map((permission, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={true}
                      readOnly
                      className="rounded border-border text-primary focus:ring-primary"
                    />
                    <label className="text-sm text-text-primary">{permission}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-text-secondary mt-4">Permission management UI only. Backend integration required.</p>
      </div>

      {/* Admin Profile */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Admin Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
            <input
              type="text"
              value={settings.profile.name}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, name: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, email: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Role</label>
            <input
              type="text"
              value={settings.profile.role}
              readOnly
              className="w-full px-3 py-2 border border-border rounded-lg bg-secondary-100 text-text-secondary"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="btn-primary">
          Save Settings
        </button>
      </div>
    </div>
  );
}

