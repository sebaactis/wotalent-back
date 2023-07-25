import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cors from 'cors';
import busquedasRouter from './routes/busquedasRouter.js';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import usuariosRouter from './routes/usuariosRouter.js';
import sessionRouter from './routes/sessionRouter.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.listen(8080, () => console.log('Listening on port 8080'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_DB_URI,
        ttl: 10000
    }),
    secret: 'COWOS3CR3TC0D3',
    resave: false,
    saveUninitializad: false
}))


app.use('/api/busquedas', busquedasRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/session', sessionRouter);



mongoose.connect(process.env.MONGO_DB_URI)