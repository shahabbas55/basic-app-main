import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the API!', error);
        console.log('Error details:', error.response);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <h1>{message || 'coming soon'}<span className="dot">.</span></h1>
        </div>
      </header>
    </div>
  );
}

export default App;