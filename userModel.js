const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    age:{
    type:Number,
    required:true,
    min:18,
    max:100,
},
addr:{
    type:String,
    required:true,
    uppercase:true
    

},
insertedAt:{
    type:Date,
    default:()=>Date.now()
},
city:{
    type:String,
    default:'Karur'
}
})
const userMd1=mongoose.model("mydate",userSchema)
module.exports=userMd1