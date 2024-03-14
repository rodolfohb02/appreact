import React from 'react'
import '../../../Diseño/iot.css'
const IOT = () => {
  return (
    <form class="contact-form">
  <h2>IOT</h2>
  <div class="form-group">
    <label for="cerradura">Cerradura:</label>
    <input type="text" id="cerradura" name="Cerradura" required />
  </div>
  <div class="form-group">
    <label for="estado">Estado de la ventana:</label>
    <input type="text" id="estado" name="estado" required />
  </div>
  <div class="form-group">
    <label for="lluvia">Sensor de lluvia:</label>
    <input type="text" id="lluvia" name="lluvia" required />
  </div>
  <div class="form-group">
    <label for="pir">Sensor de Pir:</label>
    <input type="text" id="pir" name="pir" required />
  </div>
  <div class="form-group">
    <label for="leds">LEDS:</label>
    <input type="text" id="leds" name="leds" required />
  </div>
</form>

  )
}

export default IOT
