import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { eliminarReserva, obtenerReserva} from '../firebase/Promesas';
import { Reserva } from '../../../Interfaces';

export const Eliminar = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [comida, setComida] = useState<string>('');
  const [personas, setPersonas] = useState<number>(0);
  const [fecha, setFecha] = useState<string>('');
  const [hora, setHora] = useState<string>('');
  const [recomendacion, setRecomendacion] = useState<string>('');
  const [isCheckeds, setIsChecked] = useState(true);
  const [idReserva, setId] = useState<string>('');

  const checkboxValue = isCheckeds;

  useEffect(() => {
    setIsChecked(checkboxValue);
  }, [checkboxValue]);

  const handleCheckboxChange = () => {
    setIsChecked(!isCheckeds);
  };

  const params = useParams();
  useEffect(() => {
    if (params.idReserva != undefined) {
      obtenerReserva(params.idReserva).then((r) => {
        if (r != undefined) {
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
      });
    }
  }, []);

    const eliminar = () => {
    // Aquí puedes agregar la lógica para eliminar la reserva de Firebase
        const r:Reserva= {
            nombre,correo,telefono,comida,personas,fecha,hora,recomendacion,isChekeds:isCheckeds
        }
        eliminarReserva(idReserva,r);
        alert('Reserva eliminada exitosamente.');
    };
return (
        <form>
            <label>Nombre:</label>
            <input
            type='text'
            placeholder='nombre'
            value={nombre}
            readOnly
            />
        
            <label>Correo:</label>
            <input
            type='email'
            placeholder='correo'
            value={correo}
            readOnly
            />
        
            <label>Telefono:</label>
            <input
            type='tel'
            placeholder='telefono'
            value={telefono}
            readOnly
            />
        
            <label>Comida Favorita:</label>
            <input
            type='text'
            placeholder='comida favorita'
            value={comida}
            readOnly
            />
        
            <label>Cantidad Personas:</label>
            <input
            type='number'
            placeholder='cantidad personas'
            value={personas}
            readOnly
            />
        
            <label>Fecha reserva:</label>
            <input
            type='date'
            placeholder='fecha reserva'
            value={fecha}
            readOnly
            />
        
            <label>Hora reserva</label>
            <input
            type='time'
            placeholder='hora reserva'
            value={hora}
            readOnly
            />
        
            <label>Recomendacion</label>
            <textarea
            placeholder='recomendacion de preferencia'
            value={recomendacion}
            readOnly
            ></textarea>
        
            <label> Terminos y Condiciones
            <input
                type='checkbox'
                checked={isCheckeds}
                onChange={handleCheckboxChange}
                readOnly
            />
            </label>
        
            {/* Botón deshabilitado en modo de solo lectura */}
            <button onClick={eliminar} type='button' ><Link to={"/registros"}>Eliminar</Link></button>
        </form>
        );

}