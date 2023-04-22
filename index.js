const express = require("express");
const mongoose= require("mongoose");
const app = express();
const port = 2000;
app.use(express.json)

mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7") .then(() => console.log('Connected!'));;
app.listen(port, ()=>{
    console.log("Port is running on 2000");
})
const root=require("./Router/usesRouter")
// app.use("/",root);