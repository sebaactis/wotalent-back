import daoBusqueda from "../daos/daoBusqueda.js";
import nodemailer from "nodemailer"

class BusquedaManager {


    constructor() {
        this.dao = new daoBusqueda();
    }

    async getAll() {
        const busquedas = await this.dao.getAll();
        return busquedas
    }

    async addBusqueda(busqueda) {
        const newBusqueda = await this.dao.addBusqueda(busqueda);
        return newBusqueda;
    }

    async getOne(codigo) {
        const busqueda = await this.dao.getBusqueda(codigo);
        return busqueda
    }

    async remove(codigo) {
        const busqueda = await this.dao.removeBusqueda(codigo);
        return busqueda
    }

    async contacto(email) {

        const transport = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: 'sebaactis@gmail.com',
                pass: process.env.PASS_KEY
            }
        })

        const result = await transport.sendMail({
            from: 'Test',
            to: email,
            subject: 'Prueba',
            html: `<h1 style={color: "red"}> Esto es una prueba </h1>`
        })

        return "Enviado"
    }
}

export default BusquedaManager;