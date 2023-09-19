import { Router } from 'express';
import authToken from '../middlewares/authToken.js';
import { contacto, create, getAll, getOne, remove, update } from '../controllers/busquedaController.js';

const busquedas = Router();

busquedas.get('/', getAll)
busquedas.get('/detalle/:codigo', getOne)
busquedas.post('/', authToken, create)
busquedas.put('/', update)
busquedas.delete('/', authToken, remove)
busquedas.post('/contacto', contacto)           

export default busquedas;
