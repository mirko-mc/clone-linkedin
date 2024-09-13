import express from "express";
import * as ExperiencesController from "../controllers/experiences.controller.js";
const ExperiencesRouter = express.Router();

// TODO GET /:userld/experiences => ritorna TUTTE le esperienze di un utente
ExperiencesRouter.get(
  "/:userId/experiences",
  ExperiencesController.GetAllExperiences
);
// TODO GET /me/experiences => ritorna le esperienze dell'utente loggato
ExperiencesRouter.get(
  "/me/experiences",
  ExperiencesController.GetLoggedUserExperiences
);
// TODO POST /experiences => crea una nuova esperienza per l'utente loggato
ExperiencesRouter.post("/experiences", ExperiencesController.PostNewExperience);
// TODO PATCH /:userId/experiences/:expId => caricamento immagine per esperienza
ExperiencesRouter.patch(
  "/experiences/:expId",
  ExperiencesController.PatchUploadExperienceImage
);
// TODO EX : PUT /:userId/experiences/:expId => modifica le esperienze
ExperiencesRouter.put(
  "/experiences/:expId",
  ExperiencesController.PutUpdateExperience
);
// TODO EX : DELETE /:userId/experiences/:expId => elimina le esperienze
ExperiencesRouter.delete(
  "/experiences/:expId",
  ExperiencesController.DeleteExperience
);
export default ExperiencesRouter;
