import { Router } from 'express';
import { create, getAll, getOne, remove } from '../controllers/busquedaController.js';

const busquedas = Router();

busquedas.get('/', getAll)
busquedas.get('/detalle/:codigo', getOne)
busquedas.post('/', create)
busquedas.delete('/', remove)

export default busquedas;
