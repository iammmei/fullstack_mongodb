console.log("hello")

import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;





mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('MongoDB Atlas connected!');
}).catch(err => {
console.log(err);
});

 let app = express();
 app.set('view-engine', 'ejs');

 //GET = AVOIR LINFORMATION DU SERVEUR , avoir une page html , telecharger un file ...
 // POST REMPLIR FORMULAIRE ETC...INTRODUIRE UNE DONNE UTILISATEUR QUI DONNE 

 app.get("/", (req, res)=> {
    res.render("index.ejs")
 }
 ) 

 // TOUJOURS DERNIERE LIGNE
 app.listen(3000, ()=> {
    console.log('running on port 30000')
})
 