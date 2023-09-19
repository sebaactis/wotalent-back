import { busquedasModel } from "../models/busquedaModel.js";

class daoBusqueda {

    async getAll() {
        const busquedas = busquedasModel.find();
        return busquedas;
    }

    async addBusqueda(busqueda) {
        const busquedaSchema = await busquedasModel.create(busqueda);

        if(!busquedaSchema) {
            return "Ocurrio un error"
        }

        return {
            nombre: busquedaSchema.nombre,
            descripcion: busquedaSchema.descripcion
        }
    }

    async getBusqueda(codigo) {
        const busqueda = await busquedasModel.findOne({ codigo });
        
        if (!busqueda) {
            return "No se encuentra ese codigo"
        }

        return {
            nombre: busqueda.nombre,
            descripcion: busqueda.descripcion
        }
    }

    async update(codigo, data) {
        const busqueda = await busquedasModel.findOne({ codigo });
        
        if (!busqueda) {
            return "No se encuentra la busqueda para el codigo seleccionado"
        }

        const busquedaEditada = await busquedasModel.updateOne({codigo: codigo}, data)
        return busquedaEditada

    }

    async removeBusqueda(codigo) {
        const busqueda = await busquedasModel.deleteOne({ codigo })

        if(!busqueda) {
            return "Codigo inexistente"
        }

        return {
            nombre: busqueda.nombre,
            descripcion: busqueda.descripcion
        }
    }
}

export default daoBusqueda;