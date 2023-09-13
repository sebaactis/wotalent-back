import { Router } from 'express'
import { create, get, getOne } from '../controllers/usuariosControllers.js';

const usuariosRouter = Router();

usuariosRouter.get('/', get);
usuariosRouter.get('/:email', getOne);
usuariosRouter.post('/create', create);

export default usuariosRouter;