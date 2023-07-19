const express = require('express');
const app = express();
const port = 3000;
const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://jaint381:IxcoZULZH78cacCt@e-learning.hvqtogq.mongodb.net/'
const database = 'users';
const client = new MongoClient(url);

client.connect();
console.log('Connection successfull');
const db = client.db(database);
const collection = db.createCollection('Users')
client.close()

app.use(express.static('pages'));
app.get('/',(req,res)=>{
    res.sendFile('pages/homepage/index.html',{root:__dirname});
})
app.listen(3000,()=>{
    console.log(`server running on port : ${port}`);
})