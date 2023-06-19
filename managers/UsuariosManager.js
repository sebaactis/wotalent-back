import daoUsuarios from "../daos/daoUsuarios.js";
import { createHash } from "../utils.js";

class UsuarioManager {

    constructor() {
        this.dao = new daoUsuarios();
    }

    async create(usuario) {

        const payload = {
            ...usuario,
            password: await createHash(usuario.password)
        }

        const newUsuario = await this.dao.create(payload);
        return newUsuario;
    }

    async get() {
        const usuarios = await this.dao.get();
        return usuarios
    }

    async getOne(email) {
        const user = await this.dao.getOne(email);
        return user;
    }
}

export default UsuarioManager;