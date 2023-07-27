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
        idReserva:doc.id,
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

export const obtenerReserva = async(idReserva:string) =>{
    const docRef = doc(db,'reserva',idReserva);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        var r:Reserva = {
            idReserva:docSnap.id,
            nombre:docSnap.data().nombre,
            correo:docSnap.data().correo,
            telefono:docSnap.data().telefono,
            comida:docSnap.data().comida,
            personas:docSnap.data().personas,
            fecha:docSnap.data().fecha,
            hora:docSnap.data().hora,
            recomendacion:docSnap.data().recomendacion,
            isChekeds:docSnap.data().isCheckeds

        }
        return r
    } else {
        console.log("no hay resultados")
            return undefined
    }
}    

export const actualizarReserva = async(idReserva:string,r:Reserva) => {
    const docRef = doc(db, 'reserva', idReserva);

    await updateDoc(docRef, {...r});
}

export const eliminarReserva = async(idReserva:string,r:Reserva) =>{
    await deleteDoc(doc(db,'reserva',idReserva))

}