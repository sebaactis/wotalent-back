import daoBusqueda from "../daos/daoBusqueda.js";

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
}

export default BusquedaManager;