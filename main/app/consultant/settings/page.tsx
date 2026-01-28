'use client';

import { useState } from 'react';

export default function ConsultantSettings() {
  const [settings, setSettings] = useState({
    notifications: {
      emailNotifications: true,
      bookingRequests: true,
      messages: true,
      sessionReminders: true,
      weeklyDigest: false,
    },
    availability: {
      autoAcceptBookings: false,
      defaultSessionDuration: '2 hours',
      workingHours: {
        start: '09:00',
        end: '17:00',
      },
      timezone: 'Africa/Nairobi',
    },
    account: {
      language: 'English',
      dateFormat: 'DD/MM/YYYY',
      currency: 'KES',
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
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary mt-2">Manage your account preferences and settings</p>
      </div>

      {/* Notification Preferences */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Notification Preferences</h2>
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
              <h3 className="font-medium text-text-primary">Booking Requests</h3>
              <p className="text-sm text-text-secondary">Get notified when you receive new booking requests</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.bookingRequests}
                onChange={() => handleNotificationChange('bookingRequests')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
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

          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <h3 className="font-medium text-text-primary">Session Reminders</h3>
              <p className="text-sm text-text-secondary">Remind me 24 hours before scheduled sessions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.sessionReminders}
                onChange={() => handleNotificationChange('sessionReminders')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="font-medium text-text-primary">Weekly Digest</h3>
              <p className="text-sm text-text-secondary">Receive a weekly summary of your activity</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.weeklyDigest}
                onChange={() => handleNotificationChange('weeklyDigest')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Availability Settings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Availability Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-text-primary">Auto-Accept Bookings</h3>
              <p className="text-sm text-text-secondary">Automatically accept booking requests that match your availability</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.availability.autoAcceptBookings}
                onChange={() =>
                  setSettings({
                    ...settings,
                    availability: {
                      ...settings.availability,
                      autoAcceptBookings: !settings.availability.autoAcceptBookings,
                    },
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Default Session Duration</label>
            <select
              value={settings.availability.defaultSessionDuration}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  availability: {
                    ...settings.availability,
                    defaultSessionDuration: e.target.value,
                  },
                })
              }
              className="input-field"
            >
              <option value="30 minutes">30 minutes</option>
              <option value="1 hour">1 hour</option>
              <option value="1.5 hours">1.5 hours</option>
              <option value="2 hours">2 hours</option>
              <option value="3 hours">3 hours</option>
              <option value="4 hours">4 hours</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Working Hours Start</label>
              <input
                type="time"
                value={settings.availability.workingHours.start}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    availability: {
                      ...settings.availability,
                      workingHours: {
                        ...settings.availability.workingHours,
                        start: e.target.value,
                      },
                    },
                  })
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Working Hours End</label>
              <input
                type="time"
                value={settings.availability.workingHours.end}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    availability: {
                      ...settings.availability,
                      workingHours: {
                        ...settings.availability.workingHours,
                        end: e.target.value,
                      },
                    },
                  })
                }
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Timezone</label>
            <select
              value={settings.availability.timezone}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  availability: {
                    ...settings.availability,
                    timezone: e.target.value,
                  },
                })
              }
              className="input-field"
            >
              <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York (EST)</option>
              <option value="Europe/London">Europe/London (GMT)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Account Preferences */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Account Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Language</label>
            <select
              value={settings.account.language}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  account: {
                    ...settings.account,
                    language: e.target.value,
                  },
                })
              }
              className="input-field"
            >
              <option value="English">English</option>
              <option value="Swahili">Swahili</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Date Format</label>
            <select
              value={settings.account.dateFormat}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  account: {
                    ...settings.account,
                    dateFormat: e.target.value,
                  },
                })
              }
              className="input-field"
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Currency</label>
            <select
              value={settings.account.currency}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  account: {
                    ...settings.account,
                    currency: e.target.value,
                  },
                })
              }
              className="input-field"
            >
              <option value="KES">KES (Kenyan Shilling)</option>
              <option value="USD">USD (US Dollar)</option>
              <option value="EUR">EUR (Euro)</option>
              <option value="GBP">GBP (British Pound)</option>
            </select>
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


