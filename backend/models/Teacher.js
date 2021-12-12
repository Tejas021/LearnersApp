const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TeacherSchema = new Schema({

   fullname:{required:true,type:String},
    username:{required:true,unique:true,type:String}
    ,email:{required:true,unique:true,type:String}
    ,password:{required:true,type:String}
    ,department:{required:true,type:String},
    isAdmin:{type:Boolean,default:true}
},{timestamps:true})

const Teacher = mongoose.model("teacher",TeacherSchema)

module.exports= Teacher;
