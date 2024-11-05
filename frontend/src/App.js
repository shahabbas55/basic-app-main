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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDown = () => {
      const futureDate = new Date("06 dec 2024");
      const currentDate = new Date();
      const myDate = futureDate - currentDate;

      const days = Math.floor(myDate / 1000 / 60 / 60 / 24);
      const hours = Math.floor((myDate / 1000 / 60 / 60) % 24);
      const minutes = Math.floor((myDate / 1000 / 60) % 60);
      const seconds = Math.floor((myDate / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    countDown(); // Initial call to set the initial values
    const intervalId = setInterval(countDown, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
          <>
    <div className="container text-center">
      <header>
        <div className="header_area">
          <div className="row">
            <div className="col-xl-12 d-flex justify-content-center">
              {/* You can add header content here if needed */}
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="row" style={{ marginTop: '200px' }}>
          <div className="col-xl-12">
            <div className="tagline p-4 mt-4">
              <h1>Coming Soon</h1>
            </div>
           
          </div>

          <div className="col-xl-12">
            <div className="wrapper">
              <div className="countdown-container d-flex justify-content-center">
                <div>
                  <p id="days" className="big-text">{timeLeft.days}</p>
                  <span>Days</span>
                </div>
                <div>
                  <p id="hours" className="big-text">{timeLeft.hours}</p>
                  <span>Hours</span>
                </div>
                <div>
                  <p id="min" className="big-text">{timeLeft.minutes}</p>
                  <span>Min</span>
                </div>
                <div>
                  <p id="sec" className="big-text">{timeLeft.seconds}</p>
                  <span>Sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> 
          </>
  );
}



export default App;