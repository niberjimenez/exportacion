import express,{json} from  'express';
import'dotenv/config.js'
import dbconnection from '../database/config.js';
import routesGestionCliente from '../routes/GestionClienteroute.js';

class Server {
    constructor (){
        this.app = express()
        this.listen()
        this.dbconnection()
        this.route()
    }

    async dbconnection(){
        await dbconnection()

    }
    route(){

        this.app.use(json())
        this.app.use('/api/GestionCliente',routesGestionCliente)
        


    }

    listen(){
        this.app.listen(process.env.PORT,() => {
            console.log(`server is running on port:${process.env.PORT}`)
        })
    }
}
export default  Server 
