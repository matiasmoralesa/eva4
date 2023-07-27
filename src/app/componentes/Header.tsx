'use client'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/formulario'}>Formulario</Link>
        <Link to={'/menu'}>Menu</Link>
        <Link to={'/registros'}>Registros</Link>
        <Link to={'/ubicacion'}>Ubicacion</Link>
        <Link to={'/redesSociales'}>Redes Sociales</Link>
    </nav>
  )
}