'use client'
import React from 'react';

export const Bienvenida = () => {
  return (
    <section id="bienvenida" className="section">
      <div className="container">
          <div>
            <h2>Bienvenidos al local de comida rápida donde la tia</h2>
            <p>Ofrecemos una amplia variedad de productos como completos, papas fritas, churrascos, pollo asado y hamburguesas. Todos nuestros productos son frescos y de alta calidad.</p>
          </div>
          <div style={{ width: '300px', height: '200px', border: '1px solid black' }}>
            <img src = '/local fisico.jpg' alt="Imagen del local" style={{ width: '300%', height: '300%', objectFit: 'cover' }} />
          </div>
        </div>
    </section>
  );
};


