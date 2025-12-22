'use client';

import { useState } from 'react';

interface Message {
  id: number;
  sender: 'consultant' | 'user';
  text: string;
  timestamp: string;
}

interface Conversation {
  id: number;
  consultantName: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}

export default function UserMessages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);

  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      consultantName: 'Dr. Jane Smith',
      lastMessage: 'Thank you for the consultation. Here are the next steps...',
      timestamp: '2 hours ago',
      unread: false,
      messages: [
        {
          id: 1,
          sender: 'consultant',
          text: 'Hello, I wanted to follow up on our consultation.',
          timestamp: '2024-01-10 10:30 AM',
        },
        {
          id: 2,
          sender: 'user',
          text: 'Thank you for the consultation. It was very helpful.',
          timestamp: '2024-01-10 11:00 AM',
        },
        {
          id: 3,
          sender: 'consultant',
          text: 'Thank you for the consultation. Here are the next steps...',
          timestamp: '2024-01-10 2:00 PM',
        },
      ],
    },
    {
      id: 2,
      consultantName: 'John Doe',
      lastMessage: 'I have reviewed your documents and...',
      timestamp: '1 day ago',
      unread: true,
      messages: [
        {
          id: 1,
          sender: 'consultant',
          text: 'I have reviewed your documents and have some recommendations.',
          timestamp: '2024-01-09 3:00 PM',
        },
      ],
    },
  ]);

  const currentConversation = conversations.find((c) => c.id === selectedConversation);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Messages</h1>
          <p className="text-text-secondary mt-1">Communicate with your consultants</p>
        </div>

        {/* Messages Layout */}
        <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
          <div className="flex h-[600px]">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-border overflow-y-auto">
              <div className="p-4 border-b border-border">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="divide-y divide-border">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`w-full text-left p-4 hover:bg-secondary-50 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-secondary-100' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-text-primary text-sm">{conversation.consultantName}</h3>
                      {conversation.unread && (
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2 mb-1">{conversation.lastMessage}</p>
                    <p className="text-xs text-text-secondary">{conversation.timestamp}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Message View Panel */}
            <div className="flex-1 flex flex-col">
              {currentConversation ? (
                <>
                  {/* Conversation Header */}
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-text-primary">{currentConversation.consultantName}</h3>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {currentConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-primary text-white'
                              : 'bg-secondary-100 text-text-primary'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === 'user' ? 'text-primary-100' : 'text-text-secondary'
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Send Message Input */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
    </div>
  );
}

