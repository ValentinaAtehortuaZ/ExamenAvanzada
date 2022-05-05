//Importar Mongoose (Mongoose permite conectar a BD y crear modelos )
import mongoose from "mongoose";

//Constante para crear el Modelo De Datos

const Schema=mongoose.Schema

//Construyo mi modelo o esquema Habitacion

const Reserva=new Schema({

    fechaIngreso:{
        type:Date,
        required:true
    },

    fechaSalida:{
        type:Date,
        required:true
    },
    
    nombreCliente:{
        type:String,
        required:true
    },

    cedulaCliente:{
        type:String,
        required:true
    },

    costo:{
        type:Number,
        required:true
    }

})

export const modeloReserva=mongoose.model('reservas',Reserva)