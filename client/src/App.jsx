import { useState } from 'react'
import Home from "./pages/Home"
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PrivateRoom from './pages/PrivateRoom.jsx';

function App() {

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private-room" element={<PrivateRoom />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
