//Importamos el servicio reserva


import { ServicioReserva } from '../services/ServicioReserva.js'

export class ControladorReserva {


    constructor() { }

    async insertar(request, response) {

        let reserva = new ServicioReserva()

        //Recibir los datos de pa peticion

        let datosReserva = request.body//Recibo datos


      //  let fechain=datosReserva.fechaingreso
        //calcular cuanto se demora
        //consultar modelo de habitacion 
        //calcular costo

        try {
            await reserva.registrar(datosReserva)
            //Envio la respuesta
            response.status(200).json({
                mensaje: "Exito en el ingreso de la reserva",
                datosIngresados: datosReserva,
                estado: true
            })
        } catch (error) {

            response.status(400).json({
                mensaje: "Fallamos en el ingreso de la reserva",
                datosIngresados: [],
                estado: false

            })
        }
    }


    async buscarPorId(request, response) {

        let reserva = new ServicioReserva()
        let id = request.params.id//Id que llega por la URL

        try {
            response.status(200).json({
                mensaje: "Exito buscando reserva por ID ",
                datos: await reserva.buscarPorId(id),
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallamos buscando reserva por ID ",
                datos: [],
                estado: false
            })

        }
    }

    async editar(request, response) {

        let reserva = new ServicioReserva()
        let id = request.params.id //id que llega por la URL
        let datosReserva = request.body //RECIBE DEL BODY

        try {
            await reserva.editar(id, datosReserva)
            response.status(200).json({
                mensaje: "Exito editando la reserva por ID ",
                datos: "Datos del id: " + id,
                estado: true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "Fallamos editando la reserva por ID ",
                datos: [],
                estado: false
            })

        }



    }

    async eliminar(request, response) {
        let reserva = new ServicioReserva()
        let id = request.params.id //id que llega por la URL

        try {
            await reserva.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando la reserva por ID ",
                datos: "Datos del id: " + id,
                estado: true
            })
        } catch {
            response.status(400).json({
                mensaje: "Fallamos eliminando la reserva por ID ",
                datos: "Datos del id: " + id,
                estado: false

            })


        }
    }



}