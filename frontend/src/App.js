import React from 'react';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>ChatGPT Clone</h1>
      <p>Welcome to the ChatGPT Clone application!</p>
      <div style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        marginTop: '20px',
        borderRadius: '8px'
      }}>
        <h2>Chat Interface</h2>
        <p>This is a simple test to verify the React app is working.</p>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Start New Chat
        </button>
      </div>
    </div>
  );
};

export default App;