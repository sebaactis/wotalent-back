import UsuarioManager from "../managers/UsuariosManager.js"

const manager = new UsuarioManager

export const get = async (req, res) => {
    const usuarios = await manager.get()

    res.status(200).json({ message: 'success', payload: usuarios })
}

export const getOne = async (req, res) => {
    const email = req.params.email

    const usuario = await manager.getOne(email)

    res.status(200).json({ message: 'success', payload: usuario })
}

export const create = async (req, res) => {

    const user = await manager.create(req.body)

    res.status(201).json({ message: 'success', payload: user })
}

