const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StudentSchema = new Schema({

    fullname:{type:String,require:true},
    username:{required:true,unique:true,type:String}
    ,email:{required:true,unique:true,type:String}
    ,password:{required:true,type:String}
    ,department:{required:true,type:String}
    ,currentSem:{required:true,type:String},
    isAdmin:{type:Boolean,default:false}
},{timestamps:true})

const Student = mongoose.model("student",StudentSchema)

module.exports= Student;
