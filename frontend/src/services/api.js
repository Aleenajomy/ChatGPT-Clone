import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const chatAPI = {
  startNewChat: () => api.get('/new-chat'),
  sendMessage: (sessionId, question) => api.post(`/chat/${sessionId}`, { question }),
  getSessions: () => api.get('/sessions'),
  getSession: (sessionId) => api.get(`/session/${sessionId}`),
  sendFeedback: (messageId, type) => api.post(`/messages/${messageId}/feedback`, { type })
};

export default api;