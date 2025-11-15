import React, { useState } from 'react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            disabled={disabled}
            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 
                     text-white px-6 py-2 rounded-lg transition-colors
                     disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;