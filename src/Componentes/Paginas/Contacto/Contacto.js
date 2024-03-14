import React, { useState } from 'react';
import '../../../Diseño/Pie.css'
const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente');
  };

  return (
    <form onSubmit={handleSubmit} class="formulario-contacto">
  <h2>Contacto:</h2>
  <div class="campo">
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
  </div>
  <div class="campo">
    <label for="correo">Correo electrónico:</label>
    <input
      type="email"
      id="correo"
      name="correo"
      value={correo}
      onChange={(e) => setCorreo(e.target.value)}
    />
  </div>
  <div class="campo">
    <label for="mensaje">Mensaje:</label>
    <textarea
      id="mensaje"
      name="mensaje"
      value={mensaje}
      onChange={(e) => setMensaje(e.target.value)}
    />
  </div>
  <button type="submit" class="boton-enviar">Enviar</button>
</form>

  );
};

export default Contacto;
