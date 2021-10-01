const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


app.use(bodyParser.json());


//import routes//
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

// ROUTES//
app.get('/',(req,res) =>{
    res.send('we are home');
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTED,
    () =>
console.log('connected to DB')
)

















// app.use('/posts',()=>{
//     console.log("this a middleware running");
// })

//how do we start listening to the server//
app.listen(3000);