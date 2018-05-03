const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const {Client} = require('pg');
const format = require('pg-format')
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

const homepageController = require('./controllers/homepage.js');
app.use('/', homepageController)

const client = new Client({
    user:'BrianJr',
    host:'localhost',
    database:'timepiece',
    port:5432,
})
client.connect()

client.query('SELECT * FROM users;', (err,res) => {
    console.log(err,res)
    client.end()
})


app.listen(port, ()=>{
    console.log('listening');
})
