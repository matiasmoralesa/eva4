'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Formulario } from '../componentes/Form'
import { Bienvenida } from '../componentes/Home'
import { Menu } from '../componentes/Menu'
import { Ubicacion } from '../componentes/Ubicacion'
import { RedesSociales } from '../componentes/RedesSociales'



export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Bienvenida/>}/>
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/ubicacion" element={<Ubicacion/>} />
        <Route path="/redesSociales" element={<RedesSociales/>} />
    </Routes>
  )
}