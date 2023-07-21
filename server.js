const express = require('express');
const app = express();
const multer = require('multer');
const uplode = multer();
const port = 3000;
const {MongoClient, Collection} = require('mongodb');
const url = ¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯
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
app.get('/Auth-Login',(req,res)=>{
    res.sendFile('pages/login/login.html',{root:__dirname});
    app.post('/Auth-login',(req,res)=>{
        let userEmail = req.body.userEnteredEmail;
        let userPassword = req.body.userEnteredPassword;
       const match =  collection.findOne({
            Email : userEmail,
            Password : userPassword
       });
       if(match == 'None'){
        res.status(400)
        res.send("Can't find the user")
       }
       else{
        res.redirect('/')
       }
    })
})
app.listen(3000,()=>{
    console.log(`server running on port : ${port}`);
})