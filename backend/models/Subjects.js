const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema(
    {
        name:{type:String},
        IA1:{type:Number},
        IA2:{type:Number},
        viva:{type:Number},
        semester:{type:Number},
        student:{type:String},
        professor:{type:String},
        sem:{type:Number}
    },
    {timestamps:true}
);

module.exports = mongoose.model("subjects",SubjectSchema);