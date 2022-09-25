import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventPage from './pages/EventPage/EventPage';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
