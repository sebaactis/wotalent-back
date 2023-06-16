import BusquedaManager from "../managers/busquedaManager.js";

const manager = new BusquedaManager();

export const getAll = async (req, res) => {

    const busquedas = await manager.getAll();

    res.status(200).json({ status: "success", payload: busquedas });
}

export const getOne = async (req, res) => {

    const codigo = req.params.codigo;

    const busquedas = await manager.getOne(codigo);

    res.status(200).json({ status: "success", payload: busquedas });
}

export const create = async (req, res) => {

    const busqueda = req.body;

    const newBusqueda = await manager.addBusqueda(busqueda);

    res.status(201).send({ status: "success", payload: newBusqueda });

}

export const remove = async (req, res) => {

    const codigo = req.body.codigo;

    const busqueda = await manager.remove(codigo)

    res.status(200).json({status: "success", payload: busqueda})
}