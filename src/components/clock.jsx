import React, { useState, useEffect } from 'react';

import "../styles/clock.css";

const Clock = () => {
  const [timeChile, setTimeChile] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Santiago' }));
  const [timeBarcelona, setTimeBarcelona] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Madrid' }));
  const [timeSanFrancisco, setTimeSanFrancisco] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' }));

  useEffect(() => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      month: 'short',
      day: 'numeric',
      hour12: false,
    };

    const timer = setInterval(() => {
      const now = new Date();
      const chileTime = now.toLocaleTimeString('en-US', { timeZone: 'America/Santiago', ...options });
      const barcelonaTime = now.toLocaleTimeString('en-US', { timeZone: 'Europe/Madrid', ...options });
      const sanFranciscoTime = now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', ...options });

      setTimeChile(chileTime.replace(/^24(?=:)/, '00'));
      setTimeBarcelona(barcelonaTime.replace(/^24(?=:)/, '00'));
      setTimeSanFrancisco(sanFranciscoTime.replace(/^24(?=:)/, '00'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className='time-zone'>
        {timeChile} Stgo🇨🇱
      </div>
      <div className='time-zone'>
        {timeBarcelona} Bcn🇪🇸
      </div>
      <div className='time-zone'>
        {timeSanFrancisco} SnFr🇺🇸
      </div>
    </div>
  );
};

export default Clock;

