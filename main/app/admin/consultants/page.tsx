'use client';

import { useState, useEffect } from 'react';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';
import Notification from '../../components/Notification';

interface Consultant {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  linkedinUrl?: string;
  bio?: string;
  qualifications?: string;
  expertise: string[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
}

export default function AdminConsultants() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error' | 'warning' | 'info'>('success');

  useEffect(() => {
    fetchConsultants();
  }, []);

  const fetchConsultants = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('accessToken');
      const response = await fetch('http://localhost:3001/consultants', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch consultants');
      }

      const data = await response.json();
      setConsultants(data.consultants || []);
    } catch (error) {
      console.error('Error fetching consultants:', error);
      showNotificationMessage('Failed to load consultants', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const showNotificationMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
  };

  const handleViewProfile = (consultant: Consultant) => {
    setSelectedConsultant(consultant);
    setShowModal(true);
  };

  const handleApprove = async (consultantId: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`http://localhost:3001/consultants/${consultantId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ status: 'APPROVED' }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to approve consultant');
      }

      showNotificationMessage('Consultant approved successfully', 'success');
      await fetchConsultants();
      if (selectedConsultant?.id === consultantId) {
        setShowModal(false);
      }
    } catch (error) {
      showNotificationMessage(error instanceof Error ? error.message : 'Failed to approve consultant', 'error');
    }
  };

  const handleReject = async (consultantId: string) => {
    if (!confirm('Are you sure you want to reject this consultant? This action cannot be undone.')) {
      return;
    }

    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`http://localhost:3001/consultants/${consultantId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ status: 'REJECTED' }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to reject consultant');
      }

      showNotificationMessage('Consultant rejected', 'success');
      await fetchConsultants();
      if (selectedConsultant?.id === consultantId) {
        setShowModal(false);
      }
    } catch (error) {
      showNotificationMessage(error instanceof Error ? error.message : 'Failed to reject consultant', 'error');
    }
  };

  const getStatusDisplay = (status: string): 'pending' | 'approved' | 'rejected' => {
    return status.toLowerCase() as 'pending' | 'approved' | 'rejected';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Consultants</h1>
          <p className="text-text-secondary mt-2">Manage consultant applications and profiles</p>
        </div>
        <button
          onClick={fetchConsultants}
          className="btn-secondary"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {/* Loading State */}
      {isLoading && consultants.length === 0 ? (
        <div className="card text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-text-secondary mt-4">Loading consultants...</p>
        </div>
      ) : consultants.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-text-secondary">No consultants found</p>
        </div>
      ) : (
        /* Consultants Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultants.map((consultant) => (
            <div key={consultant.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary">{consultant.name}</h3>
                  <p className="text-sm text-text-secondary mt-1">{consultant.email}</p>
                </div>
                <StatusBadge status={getStatusDisplay(consultant.status)} />
              </div>

              {consultant.bio && (
                <div className="mb-4">
                  <p className="text-sm text-text-secondary line-clamp-2">{consultant.bio}</p>
                </div>
              )}

              {consultant.expertise && consultant.expertise.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {consultant.expertise.slice(0, 3).map((area, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                      >
                        {area}
                      </span>
                    ))}
                    {consultant.expertise.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-100 text-text-secondary rounded text-xs font-medium">
                        +{consultant.expertise.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <button
                  onClick={() => handleViewProfile(consultant)}
                  className="flex-1 btn-secondary text-sm py-2"
                >
                  View Profile
                </button>
                {consultant.status === 'PENDING' && (
                  <>
                    <button
                      onClick={() => handleApprove(consultant.id)}
                      className="flex-1 btn-primary text-sm py-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(consultant.id)}
                      className="px-4 py-2 text-sm font-medium text-error-600 hover:bg-error-50 rounded-lg transition-colors"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Consultant Detail Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Consultant Profile"
        size="lg"
      >
        {selectedConsultant && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Name</label>
              <p className="text-text-primary font-semibold text-lg">{selectedConsultant.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
              <p className="text-text-primary">{selectedConsultant.email}</p>
            </div>
            {selectedConsultant.phone && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Phone</label>
                <p className="text-text-primary">{selectedConsultant.phone}</p>
              </div>
            )}
            {selectedConsultant.organization && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Organization</label>
                <p className="text-text-primary">{selectedConsultant.organization}</p>
              </div>
            )}
            {selectedConsultant.linkedinUrl && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">LinkedIn</label>
                <a
                  href={selectedConsultant.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {selectedConsultant.linkedinUrl}
                </a>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Status</label>
              <StatusBadge status={getStatusDisplay(selectedConsultant.status)} />
            </div>
            {selectedConsultant.bio && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Bio</label>
                <p className="text-text-primary leading-relaxed">{selectedConsultant.bio}</p>
              </div>
            )}
            {selectedConsultant.qualifications && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Qualifications</label>
                <p className="text-text-primary leading-relaxed">{selectedConsultant.qualifications}</p>
              </div>
            )}
            {selectedConsultant.expertise && selectedConsultant.expertise.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Areas of Expertise</label>
                <div className="flex flex-wrap gap-2">
                  {selectedConsultant.expertise.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-end space-x-3 pt-4 border-t border-border">
              {selectedConsultant.status === 'PENDING' && (
                <>
                  <button
                    onClick={() => handleReject(selectedConsultant.id)}
                    className="btn-secondary border-error-200 text-error-600 hover:bg-error-50"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleApprove(selectedConsultant.id)}
                    className="btn-primary"
                  >
                    Approve
                  </button>
                </>
              )}
              <button onClick={() => setShowModal(false)} className="btn-secondary">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Notification */}
      <Notification
        message={notificationMessage}
        type={notificationType}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        duration={5000}
      />
    </div>
  );
}
