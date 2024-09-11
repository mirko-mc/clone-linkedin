import express from "express";
import cors from "cors";
import moongoose from "mongoose";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import endpoints from "express-list-endpoints";
import ExperiencesRouter from "./routes/experiences.routes.js";

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
Server.use("/api/v1", ExperiencesRouter);
// * connessione al database
await moongoose
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
