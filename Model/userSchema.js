const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const Users  = new Schema({
 
    username: String,
     email: String,
     password: String,
  
  });

  const userModel = mongoose.model("userModel", Users);
  module.exports = Users;

