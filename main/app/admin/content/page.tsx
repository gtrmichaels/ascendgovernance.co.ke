'use client';

import { useState } from 'react';
import { mockContent } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<'services' | 'programs' | 'blog'>('services');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const tabs = [
    { id: 'services' as const, label: 'Services', count: mockContent.services.length },
    { id: 'programs' as const, label: 'Programs', count: mockContent.programs.length },
    { id: 'blog' as const, label: 'Blog Posts', count: mockContent.blogPosts.length },
  ];

  const currentContent = mockContent[activeTab];

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Content Management</h1>
          <p className="text-text-secondary mt-1">Manage services, programs, and blog content</p>
        </div>
        <button onClick={handleCreate} className="btn-primary">
          Create New
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Content List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-surface">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-border">
              {currentContent.map((item: any) => (
                <tr key={item.id} className="hover:bg-surface transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={item.status === 'published' ? 'active' : 'pending'}>
                      {item.status}
                    </StatusBadge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{item.updatedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-accent hover:text-accent-600 font-medium"
                      >
                        Edit
                      </button>
                      <button className="text-error hover:text-error-600 font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? `Edit ${activeTab.slice(0, -1)}` : `Create New ${activeTab.slice(0, -1)}`}
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Title</label>
            <input
              type="text"
              className="input-field w-full"
              defaultValue={editingItem?.title || ''}
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Content</label>
            <textarea
              className="input-field w-full"
              rows={10}
              placeholder="Enter content..."
              defaultValue={editingItem?.content || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Status</label>
            <select className="input-field w-full" defaultValue={editingItem?.status || 'draft'}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-border">
            <button onClick={() => setIsModalOpen(false)} className="btn-secondary">
              Cancel
            </button>
            <button className="btn-primary">
              {editingItem ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

