'use client';

import { useState } from 'react';
import Modal from '../components/Modal';

type ContentType = 'service' | 'program' | 'blog';

interface ContentItem {
  id: number;
  type: ContentType;
  title: string;
  description: string;
  status: 'published' | 'draft';
  updatedAt: string;
}

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState<ContentType>('service');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [content] = useState<ContentItem[]>([
    {
      id: 1,
      type: 'service',
      title: 'Board Composition Review',
      description: 'Comprehensive review of your board structure and composition.',
      status: 'published',
      updatedAt: '2024-01-15',
    },
    {
      id: 2,
      type: 'service',
      title: 'Compliance Audit',
      description: 'Thorough audit of your compliance processes and procedures.',
      status: 'published',
      updatedAt: '2024-01-10',
    },
    {
      id: 3,
      type: 'program',
      title: 'Governance Excellence Program',
      description: 'A comprehensive program for achieving governance excellence.',
      status: 'published',
      updatedAt: '2024-01-12',
    },
    {
      id: 4,
      type: 'blog',
      title: 'Best Practices in Corporate Governance',
      description: 'Exploring the latest trends and best practices.',
      status: 'draft',
      updatedAt: '2024-01-18',
    },
  ]);

  const filteredContent = content.filter((item) => item.type === activeTab);

  const handleCreate = () => {
    setIsCreating(true);
    setEditingItem(null);
    setShowModal(true);
  };

  const handleEdit = (item: ContentItem) => {
    setIsCreating(false);
    setEditingItem(item);
    setShowModal(true);
  };

  const handleDelete = (itemId: number) => {
    if (confirm('Are you sure you want to delete this item?')) {
      // In a real app, this would delete the item
      console.log(`Delete item ${itemId}`);
    }
  };

  const handleSave = () => {
    // In a real app, this would save the item
    if (isCreating) {
      console.log('Create new item');
    } else {
      console.log(`Update item ${editingItem?.id}`);
    }
    setShowModal(false);
    setEditingItem(null);
    setIsCreating(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Content Management</h1>
          <p className="text-text-secondary mt-2">Manage services, programs, and blog posts</p>
        </div>
        <button onClick={handleCreate} className="btn-primary">
          + Create New
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8">
          {(['service', 'program', 'blog'] as ContentType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}s
            </button>
          ))}
        </nav>
      </div>

      {/* Content List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-1">{item.title}</h3>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === 'published'
                      ? 'bg-success-100 text-success-700'
                      : 'bg-warning-100 text-warning-700'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-4 line-clamp-2">{item.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <p className="text-xs text-text-secondary">Updated: {item.updatedAt}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-sm text-primary hover:underline"
                >
                  Edit
                </button>
                <span className="text-border">|</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-sm text-error-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingItem(null);
          setIsCreating(false);
        }}
        title={isCreating ? `Create New ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}` : 'Edit Content'}
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Title</label>
            <input
              type="text"
              defaultValue={editingItem?.title || ''}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Description</label>
            <textarea
              rows={4}
              defaultValue={editingItem?.description || ''}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Status</label>
            <select
              defaultValue={editingItem?.status || 'draft'}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4 border-t border-border">
            <button
              onClick={() => {
                setShowModal(false);
                setEditingItem(null);
                setIsCreating(false);
              }}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button onClick={handleSave} className="btn-primary">
              {isCreating ? 'Create' : 'Save Changes'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}


