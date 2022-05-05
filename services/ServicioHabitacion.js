//Importo el modelo Habitacion
import {modeloHabitacion} from '../models/habitacionModelo.js'

export class ServicioHabitacion{
    
    constructor(){}

   async  buscarTodos(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarPorId(id){

        let habitacion=await modeloHabitacion.findById(id)
        return habitacion

    }

    async registrar(habitacion){

        let habiatacionNueva=new modeloHabitacion(habitacion)
        return await habiatacionNueva.save()
    }

    async editar(id,habitacion){

        return await modeloHabitacion.findByIdAndUpdate(id,habitacion)
    }

    async eliminar(id){

        return await modeloHabitacion.findByIdAndDelete(id)
    }



}