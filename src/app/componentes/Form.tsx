'use client'

import React, { useState } from 'react'
import { Reserva } from '../../../Interfaces';
import { registrarReserva } from '../firebase/Promesas';
import { Link } from 'react-router-dom';

export const Formulario = () => {
    const [nombre, setNombre] = useState<string>('');
    const [correo, setCorreo] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [comida, setComida] = useState<string>('');
    const [personas, setPersonas] = useState<number |''>('');
    const [fecha, setFecha] = useState<string>('');
    const [hora, setHora] = useState<string>('');
    const [recomendacion, setRecomendacion] = useState<string>('')
    const [isCheckeds, setIsChecked] = useState(false);
    const [errorPersonas,setErrorPersonas] = useState('');

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setIsChecked(event.target.checked);
    };

    const registrar = ()=>{

        // Validar que todos los campos estén rellenados
      if (
        nombre.trim() === '' ||
        correo.trim() === '' ||
        telefono.trim() === '' ||
        comida.trim() === '' ||
        personas === '' ||
        fecha === '' ||
        hora === '' ||
        recomendacion.trim() === ''
        ) {
        alert('Por favor, completa todos los campos.');
      return;
      }
      // Validar la cantidad de personas
    if (typeof personas === 'number') {
      if (personas <= 0) {
        setErrorPersonas('La cantidad de personas debe ser mayor a 0.');
        return;
      }
      setErrorPersonas(''); // Si la cantidad de personas es válida, limpiamos el mensaje de error
    } else {
      setErrorPersonas('La cantidad de personas debe ser un número válido.');
      return;
    }  

    alert('Formulario registrado exitosamente.');

    const r:Reserva = {
        nombre,correo,telefono,comida,personas,fecha,hora,recomendacion,isChekeds:isCheckeds
    }
    registrarReserva(r)
    }
  return (
    <form>
        <label>Nombre:</label>
        <input type='text' placeholder='nombre' onChange={(e)=>setNombre(e.target.value)}/>

        <label>Correo:</label>
        <input type='email' placeholder='correo' onChange={(e)=>setCorreo(e.target.value)} />

        <label>Telefono:</label>
        <input type='tel' placeholder='telefono' onChange={(e)=>setTelefono(e.target.value)} />

        <label>Comida Faborita:</label>
        <input type='text' placeholder='comida favorita' onChange={(e)=>setComida(e.target.value)} />

        <label>Cantidad Personas:</label>
        <input type='number' placeholder='cantidad personas' onChange={(e)=>setPersonas(parseInt(e.target.value))}/>
        <span>{errorPersonas}</span>

        <label>Fecha reserva:</label>
        <input type='date' placeholder='fecha reserva' onChange={(e)=>setFecha(e.target.value)} />

        <label>Hora reserva</label>
        <input type='time' placeholder='hora reserva' onChange={(e)=>setHora(e.target.value)} />

        <label>Recomendacion</label>
        <textarea placeholder='rocomendacion de preferencia' onChange={(e)=>setRecomendacion(e.target.value)} ></textarea>

        <label> Terminos y Condiciones
        <input
          type="checkbox"
          checked={isCheckeds}
          onChange={handleCheckboxChange}
        />
        </label>
        
        <button onClick={registrar} type='button'><Link to={"/home"}>Registrar</Link></button>
    </form>
  )
}