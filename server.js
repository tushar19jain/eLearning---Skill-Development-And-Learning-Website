const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('pages'));
app.get('/',(req,res)=>{
    res.sendFile('pages/homepage/index.html',{root:__dirname});
})
app.listen(3000,()=>{
    console.log(`server running on port : ${port}`);
})