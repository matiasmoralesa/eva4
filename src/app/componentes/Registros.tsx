import React, { useEffect, useState } from 'react'
import { obtenerReservas } from '../firebase/Promesas'
import { Link } from 'react-router-dom'
import { Reserva } from '../../../Interfaces'


export const Registros = () => {
    const[reservas,setReserva] = useState<Reserva[]>([])

    const renderizarDatos = () =>{
        var elemntos = reservas.map((r)=>{
            return <tr>
                <td>{r.nombre}</td>
                <td>{r.correo}</td>
                <td>{r.telefono}</td>
                <td>{r.comida}</td>
                <td>{r.personas}</td>
                <td>{r.fecha}</td>
                <td>{r.hora}</td>
                <td>{r.recomendacion}</td>
                <td>{r.isChekeds}</td>
                <td><Link to={"/actualizar/"+r.id}>Actualizar</Link></td>
                <td><Link to={"/eliminar/"+r.id}>Eliminar</Link></td>
            </tr>
        })
        return elemntos
    }

    useEffect(()=>{
       obtenerReservas().then((listado)=>{
        console.log("cargando listado")
        console.log(listado)
        setReserva(listado)
       })
       
    },[])


  return (
        <table>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Comida</th>
                <th>Personas</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Recomendacion</th>
                <th>Condiciones</th>
            </tr>
            {
                renderizarDatos()
            }
        </table>
  )
}