import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cors from 'cors';
import busquedasRouter from './routes/busquedasRouter.js';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.listen(8080, () => console.log('Listening on port 8080'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/busquedas', busquedasRouter);

mongoose.connect(process.env.MONGO_DB_URI)