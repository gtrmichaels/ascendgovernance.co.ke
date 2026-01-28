'use client';

import { useState } from 'react';

interface Session {
  id: number;
  clientName: string;
  service: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'past';
  notes?: string;
}

export default function ConsultantSessions() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [sessions] = useState<Session[]>([
    {
      id: 1,
      clientName: 'Acme Corporation',
      service: 'Board Composition Review',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '2 hours',
      status: 'upcoming',
    },
    {
      id: 2,
      clientName: 'Tech Solutions Ltd',
      service: 'Compliance Audit',
      date: '2024-01-18',
      time: '2:00 PM',
      duration: '1.5 hours',
      status: 'upcoming',
    },
    {
      id: 3,
      clientName: 'Global Industries',
      service: 'Strategic Planning Session',
      date: '2024-01-20',
      time: '9:00 AM',
      duration: '3 hours',
      status: 'upcoming',
    },
    {
      id: 4,
      clientName: 'Finance Corp',
      service: 'Risk Management Consultation',
      date: '2024-01-12',
      time: '3:00 PM',
      duration: '2 hours',
      status: 'past',
      notes: 'Discussed risk assessment framework and implementation strategy.',
    },
    {
      id: 5,
      clientName: 'Enterprise Group',
      service: 'Governance Training',
      date: '2024-01-10',
      time: '11:00 AM',
      duration: '4 hours',
      status: 'past',
      notes: 'Conducted comprehensive governance training for board members.',
    },
  ]);

  const upcomingSessions = sessions.filter((s) => s.status === 'upcoming');
  const pastSessions = sessions.filter((s) => s.status === 'past');

  const openSessionDetails = (session: Session) => {
    setSelectedSession(session);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Sessions</h1>
        <p className="text-text-secondary mt-2">View and manage your consultation sessions</p>
      </div>

      {/* Upcoming Sessions */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="card hover:shadow-md transition-shadow cursor-pointer" onClick={() => openSessionDetails(session)}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{session.clientName}</h3>
                  <p className="text-sm text-text-secondary mt-1">{session.service}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-success-100 text-success-700">
                  Upcoming
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-text-secondary">
                  <span className="mr-2">📅</span>
                  {session.date}
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="mr-2">🕐</span>
                  {session.time} ({session.duration})
                </div>
              </div>
              <button className="mt-4 text-sm text-primary hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>
        {upcomingSessions.length === 0 && (
          <div className="card text-center py-8">
            <p className="text-text-secondary">No upcoming sessions</p>
          </div>
        )}
      </div>

      {/* Past Sessions */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Past Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastSessions.map((session) => (
            <div key={session.id} className="card hover:shadow-md transition-shadow cursor-pointer" onClick={() => openSessionDetails(session)}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{session.clientName}</h3>
                  <p className="text-sm text-text-secondary mt-1">{session.service}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary-200 text-text-secondary">
                  Completed
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-text-secondary">
                  <span className="mr-2">📅</span>
                  {session.date}
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="mr-2">🕐</span>
                  {session.time} ({session.duration})
                </div>
              </div>
              {session.notes && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-text-secondary line-clamp-2">{session.notes}</p>
                </div>
              )}
              <button className="mt-4 text-sm text-primary hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>
        {pastSessions.length === 0 && (
          <div className="card text-center py-8">
            <p className="text-text-secondary">No past sessions</p>
          </div>
        )}
      </div>

      {/* Session Details Modal */}
      {showModal && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-text-primary">Session Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-secondary">Client</label>
                <p className="text-text-primary font-semibold">{selectedSession.clientName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Service</label>
                <p className="text-text-primary">{selectedSession.service}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-secondary">Date</label>
                  <p className="text-text-primary">{selectedSession.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-text-secondary">Time</label>
                  <p className="text-text-primary">{selectedSession.time}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Duration</label>
                <p className="text-text-primary">{selectedSession.duration}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Status</label>
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    selectedSession.status === 'upcoming'
                      ? 'bg-success-100 text-success-700'
                      : 'bg-secondary-200 text-text-secondary'
                  }`}
                >
                  {selectedSession.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                </span>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary mb-2 block">Notes</label>
                <textarea
                  rows={4}
                  className="input-field"
                  placeholder="Add session notes..."
                  defaultValue={selectedSession.notes || ''}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={() => setShowModal(false)} className="btn-secondary">
                Close
              </button>
              <button className="btn-primary">Save Notes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


