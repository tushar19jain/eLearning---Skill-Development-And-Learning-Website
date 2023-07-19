const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const multer = require('multer');
const uplode = multer();
const port = 3000;
const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://jaint381:IxcoZULZH78cacCt@e-learning.hvqtogq.mongodb.net/'
const database = 'users';
const client = new MongoClient(url);
client.connect();
console.log('Connection successfull');
const db = client.db(database);
/*const collection = db.createCollection('Users')*/
client.close()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('pages'));
app.use(uplode.array());
app.get('/',(req,res)=>{
    res.sendFile('pages/homepage/index.html',{root:__dirname});
    app.post('/',(req,res)=>{
        console.log(res.body);
    })
})
app.listen(3000,()=>{
    console.log(`server running on port : ${port}`);
})