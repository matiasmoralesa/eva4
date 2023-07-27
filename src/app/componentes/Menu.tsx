import React from 'react';

export const Menu = () => {
    return (
        <section id="menu" className="section" style={{ backgroundColor: 'transparent' }}>
          <div className="container">
            <h2 className="center">Nuestro Menú</h2>
            <div className="row">
              <div className="col s12 m4">
                <div className="card" style={{ height: '25%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image" style={{ flex: '1' }}>
                    <img src="/completo.png" alt="Imagen de completo" style={{ width: '25%', height: '25%', objectFit: 'cover' }} />
                    <span className="card-title">Completo</span>
                  </div>
                  <div className="card-content" style={{ flex: '1' }}>
                    <p>Delicioso completo con tomate, palta, mayo y mostaza.</p>
                  </div>
                  <div className="card-action">
                    <a href="#formulario">Pedir</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card" style={{ height: '25%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image" style={{ flex: '1' }}>
                    <img src="/papas fritas.jpg" alt="Imagen de papas fritas" style={{ width: '25%', height: '25%', objectFit: 'cover' }} />
                    <span className="card-title">Papas Fritas</span>
                  </div>
                  <div className="card-content" style={{ flex: '1' }}>
                    <p>Deliciosas papas fritas con salsa ketchup.</p>
                  </div>
                  <div className="card-action">
                    <a href="#formulario">Pedir</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card" style={{ height: '25%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image" style={{ flex: '1' }}>
                    <img src="/churrasco.jpg" alt="Imagen de churrasco" style={{ width: '25%', height: '25%', objectFit: 'cover' }} />
                    <span className="card-title">Churrasco</span>
                  </div>
                  <div className="card-content" style={{ flex: '1' }}>
                    <p>Delicioso churrasco con lechuga, tomate, mayo y mostaza.</p>
                  </div>
                  <div className="card-action">
                    <a href="#formulario">Pedir</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card" style={{ height: '25%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image" style={{ flex: '1' }}>
                    <img src="/pollo asado.jpg" alt="Imagen de pollo asado" style={{ width: '25%', height: '25%', objectFit: 'cover' }} />
                    <span className="card-title">Pollo Asado</span>
                  </div>
                  <div className="card-content" style={{ flex: '1' }}>
                    <p>Delicioso pollo asado con ensalada y papas fritas.</p>
                  </div>
                  <div className="card-action">
                    <a href="#formulario">Pedir</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card" style={{ height: '25%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image" style={{ flex: '1' }}>
                    <img src="/hamburgesa.jpg" alt="Imagen de hamburguesa" style={{ width: '25%', height: '25%', objectFit: 'cover' }} />
                    <span className="card-title">Hamburguesa</span>
                  </div>
                  <div className="card-content" style={{ flex: '1' }}>
                    <p>Deliciosa hamburguesa con lechuga, tomate, queso y tocino.</p>
                  </div>
                  <div className="card-action">
                    <a href="#formulario">Pedir</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
};



