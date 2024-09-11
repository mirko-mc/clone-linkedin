import express from "express";
import * as ExperiencesController from "../controllers/experiences.controller.js";
const ExperiencesRouter = express.Router();

// TODO GET /:userld/experiences => ritorna TUTTE le esperienze di un utente
ExperiencesRouter.get(
  "/:userld/experiences",
  ExperiencesController.GetAllExperiences
);
// TODO GET /me/experiences => ritorna le esperienze dell'utente loggato
ExperiencesRouter.get(
  "/me/experiences",
  ExperiencesController.GetLoggedUserExperiences
);
// TODO POST /experiences => crea una nuova esperienza per l'utente loggato
ExperiencesRouter.post("/experiences", ExperiencesController.PostNewExperience);
// TODO PUT /:expId => caricamento immagine per esperienza
ExperiencesRouter.put(
  "/:expId",
  ExperiencesController.PutUploadExperienceImage
);
// TODO EX : PUT /:expId => modifica le esperienze
ExperiencesRouter.put("/:expId", ExperiencesController.PutUpdateExperience);
// TODO EX : DELETE /:expId => elimina le esperienze
ExperiencesRouter.delete("/:expId", ExperiencesController.DeleteExperience);
export default ExperiencesRouter;
