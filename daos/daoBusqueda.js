import { busquedasModel } from "../models/busquedaModel.js";

class daoBusqueda {

    async getAll() {
        const busquedas = busquedasModel.find();
        return busquedas;
    }

    async addBusqueda(busqueda) {
        const busquedaSchema = await busquedasModel.create(busqueda);

        return {
            nombre: busquedaSchema.nombre,
            descripcion: busquedaSchema.descripcion
        }
    }

    async getBusqueda(codigo) {
        const busqueda = await busquedasModel.findOne({ codigo });

        return {
            nombre: busqueda.nombre,
            descripcion: busqueda.descripcion
        }
    }

    async removeBusqueda(codigo) {
        const busqueda = await busquedasModel.deleteOne({ codigo })

        return {
            nombre: busqueda.nombre,
            descripcion: busqueda.descripcion
        }
    }
}

export default daoBusqueda;