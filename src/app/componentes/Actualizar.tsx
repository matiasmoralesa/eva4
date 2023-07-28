import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { actualizarReserva, obtenerReserva } from '../firebase/Promesas';
import { Reserva } from '../../../Interfaces';

export const Actualizar = () => {
    const [nombre, setNombre] = useState<string>('');
    const [correo, setCorreo] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [comida, setComida] = useState<string>('');
    const [personas, setPersonas] = useState<number>(0);
    const [fecha, setFecha] = useState<string>('');
    const [hora, setHora] = useState<string>('');
    const [recomendacion, setRecomendacion] = useState<string>('');
    const [isCheckeds, setIsChecked] = useState(true);
    const [idReserva,setId] = useState<string>('');
    const [errorPersonas,setErrorPersonas] = useState('');

    const checkboxValue = isCheckeds; // 

    // useEffect para actualizar el estado del checkbox cuando se obtenga el valor de Firebase
    useEffect(() => {
      setIsChecked(checkboxValue);
    }, [checkboxValue]);

    const handleCheckboxChange = () => {
        setIsChecked(!isCheckeds);
      };

    const params = useParams()
    useEffect(()=>{
        if(params.idReserva!= undefined){
            obtenerReserva(params.idReserva).then((r) =>{
                if(r!=undefined){
                    setNombre(r.nombre);
                    setCorreo(r.correo);
                    setTelefono(r.telefono);
                    setComida(r.comida);
                    setPersonas(r.personas);
                    setFecha(r.fecha);
                    setHora(r.hora);
                    setRecomendacion(r.recomendacion);
                    setIsChecked(r.isChekeds);
                    setId(r.idReserva!);
                }
            })
        }
        
    },[])

    const actualizar = () =>{
        if(personas>0){
            console.log("Nombre:",nombre);
            alert("Bienvenido"+" "+nombre)
            
        }else{
            setErrorPersonas("La cantidad debe ser positiva")
        }
        
        const r:Reserva= {
            nombre,correo,telefono,comida,personas,fecha,hora,recomendacion,isChekeds:true
        }
        actualizarReserva(idReserva,r)
    }
    return(
        <form>
        <label>Nombre:</label>
        <input type='text' placeholder='nombre' 
            onChange={(e)=>setNombre(e.target.value)}
            value={nombre}
        />

        <label>Correo:</label>
        <input type='email' placeholder='correo' 
            onChange={(e)=>setCorreo(e.target.value)} 
            value={correo}
        />

        <label>Telefono:</label>
        <input type='tel' placeholder='telefono' 
            onChange={(e)=>setTelefono(e.target.value)} 
            value={telefono}    
        />

        <label>Comida Faborita:</label>
        <input type='text' placeholder='comida favorita' 
            onChange={(e)=>setComida(e.target.value)}
            value={comida} 
        />

        <label>Cantidad Personas:</label>
        <input type='number' placeholder='cantidad personas' 
            onChange={(e)=>setPersonas(parseInt(e.target.value))}
            value={personas}
        />
        <span>{errorPersonas}</span>

        <label>Fecha reserva:</label>
        <input type='date' placeholder='fecha reserva'
            onChange={(e)=>setFecha(e.target.value)} 
            value={fecha}
         />

        <label>Hora reserva</label>
        <input type='time' placeholder='hora reserva' 
            onChange={(e)=>setHora(e.target.value)} 
            value={hora}
        />

        <label>Recomendacion</label>
        <textarea placeholder='rocomendacion de preferencia'
            onChange={(e)=>setRecomendacion(e.target.value)}
            value={recomendacion}    
        ></textarea>

        <label> Terminos y Condiciones
        <input
          type='checkbox'
          checked={isCheckeds}
          onChange={handleCheckboxChange}
        />
        </label>
        
        <button onClick={actualizar} type='button'>Actualizar</button>
    </form>
    )

}