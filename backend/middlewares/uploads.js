import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import "dotenv/config";


const uploadCloudinary = multer({
  storage: new CloudinaryStorage({
      cloudinary,
      params:{
          folder: "epicode",
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET
      },
  }),
});

export default uploadCloudinary






//in server.js===> app.use('/uploads', express.static('./uploads'))

//tuuto quello che creo nella cartella uploads una volta inserito nell url si vedrà

//inserire nella risposta del controller es.res.send(
// coverUrl: process.env.HOST: $process.env.PORT/uploads/$req.file.filename)