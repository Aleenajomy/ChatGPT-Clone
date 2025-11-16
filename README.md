# ChatGPT Clone - Full Stack Application

A simplified ChatGPT-style application built with React frontend and Node.js backend, featuring responsive design, dark/light themes, and session management.

## Features

### Frontend (React + TailwindCSS)
- 🎨 **Responsive Design** - Works on mobile, tablet, and desktop
- 🌓 **Dark/Light Theme** - Toggle between themes with persistent storage
- 💬 **Chat Interface** - Clean, modern chat UI similar to ChatGPT
- 📱 **Collapsible Sidebar** - Session management with mobile-friendly design
- 📊 **Table View** - Structured data display in tabular format
- 👍 **Feedback System** - Like/dislike functionality for responses
- 🔄 **Session Management** - Create, view, and switch between chat sessions

### Backend (Node.js + Express)
- 🚀 **RESTful APIs** - Clean API endpoints for all functionality
- 📝 **Mock Data** - Serves structured dummy data without database
- 🆔 **Session Management** - UUID-based session tracking
- 📊 **Structured Responses** - Returns both text and tabular data
- 💾 **In-Memory Storage** - Sessions stored in memory for simplicity

## Tech Stack

- **Frontend**: React 18, JavaScript, TailwindCSS, React Router, Axios
- **Backend**: Node.js, Express.js, UUID, CORS
- **Styling**: TailwindCSS with dark mode support
- **State Management**: React Context API

## Project Structure

```
sample/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Sidebar.js
│   │   │   ├── LandingPage.js
│   │   │   ├── ChatMessage.js
│   │   │   └── ChatInput.js
│   │   ├── contexts/
│   │   │   └── ThemeContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── backend/
    ├── server.js
    ├── mockData.js
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Chat Management
- `POST /api/chat/new` - Start a new chat session
- `POST /api/chat/:sessionId/message` - Send a message in a session
- `GET /api/sessions` - Get all chat sessions
- `GET /api/sessions/:sessionId` - Get specific session history

### Feedback
- `POST /api/messages/:messageId/feedback` - Send like/dislike feedback

## Usage

1. **Start New Chat**: Click "New Chat" or use the landing page
2. **Ask Questions**: Type your question and press Enter or click Send
3. **View Responses**: See AI responses with structured table data
4. **Give Feedback**: Use 👍/👎 buttons on AI responses
5. **Switch Sessions**: Use the sidebar to navigate between chat sessions
6. **Toggle Theme**: Use the theme toggle in the header
7. **Mobile Support**: Use hamburger menu on mobile devices

## Features Implemented

✅ **Landing Page** - Welcome screen with suggested questions  
✅ **Responsive Design** - Mobile, tablet, and desktop support  
✅ **Collapsible Sidebar** - Session management panel  
✅ **Chat Interface** - Real-time messaging with structured responses  
✅ **Table View** - Structured data display in tables  
✅ **Feedback System** - Like/dislike functionality  
✅ **Dark/Light Theme** - Complete theme switching  
✅ **Session Management** - Create, view, and switch sessions  
✅ **URL-based Sessions** - Session ID in URL for direct access  
✅ **Mock Backend APIs** - All required endpoints implemented  

## Development

### Adding New Mock Data
Edit `backend/mockData.js` to add new response templates with different table structures.

### Customizing Themes
Modify `frontend/tailwind.config.js` and update the theme context for custom styling.

### API Integration
The frontend uses Axios for API calls. All API functions are centralized in `frontend/src/services/api.js`.

## Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy the build/ folder to your hosting service
```

### Backend
```bash
cd backend
# Deploy to your Node.js hosting service (Heroku, Railway, etc.)
```

## License

This project is open source and available under the MIT License.