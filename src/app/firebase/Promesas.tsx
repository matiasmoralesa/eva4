import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./conexion";
import { Reserva } from "../../../Interfaces";


export const registrarReserva = async (r:Reserva)=>{
    const docRef = await addDoc(collection(db, "reserva"),r);}    



export const obtenerReservas = async () => {
    var listado:Reserva[] = [];
    const querySnapshot = await getDocs(collection(db, 'reserva'));
    querySnapshot.forEach((doc) => {
    var r:Reserva = {
        id:doc.id,
        nombre: doc.data().nombre,
        correo: doc.data().correo,
        telefono: doc.data().telefono,
        comida: doc.data().comida,
        personas: doc.data().personas,
        fecha: doc.data().fecha,
        hora: doc.data().hora,
        recomendacion: doc.data().recomendacion,
        isChekeds : doc.data().isCheckeds
    }
    listado.push(r)    
    console.log(doc.id, '=>', doc.data());        
    });
    return listado;
    }    