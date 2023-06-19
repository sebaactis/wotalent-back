import { Router } from 'express';
import { create, getAll, getOne, remove } from '../controllers/busquedaController.js';
import auth from '../middlewares/auth.js';

const busquedas = Router();

busquedas.get('/', getAll)
busquedas.get('/detalle/:codigo', getOne)
busquedas.post('/', auth, create)
busquedas.delete('/', auth, remove)

export default busquedas;
