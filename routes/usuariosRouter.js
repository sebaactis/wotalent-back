import { Router } from 'express'
import { create, get, getOne } from '../controllers/usuariosControllers.js';
import auth from '../middlewares/auth.js';

const usuariosRouter = Router();

usuariosRouter.get('/', auth, get);
usuariosRouter.get('/:email', getOne);
usuariosRouter.post('/create', create);

export default usuariosRouter;