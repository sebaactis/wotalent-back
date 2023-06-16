import mongoose, { Schema } from 'mongoose';

const busquedasCollection = 'busquedas';

const busquedasSchema = new Schema({
    nombre: { type: Schema.Types.String, required: true },
    resumen: { type: Schema.Types.String, required: true },
    descripcion: { type: Schema.Types.String, required: true },
    codigo: { type: Schema.Types.String, required: true, unique: true }
})

export const busquedasModel = mongoose.model(busquedasCollection, busquedasSchema);

