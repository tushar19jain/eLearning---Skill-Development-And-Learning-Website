const express = require('express');
const app = express();
const multer = require('multer');
const uplode = multer();
const port = 3000;
<<<<<<< HEAD
const {MongoClient, Collection} = require('mongodb');
const url = 'mongodb+srv://jaint381:IxcoZULZH78cacCt@e-learning.hvqtogq.mongodb.net/'
=======
const {MongoClient} = require('mongodb');
const url = ¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯ (CAN'T BE DISCLOSED)
>>>>>>> 4431bb5156b6bb197edddf515038bd2dc9086b2a
const database = 'users';
const client = new MongoClient(url);
client.connect();
console.log('Connection successfull');
const db = client.db(database);
const collection = db.collection('Users');
client.close()
app.use(express.json());
app.use(express.urlencoded({extended0:true}));
app.use(express.static('pages'));
app.use(uplode.array());
app.get('/',(req,res)=>{
    res.sendFile('pages/homepage/index.html',{root:__dirname});
})
app.get('/Auth-Signup',(req,res)=>{
    res.sendFile('pages/signup/signup.html',{root:__dirname});
    app.post('/Auth-Signup',(req,res)=>{
        let collection = db.collection("users");
        let name  = req.body.user;
        let eml = req.body.email;
        let pass = req.body.password;
        let result =  collection.insertOne({
            Name : `${name}`,
            Email : `${eml}`,
            Password : `${pass}`
        });
        console.log(eml);
        res.redirect('/');
    })

})
app.listen(3000,()=>{
    console.log(`server running on port : ${port}`);
})