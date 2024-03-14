import React from 'react'
import Contacto from '../../Paginas/Contacto/Contacto'
import '../../../Diseño/Pie.css';

const Pie = () => {
  return (
    <footer className="footer">
      <Contacto />
      <p className="copyright">&copy; 2024 CrunchyFruits.</p>
    </footer>
  );
}

export default Pie
