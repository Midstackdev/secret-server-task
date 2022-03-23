import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const CONNECTION_URL = process.env.CONNECTION_URL

export const connectToDB = () => {
    
    mongoose.connect(CONNECTION_URL)
    .then(()=>console.log('Mongo connected'))
    .catch(e=>console.log(e));
}