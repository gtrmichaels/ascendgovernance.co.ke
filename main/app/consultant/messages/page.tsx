'use client';

import { useState } from 'react';

interface Message {
  id: number;
  clientName: string;
  preview: string;
  timestamp: string;
  unread: boolean;
}

interface Conversation {
  id: number;
  clientName: string;
  messages: {
    id: number;
    sender: 'client' | 'consultant';
    text: string;
    timestamp: string;
  }[];
}

export default function ConsultantMessages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      clientName: 'Acme Corporation',
      messages: [
        {
          id: 1,
          sender: 'client',
          text: 'Hello, I would like to schedule a consultation regarding our board composition.',
          timestamp: '2024-01-10 10:30 AM',
        },
        {
          id: 2,
          sender: 'consultant',
          text: 'Thank you for reaching out. I would be happy to help with your board composition review. When would be a convenient time for you?',
          timestamp: '2024-01-10 11:00 AM',
        },
        {
          id: 3,
          sender: 'client',
          text: 'How about next Monday at 10 AM?',
          timestamp: '2024-01-10 2:00 PM',
        },
      ],
    },
    {
      id: 2,
      clientName: 'Tech Solutions Ltd',
      messages: [
        {
          id: 1,
          sender: 'client',
          text: 'We need to discuss our compliance audit results.',
          timestamp: '2024-01-09 3:00 PM',
        },
      ],
    },
    {
      id: 3,
      clientName: 'Global Industries',
      messages: [
        {
          id: 1,
          sender: 'client',
          text: 'Can you provide more information about your strategic planning services?',
          timestamp: '2024-01-08 9:00 AM',
        },
      ],
    },
  ]);

  const [messageList] = useState<Message[]>([
    {
      id: 1,
      clientName: 'Acme Corporation',
      preview: 'Hello, I would like to schedule a consultation...',
      timestamp: '2 hours ago',
      unread: false,
    },
    {
      id: 2,
      clientName: 'Tech Solutions Ltd',
      preview: 'We need to discuss our compliance audit results.',
      timestamp: '1 day ago',
      unread: true,
    },
    {
      id: 3,
      clientName: 'Global Industries',
      preview: 'Can you provide more information about your strategic planning services?',
      timestamp: '2 days ago',
      unread: true,
    },
  ]);

  const currentConversation = conversations.find((c) => c.id === selectedConversation);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Messages</h1>
        <p className="text-text-secondary mt-2">Communicate with your clients</p>
      </div>

      {/* Messages Layout */}
      <div className="card p-0 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-border overflow-y-auto">
            <div className="p-4 border-b border-border">
              <input
                type="text"
                placeholder="Search conversations..."
                className="input-field w-full"
              />
            </div>
            <div className="divide-y divide-border">
              {messageList.map((message) => (
                <button
                  key={message.id}
                  onClick={() => setSelectedConversation(message.id)}
                  className={`w-full text-left p-4 hover:bg-secondary-50 transition-colors ${
                    selectedConversation === message.id ? 'bg-secondary-100' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-text-primary">{message.clientName}</h3>
                    {message.unread && (
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-2 mb-1">{message.preview}</p>
                  <p className="text-xs text-text-secondary">{message.timestamp}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Message Preview Panel */}
          <div className="flex-1 flex flex-col">
            {currentConversation ? (
              <>
                {/* Conversation Header */}
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-text-primary">{currentConversation.clientName}</h3>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'consultant' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === 'consultant'
                            ? 'bg-primary text-white'
                            : 'bg-secondary-100 text-text-primary'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'consultant' ? 'text-primary-100' : 'text-text-secondary'
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Input (Disabled) */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="input-field flex-1"
                      disabled
                    />
                    <button className="btn-primary" disabled>
                      Send
                    </button>
                  </div>
                  <p className="text-xs text-text-secondary mt-2">Messaging functionality will be enabled soon</p>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-text-secondary">Select a conversation to view messages</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


