import { usuariosModel } from "../models/usuariosModel.js";

class daoUsuarios {

    async get() {
        const usuarios = await usuariosModel.find();
        return usuarios;
    }

    async getOne(email) {
        const usuariosSchema = await usuariosModel.findOne({ email });

        return {
            email: usuariosSchema.email,
            password: usuariosSchema.password
        }
    }

    async create(usuario) {
        const user = await usuariosModel.create(usuario);

        return {
            email: user.email,
            password: user.password
        }
    }
}


export default daoUsuarios;