import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://basicapp-backend001.azurewebsites.net/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div class="wrapper">
          <h1>coming soon<span class="dot">.</span></h1>
        </div>
      </header>
    </div>
  );
}

export default App;