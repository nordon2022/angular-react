// src/widgets/MyReactWidget.js
import React, { useState, useEffect } from 'react';

const MyReactWidget = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="widget-card">
      <h1>This is a widget</h1>
      <h3>{greeting}</h3>
      <p>The current time is:</p>
      <h2>{time}</h2>
    </div>
  );
};

export default MyReactWidget;
