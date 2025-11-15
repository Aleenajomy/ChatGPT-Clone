import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chatAPI } from '../services/api';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionId) {
      loadSession(sessionId);
    }
  }, [sessionId]);

  const loadSession = async (id) => {
    try {
      const response = await chatAPI.getSession(id);
      setMessages(response.data.messages || []);
    } catch (error) {
      console.error('Failed to load session:', error);
      setMessages([]);
    }
  };

  const sendMessage = async (message) => {
    if (!sessionId) return;
    
    setLoading(true);
    try {
      const response = await chatAPI.sendMessage(sessionId, message);
      
      const userMessage = {
        id: Date.now() + '-user',
        type: 'user',
        content: message,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, userMessage, response.data]);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackUpdate = (messageId, feedbackData) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, likes: feedbackData.likes, dislikes: feedbackData.dislikes }
        : msg
    ));
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onFeedbackUpdate={handleFeedbackUpdate}
            />
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatInput onSendMessage={sendMessage} disabled={loading} />
    </>
  );
};

export default ChatWindow;