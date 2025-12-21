'use client';

import { useState } from 'react';
import { mockUsers } from '../data/mockData';
import Table from '../components/Table';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    {
      key: 'status',
      label: 'Status',
      render: (user: any) => <StatusBadge status={user.status as any} />,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (user: any) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedUser(user);
              setIsModalOpen(true);
            }}
            className="text-accent hover:text-accent-600 text-sm font-medium"
          >
            View
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle suspend
            }}
            className="text-warning hover:text-warning-600 text-sm font-medium"
          >
            Suspend
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle delete
            }}
            className="text-error hover:text-error-600 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Users Management</h1>
          <p className="text-text-secondary mt-1">Manage all registered users</p>
        </div>
        <button className="btn-primary">
          Add User
        </button>
      </div>

      <div className="card">
        <Table columns={columns} data={mockUsers} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User Details"
      >
        {selectedUser && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-secondary">Name</label>
              <p className="text-text-primary">{selectedUser.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-text-secondary">Email</label>
              <p className="text-text-primary">{selectedUser.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-text-secondary">Role</label>
              <p className="text-text-primary">{selectedUser.role}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-text-secondary">Status</label>
              <div className="mt-1">
                <StatusBadge status={selectedUser.status as any} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-text-secondary">Created At</label>
              <p className="text-text-primary">{selectedUser.createdAt}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

