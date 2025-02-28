import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DosColumnas from './components/DosColumnas';
import TresColumnas from './components/TresColumnas';
import CuatroColumnas from './components/CuatroColumnas';
import Mapa from './components/Mapa';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DosColumnas />
      <TresColumnas />
      <CuatroColumnas />
      <Mapa />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
