const mongoose=require("mongoose")
const schema=mongoose.Schema({
    Name:{type:String,require:true},
    Email:{type:String,require:true},
    Password:{type:String,require:true},
})

module.exports=mongoose.model("users",schema)