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
            from: 'WEB',
            to: 'info@wotalent.com.ar',
            subject: 'Contacto via web',
            html: `
            <h2> Datos del cliente: </h2>
            <h5> <strong>Nombre y apellido:</strong> ${data.nombreApellido}</h5>
            <h5> <strong>Correo Electronico:</strong> ${data.email} </h5>
            <h5> <strong>Empresa:</strong> ${data.empresa} </h5>
            <h5> <strong>Telefono:</strong> ${data.telefono} </h5>
            <br></br>
            <h3> <strong>Su consulta:</strong> </h3>
            <h5> ${data.consulta} </h5>
            `
        })

        return "Enviado"
    }
}

export default BusquedaManager;