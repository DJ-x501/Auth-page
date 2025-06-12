const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const connectDb = require('./db/db');
const router = require("./router/router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//API routes.............
app.use("/test/api",router);


const PORT = process.env.PORT;

app.listen(PORT,async function(req,res){
    await connectDb();
    console.log("server running on",PORT);
});