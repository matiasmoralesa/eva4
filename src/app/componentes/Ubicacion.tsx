import React from 'react';

export const Ubicacion = () => {
  return (
    <section id="ubicacion" >
      <div className="container">
        <div className="row">
          <div className="col s12" color='#ffff00'>
            <h2 color='#ffff00'>Ubicación</h2>
            <p color='#ffff00'>Encuéntranos en el siguiente mapa:</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="mapa">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.857489903675!2d-70.3305580847353!3d-27.374460985294845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968a51b75dcebe5f%3A0xdacaf7bfe18d462a!2sAtacama%20411%2C%20Copiap%C3%B3%2C%20Atacama!5e0!3m2!1sen!2scl!4v1651252351922!5m2!1sen!2scl" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};