// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import VideoSection from './VideoSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <VideoSection />
    </div>
  );
}

export default App;

