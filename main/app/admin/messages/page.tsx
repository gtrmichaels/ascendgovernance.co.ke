'use client';

import { useState } from 'react';

interface Message {
  id: number;
  from: string;
  to: string;
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  fullMessage?: string;
}

export default function AdminMessages() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [messages] = useState<Message[]>([
    {
      id: 1,
      from: 'john.doe@example.com',
      to: 'Dr. Jane Smith',
      subject: 'Consultation Inquiry',
      preview: 'I would like to schedule a consultation regarding...',
      timestamp: '2 hours ago',
      read: false,
      fullMessage: 'I would like to schedule a consultation regarding our board composition. When would be a convenient time?',
    },
    {
      id: 2,
      from: 'jane.smith@example.com',
      to: 'John Doe',
      subject: 'Follow-up on Previous Session',
      preview: 'Thank you for the consultation. Here are the next steps...',
      timestamp: '1 day ago',
      read: true,
      fullMessage: 'Thank you for the consultation. Here are the next steps we discussed. Please review and let me know if you have any questions.',
    },
    {
      id: 3,
      from: 'bob.johnson@example.com',
      to: 'Sarah Johnson',
      subject: 'Document Review Request',
      preview: 'Could you please review the attached documents...',
      timestamp: '2 days ago',
      read: false,
      fullMessage: 'Could you please review the attached documents and provide your feedback?',
    },
  ]);

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    // Mark as read
    if (!message.read) {
      // In a real app, this would update the message status
      console.log(`Mark message ${message.id} as read`);
    }
  };

  const toggleReadStatus = (messageId: number) => {
    // In a real app, this would toggle the read status
    console.log(`Toggle read status for message ${messageId}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Messages</h1>
          <p className="text-text-secondary mt-2">View and manage platform messages</p>
        </div>
      </div>

      {/* Messages Layout */}
      <div className="card p-0 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Messages List */}
          <div className="w-1/3 border-r border-border overflow-y-auto">
            <div className="p-4 border-b border-border">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="divide-y divide-border">
              {messages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => handleSelectMessage(message)}
                  className={`w-full text-left p-4 hover:bg-secondary-50 transition-colors ${
                    selectedMessage?.id === message.id ? 'bg-secondary-100' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary text-sm">{message.subject}</h3>
                      <p className="text-xs text-text-secondary mt-1">
                        {message.from} → {message.to}
                      </p>
                    </div>
                    {!message.read && (
                      <span className="w-2 h-2 rounded-full bg-primary ml-2"></span>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary line-clamp-2 mb-1">{message.preview}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-text-secondary">{message.timestamp}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReadStatus(message.id);
                      }}
                      className="text-xs text-primary hover:underline"
                    >
                      {message.read ? 'Mark unread' : 'Mark read'}
                    </button>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Message Preview Panel */}
          <div className="flex-1 flex flex-col">
            {selectedMessage ? (
              <>
                {/* Message Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-text-primary">{selectedMessage.subject}</h3>
                    <button
                      onClick={() => toggleReadStatus(selectedMessage.id)}
                      className="text-sm text-primary hover:underline"
                    >
                      {selectedMessage.read ? 'Mark unread' : 'Mark read'}
                    </button>
                  </div>
                  <div className="text-sm text-text-secondary">
                    <p>From: {selectedMessage.from}</p>
                    <p>To: {selectedMessage.to}</p>
                    <p className="mt-1">{selectedMessage.timestamp}</p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <p className="text-text-primary leading-relaxed">
                    {selectedMessage.fullMessage || selectedMessage.preview}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-text-secondary">Select a message to view</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

