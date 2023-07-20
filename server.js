const express = require('express');
const app = express();
const multer = require('multer');
const uplode = multer();
const port = 3000;
const {MongoClient, Collection} = require('mongodb');
const url = 'mongodb+srv://jaint381:IxcoZULZH78cacCt@e-learning.hvqtogq.mongodb.net/'
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
    app.post('/',(req,res)=>{
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
        res.send(result);
    })
})
app.listen(3000,()=>{
    console.log(`server running on port : ${port}`);
})