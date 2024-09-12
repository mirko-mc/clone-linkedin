import ProfileSchema from "../models/Profile.schema.js";

// TODO GET /:userld/experiences => ritorna TUTTE le esperienze di un utente
export const GetAllExperiences = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - GetAllExperiences");
  try {
    /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
    const Profile = await ProfileSchema.findById(req.params.userId);
    /** controllo che il profilo esista */
    if (!Profile) throw new Error({ message: "profile not found" });
    /** invio all'utente le esperienze del profilo */
    res.send(Profile.experiences);
  } catch (err) {
    console.log(err);
    res.send({ message: "get all experiences ERROR" });
  }
};
// TODO GET /me/experiences => ritorna le esperienze dell'utente loggato
export const GetLoggedUserExperiences = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - GetLoggedUserExperiences");
  try {
    /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
    const Profile = await ProfileSchema.findById(req.loggedUser.userId);
    /** controllo che il profilo esista */
    if (!Profile) throw new Error({ message: "profile not found" });
    /** invio all'utente le esperienze del profilo */
    res.send(Profile.experiences);
  } catch (err) {
    console.log(err);
    res.send({ message: "get profile experience ERROR" });
  }
};
// TODO POST /experiences => crea una nuova esperienza per l'utente loggato
export const PostNewExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("*** experiences.controller.js - PostNewExperience ***");
  try {
    /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
    // * const Profile = await ExperiencesSchema.findById(req.loggedUser.userId);
    const Profile = await ProfileSchema.findById("66e1daf1158b9ea673101bc3");
    /** controllo che il profilo esista */
    if (!Profile) throw new Error({ message: "profile not found" });
    /** controllo se i campi required sono soddisfatti altrimenti termino la funzione restituendo errore  */
    if (!req.body.role) throw new Error({ message: "role required" });
    if (!req.body.company) throw new Error({ message: "company required" });
    if (!req.body.startDate) throw new Error({ message: "startDate required" });
    if (!req.body.area) throw new Error({ message: "area required" });
    if (!req.body.userId) throw new Error({ message: "profileId required" });
    /** pusho l'oggetto specificando uno ad uno i campi per avere la certezza che nel database non arrivino dati indesiderati */
    // * userId: req.loggedUser.userId,
    Profile.experiences.push({
      userId: "66e1daf1158b9ea673101bc3",
      role: req.body.role,
      company: req.body.company,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
      area: req.body.area,
    });
    /** salvo il profilo coi nuovi dati */
    await Profile.save();
    res.send({ message: "experience added" });
  } catch (err) {
    console.log(err);
    res.send({ message: "create experience ERROR" });
  }
};
// TODO PATCH /:userId/experiences/:expId => caricamento immagine per esperienza
export const PatchUploadExperienceImage = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - PutUploadExperienceImage");
  try {
    /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
    const Profile = await ProfileSchema.findById(req.params.userId)
    /** recupero l'esperienza da patchare */
    const Experience = Profile.experiences.id(req.params.expId);
    /** aggiorno l'immagine */
    Experience.image = req.file.path;
    // Experience.image = req.body.image;
    /** salvo il profilo con l'immagine aggiornata */
    Profile.save();
    res.send({ message: "image updated" });
  } catch (err) {
    console.log(err);
    res.send({ message: "update image experience ERROR" });
  }
};
// TODO EX : PUT /:userId/experiences/:expId => modifica le esperienze
export const PutUpdateExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - PutUpdateExperience");
  try {
    /** recupero il profilo dal database tramite l'id nella barra degli indirizzi */
    // const Profile = await ProfileSchema.findById(req.loggedUser.userId);
    const Profile = await ProfileSchema.findById("66e1daf1158b9ea673101bc3");
    /** recupero l'esperienza dal database */
    const Experience = Profile.experiences.id(req.params.expId);
    /** controllo che l'esperienza esista */
    if (!Experience) throw new Error({ message: "experience not found" });
    /** pusho l'oggetto specificando uno ad uno i campi per avere la certezza che nel database non arrivino dati indesiderati */
    if (req.body.role) Experience.role = req.body.role;
    if (req.body.company) Experience.company = req.body.company;
    if (req.body.startDate) Experience.startDate = req.body.startDate;
    if (req.body.endDate) Experience.endDate = req.body.endDate;
    if (req.body.description) Experience.description = req.body.description;
    if (req.body.area) Experience.area = req.body.area;
    await Profile.save();
    res.send({ message: "experiences edited" });
  } catch (err) {
    console.log(err);
    res.send({ message: "update experience ERROR" });
  }
};
// TODO EX : DELETE /:userId/experiences/:expId => elimina le esperienze
export const DeleteExperience = async (req, res) => {
  // !!! console log da eliminare
  console.log("experiences.controller.js - DeleteExperience");
  try {
    // const Profile = await ProfileSchema.findById(req.loggedUser.userId);
    const Profile = await ProfileSchema.findById("66e1daf1158b9ea673101bc3");
    /** se il profilo non esiste termino la funzione restituendo errore */
    if (!Profile) throw new Error({ message: "profile not found" });
    /** recupero l'esperienza */
    const Experience = Profile.experiences.id(req.params.expId);
    /** se l'esperienza non esiste termino la funzione restituendo errore */
    if (!Experience) throw new Error({ message: "experience not found" });
    console.log(Experience);
    Profile.experiences.remove(Experience);
    /** !!! non funziona ma negli altri progetti funzionava */
    // Experience.delete
    console.log(Profile.experiences);
    await Profile.save();
    res.send({ message: "experiences deleted" });
  } catch (err) {
    console.log(err);
    res.send({ message: "delete experience ERROR" });
  }
};
