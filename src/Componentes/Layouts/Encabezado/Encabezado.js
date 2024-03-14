import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../Diseño/Encabezado.css';
import '../../../Imagenes/icono2.png'
import Logo from '../../Paginas/Logo/Logo';


const Encabezado = () => {
  return (
    <header className="header">
    <Logo />
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active" preventDefault>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/quienessomos" activeClassName="active" preventDefault>
              Quiénes somos
            </NavLink>
          </li>
          <li>
            <NavLink to="/iot" activeClassName="active" preventDefault>
            Dashboard iot
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Encabezado;