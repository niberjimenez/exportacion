import { Schema, model } from 'mongoose'

const GestionClienteSchema = Schema({
    name:{
        type: String,
        unique: true,
        required: [true,'the field name is required'],
    },
    lastname:{
        type: String,
        required: [true,'the field lastname is required'],

    },
    cedula:{
        type: Number,
        required: [true,'the field cedula  is required'],
    }
})


export default model ('gestioncliente',GestionClienteSchema,'GestionCliente') 