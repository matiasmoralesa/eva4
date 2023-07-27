'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Formulario } from '../componentes/Formulario'
import { Registros } from '../componentes/Registros'
import { Actualizar } from '../componentes/Actualizar'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<Componente1/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/registros" element={<Registros/>} />
        <Route path="/actualizar/:idPersona" element={<Actualizar/>} />
    </Routes>
  )
}