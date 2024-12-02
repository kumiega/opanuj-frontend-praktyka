import { useState, useEffect } from 'react';

export const EarthEmojiGif = () => {
  const earthEmojis = ['🌍', '🌏', '🌎', '🌍'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % earthEmojis.length);
    }, 350);

    return () => clearInterval(intervalId);
  }, [earthEmojis.length]);

  return <span>{earthEmojis[currentIndex]}</span>;
};
