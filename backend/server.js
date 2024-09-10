import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan";
import helmet from "helmet";


const port= process.env.PORT || 5000
const server = express()


server.use(express.json())
server.use(cors())
server.use(morgan("dev"));
server.use(helmet());
server.use('/uploads', express.static('./uploads'))

await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
.then(() => console.log("connessione al db ok"))
.catch((err) => console.log(err))

server.listen(port, ()=>{
    console.log(`server in ascolto su ${process.env.HOST}: ${port}`)
})


