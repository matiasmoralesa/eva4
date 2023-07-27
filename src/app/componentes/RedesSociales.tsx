import React from 'react';

export const RedesSociales= () => {
  return (
    <section id="redes-sociales" className="section">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2>Redes Sociales</h2>
            <p>Encuéntranos en nuestras redes sociales:</p>
            <div className="row">
              <div className="col s4 center">
                <a href="https://www.facebook.com/claudiaveronica.alcavilpena.1/about" target="_blank" rel="noopener noreferrer">
                  <img src="/logo de facebook.png" width="50%" alt="Facebook" />
                </a>
              </div>
              <div className="col s4 center">
                <a href="https://www.instagram.com/chi.ruca/" target="_blank" rel="noopener noreferrer">
                  <img src="/logo de instragram.png" width="55%" alt="Instagram" />
                </a>
              </div>
              <div className="col s4 center">
                <a href="https://wa.me/56945451441" target="_blank" rel="noopener noreferrer">
                  <img src="/logo de whatsapp.png" width="55%" alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};