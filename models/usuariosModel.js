import mongoose, { Schema } from 'mongoose';

const usuariosCollection = 'usuarios';

const usuariosSchema = new Schema({
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true }
})

export const usuariosModel = mongoose.model(usuariosCollection, usuariosSchema);