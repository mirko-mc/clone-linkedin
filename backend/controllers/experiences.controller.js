import experiencesSchema from "../models/experiences.schema.js";
import ExperiencesSchema from "../models/experiences.schema.js";
import crypto from "crypto";

// TODO GET /:userld/experiences => ritorna TUTTE le esperienze di un utente
export const GetAllExperiences = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - GetAllExperiences");
  try {
  } catch (err) {
    console.log(err);
    res.send({ message: "get all experiences error" });
  }
};
// TODO GET /me/experiences => ritorna le esperienze dell'utente loggato
export const GetLoggedUserExperiences = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - GetLoggedUserExperiences");
  try {
  } catch (err) {
    console.log(err);
    res.send({ message: "get profile experience error" });
  }
};
// TODO POST /experiences => crea una nuova esperienza per l'utente loggato
export const PostNewExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("*** experiences.controller.js - PostNewExperience ***");
  try {
    console.log(req);
    /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
    const Profile = await experiencesSchema.findById(req.params.profileId);
    /** controllo che il profilo esista */
    if (!Profile) throw new Error({ message: "profile not found" });
    /** controllo se i campi required sono soddisfatti altrimenti termino la funzione restituendo errore  */
    if (!req.body.role) throw new Error({ message: "role required" });
    if (!req.body.company) throw new Error({ message: "company required" });
    if (!req.body.startDate) throw new Error({ message: "startDate required" });
    if (!req.body.area) throw new Error({ message: "area required" });
    if (!req.body.profileId) throw new Error({ message: "profileId required" });
    /** genero un id casuale per l'esperienza */
    const experienceId = crypto.randomBytes(16).toString("hex");
    /** pusho l'oggetto specificando uno ad uno i campi per avere la certezza che nel database non arrivino dati indesiderati */
    Profile.experiences.push({
      experienceId,
      profileId: req.LoggedProfile.profileId,
      role: req.body.role,
      company: req.body.company,
      startDate: req.body.startDate,
      endDate: req.body.endDate ? req.body.endDate : "Ancora in corso",
      description: req.body.description,
      area: req.body.role,
      image: req.body.image,
    });
    /** salvo il profilo coi nuovi dati */
    await Profile.save();
    res.send({ message: "experience added" });
  } catch (err) {
    console.log(err);
    res.send({ message: "create experience error" });
  }
};
// TODO PUT /:expId => caricamento immagine per esperienza
export const PutUploadExperienceImage = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - PutUploadExperienceImage");
  try {
  } catch (err) {
    console.log(err);
    res.send({ message: "update image experience error" });
  }
};
// TODO EX : PUT /:expId => modifica le esperienze
export const PutUpdateExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - PutUpdateExperience");
  try {
  } catch (err) {
    console.log(err);
    res.send({ message: "update experience error" });
  }
};
// TODO EX : DELETE /:expId => elimina le esperienze
export const DeleteExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - DeleteExperience");
  try {
  } catch (err) {
    console.log(err);
    res.send({ message: "delete experience error" });
  }
};
// TODO EX : PUT, DELETE /:expId => modifica a elimina le esperienze
export const PutDeleteExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - PutDeleteExperience");
  try {
  } catch (err) {
    console.log(err);
    res.send({ message: "update/delete experience error" });
  }
};
