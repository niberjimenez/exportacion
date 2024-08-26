import GetgestionCliente from '../models/GestionClientes.js'

export async function getGestionCliente(req,res) {
    const  gestioncliente = await GetgestionCliente.find
    res.json(gestioncliente)
}


export async function postGestionCliente(req,res) {
    const body = req.body 
    let msg = 'cliente inserted succesful '
    try {
        const gestioncliente = new GetgestionCliente(body)
        await gestioncliente.save()

    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

export async function putGestionClientes(req, res){
    const {name,lastname,cedula} = req.body
    let msg= 'cliente updated sucesful'
    try{
        await gestioncliente.findOneAndUpdate({name:name}),({lastname:lastname,model}),({cedula:cedula,model})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

export async function deleteGestionCliente(req, res){
    const _id = req.params.id
    try {
        await gestioncliente.findByIdAndDelete({_id:_id})
        res.json('cliente delete sucessfully')
    }catch(error){
        res.status(500).json(error, {msg: 'there was problem deliting the cliente'})
    }
}