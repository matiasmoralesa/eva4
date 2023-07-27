import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./conexion";
import { Reserva } from "../../../Interfaces";


export const registrarReserva = async (r:Reserva)=>{
    const docRef = await addDoc(collection(db, "reserva"),r);}    