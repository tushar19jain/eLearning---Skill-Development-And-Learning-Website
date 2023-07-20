const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://jaint381:IxcoZULZH78cacCt@e-learning.hvqtogq.mongodb.net/'
const database = 'users';
const client = new MongoClient(url);

client.connect();
console.log('Connection successfull');