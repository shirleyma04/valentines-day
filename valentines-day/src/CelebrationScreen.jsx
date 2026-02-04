import React, { useEffect, useRef } from 'react';
import './CelebrationScreen.css';
import bearHug from './assets/bear-hug.gif';
import heartFirework from './assets/heart-firework.gif';
import useSound from 'use-sound';
import cheeringSound from './sounds/cheering-sound.mp3';

function CelebrationScreen() {
  const [playCheeringSound, { stop }] = useSound(cheeringSound);

  useEffect(() => {
    playCheeringSound();
    return () => {
      stop();
    };
  }, [playCheeringSound, stop]);

  return (
    <div 
      className="celebration-screen"
    >
      <div className="celebration-text">
        Hooray!! Great choice.
        <br />
        I'll see you February 14th ;)
      </div>

      <img src={bearHug} alt="Bear Hug" className="bear-hug" />
    </div>
  );
}

export default CelebrationScreen;
