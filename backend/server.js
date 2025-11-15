const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { mockResponses, sessions } = require('./mockData');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Start new chat session
app.get('/api/new-chat', (req, res) => {
  const sessionId = uuidv4();
  sessions.set(sessionId, {
    id: sessionId,
    title: 'New Chat',
    messages: [],
    createdAt: new Date().toISOString()
  });
  
  res.json({ sessionId });
});

// Ask question in session
app.post('/api/chat/:id', (req, res) => {
  const sessionId = req.params.id;
  const { question } = req.body;
  
  const session = sessions.get(sessionId);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  // Get random mock response
  const mockResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
  
  const userMessage = {
    id: uuidv4(),
    type: 'user',
    content: question,
    timestamp: new Date().toISOString()
  };
  
  const botMessage = {
    id: uuidv4(),
    type: 'bot',
    content: mockResponse.answer,
    tableData: mockResponse.tableData,
    timestamp: new Date().toISOString(),
    likes: 0,
    dislikes: 0
  };
  
  session.messages.push(userMessage, botMessage);
  
  // Update session title with first question
  if (session.messages.length === 2) {
    session.title = question.length > 50 ? question.substring(0, 50) + '...' : question;
  }
  
  res.json(botMessage);
});

// Get all sessions
app.get('/api/sessions', (req, res) => {
  const sessionList = Array.from(sessions.values()).map(session => ({
    id: session.id,
    title: session.title,
    createdAt: session.createdAt,
    messageCount: session.messages.length
  }));
  
  res.json(sessionList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
});

// Get session history
app.get('/api/session/:id', (req, res) => {
  const sessionId = req.params.id;
  const session = sessions.get(sessionId);
  
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  res.json(session);
});

// Update message feedback
app.post('/api/messages/:messageId/feedback', (req, res) => {
  const { messageId } = req.params;
  const { type } = req.body; // 'like' or 'dislike'
  
  // Find message in any session
  for (const session of sessions.values()) {
    const message = session.messages.find(msg => msg.id === messageId);
    if (message && message.type === 'bot') {
      if (type === 'like') {
        message.likes = (message.likes || 0) + 1;
      } else if (type === 'dislike') {
        message.dislikes = (message.dislikes || 0) + 1;
      }
      return res.json({ success: true, likes: message.likes, dislikes: message.dislikes });
    }
  }
  
  res.status(404).json({ error: 'Message not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});