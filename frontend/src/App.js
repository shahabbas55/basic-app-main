import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get('https://fftechnologies-eff0cjfuhndfczgr.canadacentral-01.azurewebsites.net/api/message')
  //     .then(response => {
  //       setMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the API!', error);
  //       console.log('Error details:', error.response);
  //     });
  // }, []);

  const targetDate = new Date("2024-12-31T00:00:00"); // Set your target date here
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
          <>
          <div style={styles.container}>
                <h1>Coming Soon</h1>
                <div style={styles.timer}>
                  {timeLeft.days !== undefined ? (
                    <>
                      <div style={styles.timeBlock}>
                        <span>{timeLeft.days}</span>
                        <span>Days</span>
                      </div>
                      <div style={styles.timeBlock}>
                        <span>{timeLeft.hours}</span>
                        <span>Hours</span>
                      </div>
                      <div style={styles.timeBlock}>
                        <span>{timeLeft.minutes}</span>
                        <span>Minutes</span>
                      </div>
                      <div style={styles.timeBlock}>
                        <span>{timeLeft.seconds}</span>
                        <span>Seconds</span>
                      </div>
                    </>
                  ) : (
                    <h2>We're Live!</h2>
                  )}
                </div>
              </div>
          </>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  timer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  timeBlock: {
    margin: '0 10px',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
};

export default App;