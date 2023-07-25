import daoBusqueda from "../daos/daoBusqueda.js";
import { generateTransport } from "../utils.js";


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

    async contacto(data) {


        const transport = generateTransport();

        const result = await transport.sendMail({
            from: 'Test',
            to: 'sebaactis@gmail.com',
            subject: 'Prueba',
            html: `
            <h3> ${data.nombre} </h3>
            <h3> ${data.apellido} </h3>
            <p> ${data.empresa} </p>
            <p> ${data.telefono} </p>
            <p> ${data.email} </p>
            <p> ${data.consulta} </p>
            `
        })

        return "Enviado"
    }
}

export default BusquedaManager;