import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet'
import authenticationRouter from './routes/authenticationRoutes.js'
import route from './routes/profileRoutes.js';
import passport from 'passport';
import googleStrategy from './config/passport.config.js';
// import authorization from './middleware/authorization.js';

const port = process.env.PORT || 5000;

//creo il server
const server = express()

passport.use('google', googleStrategy)//non è un middleware ma serve per dire a passport di usare la strategia

//collegamento al db
await mongoose.connect(process.env.MONGO_CONNECTION_URI).then(()=>{
    console.log('connessione al db ok')
}).catch((err)=> {console.log(err)})

server.use(express.json())// è un middleware che ci dice tutti i body che invieremo saranno in json
server.use(cors()) // è un middleware che consente la connessione tra backend e frontend
server.use(morgan("dev"))// è un middleware che mi mostra tutti i log delle richieste
server.use(helmet ())//middleware che ci da la sicurezza per il backend
server.use('/users', route)//rotta per i profili
server.use("/auth",authenticationRouter)//rotta per l'autenticazione


server.listen(port, ()=>{
    console.log('Server is running')
})
