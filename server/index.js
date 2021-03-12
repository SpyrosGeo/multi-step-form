const express = require('express');


require('./db')


const app = express()
const PORT = process.env.PORT ||3030;

app.get('/',(req,res)=>{
    res.send('Hello there!')
})