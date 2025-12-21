'use client';

import { useState } from 'react';
import { mockMessages } from '../data/mockData';

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState(mockMessages[0]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Messages</h1>
        <p className="text-text-secondary mt-1">Manage incoming messages and inquiries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="lg:col-span-1 card p-0 overflow-hidden">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-primary">Inbox</h2>
          </div>
          <div className="divide-y divide-border max-h-[600px] overflow-y-auto">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message)}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedMessage?.id === message.id
                    ? 'bg-primary/5 border-l-4 border-primary'
                    : 'hover:bg-surface'
                } ${!message.read ? 'bg-accent/5' : ''}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-text-primary">{message.from}</p>
                  {!message.read && (
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                  )}
                </div>
                <p className="text-sm font-medium text-primary mb-1 line-clamp-1">{message.subject}</p>
                <p className="text-xs text-text-secondary line-clamp-2">{message.message}</p>
                <p className="text-xs text-text-secondary mt-2">{message.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message Preview */}
        <div className="lg:col-span-2 card">
          {selectedMessage ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-1">{selectedMessage.subject}</h2>
                  <p className="text-sm text-text-secondary">{selectedMessage.from} &lt;{selectedMessage.email}&gt;</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="btn-secondary text-sm">
                    {selectedMessage.read ? 'Mark Unread' : 'Mark Read'}
                  </button>
                  <button className="btn-primary text-sm">
                    Reply
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-2">Date: {selectedMessage.date}</p>
                <div className="prose max-w-none">
                  <p className="text-text-primary whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-text-secondary">
              Select a message to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

