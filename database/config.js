import { connect } from 'mongoose'
const dbconnection = async() => {
    try{
        await connect(process.env.MONGO_CNN)
        console.log('connected mongo db')

    }catch(error){
      console.log(error)
    }
}

export default  dbconnection