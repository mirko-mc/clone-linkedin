import express from "express";
import * as ExperiencesController from "../controllers/experiences.controller.js";
const Router = express.Router();

// TODO GET /:userld/experiences => ritorna TUTTE le esperienze di un utente
Router.get("/:userld/experiences", ExperiencesController.GetAllExperiences);
// TODO GET /me/experiences => ritorna le esperienze dell'utente loggato
Router.get("/me/experiences", ExperiencesController.GetLoggedUserExperiences);
// TODO POST /experiences => crea una nuova esperienza per l'utente loggato
Router.post("/experiences", ExperiencesController.PostNewExperience);
// TODO PUT /:expId => caricamento immagine per esperienza
Router.put("/:expId", ExperiencesController.PutUploadExperienceImage);
// TODO EX : PUT /:expId => modifica le esperienze
Router.put("/:expId", ExperiencesController.PutUpdateExperience);
// TODO EX : DELETE /:expId => elimina le esperienze
Router.delete("/:expId", ExperiencesController.DeleteExperience);
export default Router;
