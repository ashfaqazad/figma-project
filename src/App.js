import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Dashboard from './Components/Dashboard';
import Popup from './Components/Popup';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Dashboard onButtonClick={handleButtonClick} />
      )}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}
