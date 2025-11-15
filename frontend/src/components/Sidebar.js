import React, { useState, useEffect } from 'react';
import { chatAPI } from '../services/api';

const Sidebar = ({ isOpen, onToggle, currentSessionId, onSessionSelect, onNewChat }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const response = await chatAPI.getSessions();
      setSessions(response.data);
    } catch (error) {
      console.error('Failed to load sessions:', error);
    }
  };

  const handleNewChat = () => {
    onNewChat();
    loadSessions();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed md:relative top-0 left-0 h-full w-64 bg-gray-900 dark:bg-gray-800 text-white
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <button
              onClick={handleNewChat}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              + New Chat
            </button>
          </div>

          {/* Sessions List */}
          <div className="flex-1 overflow-y-auto p-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Chats</h3>
            {sessions.map((session) => (
              <div
                key={session.id}
                onClick={() => onSessionSelect(session.id)}
                className={`
                  p-3 mb-2 rounded-lg cursor-pointer transition-colors
                  ${currentSessionId === session.id 
                    ? 'bg-blue-600' 
                    : 'hover:bg-gray-700 dark:hover:bg-gray-600'
                  }
                `}
              >
                <div className="text-sm font-medium truncate">{session.title}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {session.messageCount} messages
                </div>
              </div>
            ))}
          </div>

          {/* User Info */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">U</span>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium">User</div>
                <div className="text-xs text-gray-400">Free Plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;