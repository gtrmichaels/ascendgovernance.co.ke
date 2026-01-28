'use client';

import { useState } from 'react';

interface Document {
  id: number;
  name: string;
  type: 'cv' | 'certification' | 'report';
  uploadDate: string;
  status: 'uploaded' | 'pending';
}

export default function ConsultantDocuments() {
  const [documents] = useState<Document[]>([
    {
      id: 1,
      name: 'John_Doe_CV_2024.pdf',
      type: 'cv',
      uploadDate: '2024-01-01',
      status: 'uploaded',
    },
    {
      id: 2,
      name: 'CCGP_Certification.pdf',
      type: 'certification',
      uploadDate: '2023-12-15',
      status: 'uploaded',
    },
    {
      id: 3,
      name: 'MBA_Degree.pdf',
      type: 'certification',
      uploadDate: '2023-12-10',
      status: 'uploaded',
    },
    {
      id: 4,
      name: 'Q4_2023_Report.pdf',
      type: 'report',
      uploadDate: '2023-12-20',
      status: 'uploaded',
    },
  ]);

  const getDocumentTypeLabel = (type: string) => {
    const labels = {
      cv: 'CV / Resume',
      certification: 'Certification',
      report: 'Report',
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getDocumentIcon = (type: string) => {
    const icons = {
      cv: '📄',
      certification: '🏆',
      report: '📊',
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Documents</h1>
          <p className="text-text-secondary mt-2">Manage your CV, certifications, and reports</p>
        </div>
        <button className="btn-primary">
          + Upload Document
        </button>
      </div>

      {/* CV Section */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">CV / Resume</h2>
        <div className="space-y-4">
          {documents
            .filter((doc) => doc.type === 'cv')
            .map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-2xl">{getDocumentIcon(doc.type)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">{doc.name}</h3>
                    <p className="text-sm text-text-secondary">Last updated: {doc.uploadDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    doc.status === 'uploaded' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'
                  }`}>
                    {doc.status}
                  </span>
                  <button className="text-sm text-primary hover:underline">View</button>
                  <button className="text-sm text-primary hover:underline">Replace</button>
                </div>
              </div>
            ))}
          {documents.filter((doc) => doc.type === 'cv').length === 0 && (
            <div className="text-center py-8 border border-dashed border-border rounded-lg">
              <p className="text-text-secondary mb-2">No CV uploaded</p>
              <button className="text-sm text-primary hover:underline">Upload CV</button>
            </div>
          )}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Certifications</h2>
        <div className="space-y-4">
          {documents
            .filter((doc) => doc.type === 'certification')
            .map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                    <span className="text-2xl">{getDocumentIcon(doc.type)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">{doc.name}</h3>
                    <p className="text-sm text-text-secondary">Uploaded: {doc.uploadDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    doc.status === 'uploaded' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'
                  }`}>
                    {doc.status}
                  </span>
                  <button className="text-sm text-primary hover:underline">View</button>
                  <button className="text-sm text-primary hover:underline">Replace</button>
                </div>
              </div>
            ))}
          <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-colors">
            + Add Certification
          </button>
        </div>
      </div>

      {/* Reports Section */}
      <div className="card">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Reports</h2>
        <div className="space-y-4">
          {documents
            .filter((doc) => doc.type === 'report')
            .map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary-200 flex items-center justify-center">
                    <span className="text-2xl">{getDocumentIcon(doc.type)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">{doc.name}</h3>
                    <p className="text-sm text-text-secondary">Uploaded: {doc.uploadDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    doc.status === 'uploaded' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'
                  }`}>
                    {doc.status}
                  </span>
                  <button className="text-sm text-primary hover:underline">View</button>
                  <button className="text-sm text-primary hover:underline">Download</button>
                </div>
              </div>
            ))}
          <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-colors">
            + Upload Report
          </button>
        </div>
      </div>
    </div>
  );
}


