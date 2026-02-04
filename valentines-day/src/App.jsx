import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import StartScreen from './StartScreen'
import LetterScreen from './LetterScreen'
import LeaveScreen from './LeaveScreen'
import CelebrationScreen from './CelebrationScreen'


function App() {
  return (
      <div>
        <Routes>
          <Route path="" element={<StartScreen />} />
          <Route path="/letter" element={<LetterScreen />} />
          <Route path="/leave" element={<LeaveScreen />} />
          <Route path="/celebration" element={<CelebrationScreen />} />
        </Routes>
      </div>
  )
}

export default App
