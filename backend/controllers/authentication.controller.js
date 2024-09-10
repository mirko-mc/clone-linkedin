import Profile from "../models/Profile.schema.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req,res) =>{
    //verificare che la mail non sia già utilizzata
    const profile = await Profile.findOne({email: req.body.email});
    //se esiste ritorna errore
    if (profile) return res.status(500).send('Email already exists')
    // se non è usata allora salviamo il nuovo utente con la password hashata
    const newProfile = new Profile({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        age: req.body.age,
        password: await bcrypt.hash(req.body.password, 10),
        avatar: req.file ? req.file.path : "https://picsum.photos/40",
        verifiedAt: new Date()
    });

    const profileCreated = await newProfile.save()
    res.send(profileCreated);
}

export const login = async (req,res) => {
    //cercare la mail nel db
    const profile = await Profile.findOne({email: req.body.email}).select('+password')//la select mi fa prendere tutto più il campo password
    //se non trova la mail
    if(!profile) return res.status(401).send('Incorrect Credentials')
    //se trova la mail
    if(!(await bcrypt.compare(req.body.password, profile.password))){
        return res.status(401).send('Incorrect Credentials')
    }

    //se la password è corretta allora generare il jwt e lo restituiamo
    jwt.sign(
        {profileId: profile.id},
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        },
        (err, jwtToken) =>{
            if (err) return res.status(500).send();
            return res.send({
                token: jwtToken
            })
        }
    )
}

export const me = async(req,res) =>{
    return res.send(req.loggedProfile)
}


export const callbackGoogle = async (req, res) =>{
    console.log(req)
    //qui facciamo il redirect al front end passandogli il jwt creato in passport nella query string
    // res.redirect(`http://localhost:3000/login?token=${req.user.token}`) //io devo levare login perchè ho il login in homepage
    res.redirect (`http://localhost:3000?token=${req.user.jwtToken}`) //il token ce lo aggiiunge passport nell' oggetto della richiesta
    // e l'oggetto di passport si chiama user (sempre)
    //l'utente autenticato verrà aggiunto in questo oggetto chiamato user
}