'use client';

import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';

interface Consultant {
  id: number;
  name: string;
  email: string;
  expertise: string[];
  status: 'pending' | 'approved' | 'rejected';
  bio: string;
}

export default function AdminConsultants() {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [consultants] = useState<Consultant[]>([
    {
      id: 1,
      name: 'Dr. Jane Smith',
      email: 'jane.smith@ascendgovernance.co.ke',
      expertise: ['Board Composition', 'Compliance'],
      status: 'pending',
      bio: 'Experienced corporate governance consultant with 15+ years of expertise.',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@ascendgovernance.co.ke',
      expertise: ['Risk Management', 'Strategic Planning'],
      status: 'approved',
      bio: 'Specialized in risk management and strategic organizational planning.',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@ascendgovernance.co.ke',
      expertise: ['Compliance', 'Audit'],
      status: 'approved',
      bio: 'Expert in compliance and audit processes for large organizations.',
    },
    {
      id: 4,
      name: 'Michael Brown',
      email: 'michael.brown@ascendgovernance.co.ke',
      expertise: ['Board Composition'],
      status: 'rejected',
      bio: 'Corporate governance specialist focusing on board effectiveness.',
    },
  ]);

  const handleViewProfile = (consultant: Consultant) => {
    setSelectedConsultant(consultant);
    setShowModal(true);
  };

  const handleApprove = (consultantId: number) => {
    // In a real app, this would update the consultant status
    console.log(`Approve consultant ${consultantId}`);
  };

  const handleReject = (consultantId: number) => {
    // In a real app, this would update the consultant status
    console.log(`Reject consultant ${consultantId}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Consultants</h1>
          <p className="text-text-secondary mt-2">Manage consultant applications and profiles</p>
        </div>
      </div>

      {/* Consultants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultants.map((consultant) => (
          <div key={consultant.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary">{consultant.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{consultant.email}</p>
              </div>
              <StatusBadge status={consultant.status} />
            </div>

            <div className="mb-4">
              <p className="text-sm text-text-secondary line-clamp-2">{consultant.bio}</p>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {consultant.expertise.map((area, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-border">
              <button
                onClick={() => handleViewProfile(consultant)}
                className="flex-1 btn-secondary text-sm py-2"
              >
                View Profile
              </button>
              {consultant.status === 'pending' && (
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
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Status</label>
              <StatusBadge status={selectedConsultant.status} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Bio</label>
              <p className="text-text-primary leading-relaxed">{selectedConsultant.bio}</p>
            </div>
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
            <div className="flex justify-end space-x-3 pt-4 border-t border-border">
              {selectedConsultant.status === 'pending' && (
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
    </div>
  );
}

