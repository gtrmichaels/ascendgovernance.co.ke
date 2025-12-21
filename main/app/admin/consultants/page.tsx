'use client';

import { useState } from 'react';
import { mockConsultants } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';

export default function ConsultantsPage() {
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Consultant Management</h1>
        <p className="text-text-secondary mt-1">Review and manage consultant applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockConsultants.map((consultant) => (
          <div key={consultant.id} className="card hover:shadow-floating transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-1">{consultant.name}</h3>
                <p className="text-sm text-text-secondary">{consultant.email}</p>
              </div>
              <StatusBadge status={consultant.status as any} />
            </div>
            <div className="space-y-2 mb-4">
              <div>
                <span className="text-sm text-text-secondary">Specialization:</span>
                <p className="text-text-primary font-medium">{consultant.specialization}</p>
              </div>
              <div>
                <span className="text-sm text-text-secondary">Experience:</span>
                <p className="text-text-primary font-medium">{consultant.experience}</p>
              </div>
              <div>
                <span className="text-sm text-text-secondary">Submitted:</span>
                <p className="text-text-primary font-medium">{consultant.submittedAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 pt-4 border-t border-border">
              <button
                onClick={() => {
                  setSelectedConsultant(consultant);
                  setIsModalOpen(true);
                }}
                className="btn-secondary flex-1 text-sm"
              >
                View Profile
              </button>
              {consultant.status === 'pending' && (
                <>
                  <button className="btn-primary flex-1 text-sm">
                    Approve
                  </button>
                  <button className="text-error hover:text-error-600 text-sm font-medium px-3">
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Consultant Profile"
        size="lg"
      >
        {selectedConsultant && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text-secondary">Name</label>
                <p className="text-text-primary">{selectedConsultant.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Email</label>
                <p className="text-text-primary">{selectedConsultant.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Specialization</label>
                <p className="text-text-primary">{selectedConsultant.specialization}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Experience</label>
                <p className="text-text-primary">{selectedConsultant.experience}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Status</label>
                <div className="mt-1">
                  <StatusBadge status={selectedConsultant.status as any} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-text-secondary">Submitted At</label>
                <p className="text-text-primary">{selectedConsultant.submittedAt}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h4 className="font-medium text-primary mb-2">Additional Information</h4>
              <p className="text-text-secondary text-sm">
                Full consultant profile details, qualifications, and documents would be displayed here.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

