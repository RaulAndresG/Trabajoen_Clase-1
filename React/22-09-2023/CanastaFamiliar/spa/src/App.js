import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CanastaFamiliar from './components/CanastaFamiliar';
import Empleados from './components/Empleados';
import Sedes from './components/Sedes';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CanastaFamiliar />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/sedes" element={<Sedes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
