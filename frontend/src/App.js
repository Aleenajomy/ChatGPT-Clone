import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { chatAPI } from './services/api';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import ChatWindow from './components/ChatWindow';

const ChatInterface = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const startNewChat = async (initialMessage = null) => {
    try {
      const response = await chatAPI.startNewChat();
      const newSessionId = response.data.sessionId;
      navigate(`/chat/${newSessionId}`);
    } catch (error) {
      console.error('Failed to start new chat:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentSessionId={sessionId}
        onSessionSelect={(id) => {
          navigate(`/chat/${id}`);
          setSidebarOpen(false);
        }}
        onNewChat={() => {
          startNewChat();
          setSidebarOpen(false);
        }}
      />
      
      <div className="flex-1 flex flex-col">
        <Header onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {!sessionId ? (
          <LandingPage onStartChat={startNewChat} />
        ) : (
          <ChatWindow />
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<ChatInterface />} />
            <Route path="/chat/:sessionId" element={<ChatInterface />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;