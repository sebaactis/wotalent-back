import { Router } from 'express'

import { current, login, logout } from '../controllers/sessionController.js';
import authToken from '../middlewares/authToken.js';

const sessionRouter = Router();

sessionRouter.post('/login', login)
sessionRouter.post('/logout', authToken, logout)
sessionRouter.get('/current', authToken, current);


export default sessionRouter;