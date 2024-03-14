import React from 'react';
import Encabezado from './Componentes/Layouts/Encabezado/Encabezado';
import Pie from './Componentes/Layouts/Pie/Pie'; 
import QuienesSomos from './Componentes/Paginas/QuienesSomos/QuienesSomos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Componentes/Paginas/Home/Home';
import IOT from './Componentes/Paginas/IOT/IOT';

const App = () => {
  return (
    <Router>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/iot" element={<IOT />} />
      </Routes>
      <Pie/>
    </Router>
  );
};

export default App;