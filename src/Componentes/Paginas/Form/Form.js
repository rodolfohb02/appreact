import React from 'react';
import '../../../Diseño/Form.css';

const Form = () => {
  return (
    <form className="contact-form">
      <h2>IOT</h2>

      <label htmlFor="name">
        Cerradura:
        <input type="text" id="name" name="name" required />
      </label>

      <label htmlFor="email">
        Estado de la ventana:
        <input type="email" id="email" name="email" required />
      </label>

      <label htmlFor="message">
        Sensor de lluvia:
        <textarea id="message" name="message" rows="5" required></textarea>
      </label>

    </form>
  );
};

export default Form;
