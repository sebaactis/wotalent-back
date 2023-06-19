import { isValidPassword } from "../utils.js";
import UsuarioManager from "./UsuariosManager.js";

class SessionManager {

    async login(email, password) {

        if (!email && !password) {
            throw new Error('Email and password invalid format');
        }

        const manager = new UsuarioManager();
        const user = await manager.getOne(email)

        const isHashedPassword = await isValidPassword(user, password)

        if(!isHashedPassword) {
            return 'Password invalid';
        }

        return user;
    }

}

export default SessionManager;