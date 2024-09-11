import express from 'express';
import { callbackGoogle} from '../controllers/authentication.controller.js';
import authorization from '../middlewares/authorization.js';
import passport from 'passport';
// import uploadCloudinary from '../middleware/uploadCloudinary.js'
import {login, me, register} from '../controllers/authentication.controller.js'
const authenticationRouter = express.Router()

authenticationRouter.post('/register', register)// da aggiungere uploadCloudinary.single('avatar')
authenticationRouter.post('/login', login)
authenticationRouter.get('/me',authorization, me)


authenticationRouter.get('/login-google', passport.authenticate('google', {scope:['profile','email']}))// qui chiamo un middlware di passport che ci ridireziona alla pagina di google
authenticationRouter.get('/callback-google',passport.authenticate('google', {session: false}), callbackGoogle)//per disattivare i cookies


export default authenticationRouter;