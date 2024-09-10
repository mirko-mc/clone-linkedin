import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import "dotenv/config";


export default multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "epicode",
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
      },
    }),
  });







//in server.js===> app.use('/uploads', express.static('./uploads'))

//tuuto quello che creo nella cartella uploads una volta inserito nell url si vedrà

//inserire nella risposta del controller es.res.send(
// coverUrl: process.env.HOST: $process.env.PORT/uploads/$req.file.filename)