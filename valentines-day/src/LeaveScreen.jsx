import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './LeaveScreen.css'
import useSound from 'use-sound';
import alarmSound from './sounds/alarm-sound.mp3'


function LeaveScreen() {
  const [playSound, { stop }] = useSound(alarmSound);

  useEffect(() => {
    playSound();
    // cleanup runs when user hits browser back
    return () => {
      stop(); 
    };
  }, [playSound, stop]);

  return (
    <>
      <div className="leave-screen">
        <div className="leave-text">THEN GET OUT!!!</div> 
      </div> 
    </>
  )
}

export default LeaveScreen