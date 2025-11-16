import React from 'react';

const LandingPage = ({ onStartChat }) => {
  const suggestions = [
    "What are the top programming languages?",
    "Explain the benefits of cloud computing",
    "What are the latest web development trends?",
    "How does machine learning work?"
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to ChatGPT Clone
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Start a conversation and get intelligent responses with structured data
        </p>
        
        <button
          onClick={onStartChat}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors mb-8"
        >
          Start New Chat
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="col-span-full text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Try asking about:
          </h3>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onStartChat(suggestion)}
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg 
                       hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                       text-left text-gray-700 dark:text-gray-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;