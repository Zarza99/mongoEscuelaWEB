import { Schema, model } from "mongoose"

const profesorEsquema = new Schema(
    {
        rfc: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        nombres: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        paterno: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        
        materno: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        fechaNacimiento: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        direccion: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        celular: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        profesion: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        
        numeroEmpleado: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        opcion: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Profesores", profesorEsquema);
