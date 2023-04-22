const userSchema = require("../Model/userSchema")

function postRequest(req, res, next){
    let username = req.body.username;
    let email=req.body.email;
    let password=req.body.password;
    let user={
        username:username,
        email:email,
        password:password
    }
    const UserData=new userModel(user)
    UserData.save().then(item=>{
        console.log(item,"added sucessfully");
    }).catch((err) => {
        console.log("error in adding data",err);
    })

}
module.exports=postRequest