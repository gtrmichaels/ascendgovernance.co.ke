'use client';

import { useState } from 'react';

export default function UserSettings() {
  const [settings, setSettings] = useState({
    notifications: {
      emailNotifications: true,
      bookingReminders: true,
      messages: true,
    },
  });

  const handleNotificationChange = (key: string) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key as keyof typeof settings.notifications],
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
          <p className="text-text-secondary mt-1">Manage your account preferences</p>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <h3 className="font-medium text-text-primary">Email Notifications</h3>
                <p className="text-sm text-text-secondary">Receive email notifications for important updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={() => handleNotificationChange('emailNotifications')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <h3 className="font-medium text-text-primary">Booking Reminders</h3>
                <p className="text-sm text-text-secondary">Get reminded 24 hours before your consultations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.bookingReminders}
                  onChange={() => handleNotificationChange('bookingReminders')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-medium text-text-primary">Messages</h3>
                <p className="text-sm text-text-secondary">Notify me when I receive new messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.messages}
                  onChange={() => handleNotificationChange('messages')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Password Change */}
        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Confirm new password"
              />
            </div>
            <button className="btn-primary">Update Password</button>
          </div>
        </div>

        {/* Account Deactivation */}
        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Account Management</h2>
          <div className="space-y-4">
            <p className="text-sm text-text-secondary">
              If you no longer wish to use this account, you can deactivate it. This action can be reversed by contacting support.
            </p>
            <button className="btn-secondary border-error-200 text-error-600 hover:bg-error-50" disabled>
              Deactivate Account
            </button>
            <p className="text-xs text-text-secondary">Account deactivation is currently disabled</p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="btn-primary">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

