import Router from 'express'
const routesGestionCliente = Router()

import { getGestionCliente, postGestionCliente,putGestionClientes,deleteGestionCliente } from '../controllers/GestionClientecontroller.js';


routesGestionCliente.get('/',getGestionCliente)
routesGestionCliente.post('/',postGestionCliente)
routesGestionCliente.put('/',putGestionClientes)
routesGestionCliente.delete('/:id',deleteGestionCliente)


export default routesGestionCliente