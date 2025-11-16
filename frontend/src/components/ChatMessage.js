import React from 'react';
import { chatAPI } from '../services/api';
import TableResponse from './TableResponse';

const ChatMessage = ({ message, onFeedbackUpdate }) => {
  const handleFeedback = async (type) => {
    try {
      const response = await chatAPI.sendFeedback(message.id, type);
      onFeedbackUpdate(message.id, response.data);
    } catch (error) {
      console.error('Failed to send feedback:', error);
    }
  };



  if (message.type === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-3xl bg-blue-600 text-white rounded-lg px-4 py-2">
          <p>{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-6">
      <div className="max-w-4xl w-full">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-sm font-semibold text-white">AI</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3">
              <p className="text-gray-800 dark:text-gray-200 mb-2">{message.content}</p>
              <TableResponse tableData={message.tableData} />
            </div>
            
            {/* Feedback buttons */}
            <div className="flex items-center mt-2 space-x-2">
              <button
                onClick={() => handleFeedback('like')}
                className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors"
              >
                <span>👍</span>
                <span className="text-sm">{message.likes || 0}</span>
              </button>
              <button
                onClick={() => handleFeedback('dislike')}
                className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors"
              >
                <span>👎</span>
                <span className="text-sm">{message.dislikes || 0}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;