const userController=require("../Controller/userController")

const express=require("express")
const root=express.Router()
root.post("/register",userController)
module.exports=root