const mongoose=require("mongoose")
const User=require("./userModel")
mongoose.connect("mongodb://127.0.0.1:27017/mynathi")
.then(()=>{console.log("connection success using mongoose lib")})
.catch(()=>{console.log("error connection")})
const myinp=new User({
    name:"Dhiya",
    age:21,
    addr:"88 ,Velusamypuram,karur"
})
myinp.save().then(()=>{
    console.log("success")
})
.catch((error)=>{console.log("error:",error)})