import express from "express"
import * as profileController from "../controllers/profile.controller.js"
import uploads from "../middlewares/uploads.js"

const route = express.Router()

// recupero tutti i profili
route.get("/", profileController.getAllProfiles)

// recupero un singolo profilo
route.get("/:id", profileController.getProfile)

// creo un nuovo profilo
route.post("/", profileController.createProfile)

// modifico un profilo
route.put("/:id", profileController.putProfile)

//modifica dell'avatar
route.patch("/:id/avatar", uploads.single("avatar"), profileController.editAvatar)

export default route