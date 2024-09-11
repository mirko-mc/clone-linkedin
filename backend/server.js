import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import endpoints from "express-list-endpoints";
import ExperiencesRouter from "./routes/experiences.routes.js";
import ProfileRouter from "./routes/profileRoutes.js";
import authenticationRouter from './routes/authenticationRoutes.js'
import passport from 'passport';
import googleStrategy from './config/passport.config.js';
// import authorization from './middleware/authorization.js';

// * configuro il server
/** dichiaro il dominio */
const Host = process.env.HOST;
/** dichiaro la porta */
const Port = process.env.PORT || 5000;
/** dichiaro il server */
const Server = express();
/** rafforzo la sicurezza degli headers */
Server.use(helmet());
/** info in console del CRUD */
Server.use(morgan("dev"));
// * configuro il cors personalizzato
/** dichiaro i domini autorizzati all'accesso */
const WhiteList = [Host];
/** funzione che controlla se il dominio è autorizzato */
const CorsOptions = {
  origin: (origin, callback) => {
    if (WhiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
/** utilizzo cors con filtro d'accesso */
// Server.use(cors(CorsOptions));
/** utilizzo cors senza filtro d'accesso */
Server.use(cors());
/** utilizzo il body parser */
Server.use(express.json());
// * rotte

passport.use('google', googleStrategy)//non è un middleware ma serve per dire a passport di usare la strategia

Server.use("/api/v1", ExperiencesRouter);
Server.use("/api/v1/profiles", ProfileRouter);
Server.use("/auth",authenticationRouter)//rotta per l'autenticazione
// * connessione al database
await mongoose
  .connect(process.env.MONGO_CONNECTION_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
/** avvio il server mettendolo in ascolto sulla porta dichiarata */
Server.listen(Port, () => {
  console.log(`Server avviato su ${Host}`);
  console.table(endpoints(Server));
});
