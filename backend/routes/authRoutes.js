const router = require("express").Router()
const Teacher = require("../models/Teacher")
const Student = require("../models/Student")
const Cryptojs = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post("/teacher-signin",async(req,res)=>{
    const teacher  = await Teacher.findOne({username:req.body.username});
    if(teacher){
        const hashedPassword  = Cryptojs.AES.decrypt(teacher.password,process.env.PASS_KEY).toString(Cryptojs.enc.Utf8)
        if(req.body.password===hashedPassword){
            const {password,...others} = teacher._doc;
            
            const accessToken = jwt.sign({id:teacher._id,
                isAdmin:true
                },process.env.SECRET_KEY,{expiresIn:"3d"})
                res.status(200).send({...others,accessToken})
        }
        else{
            res.status(400).send("wrong credentials")
        }
    }else{
        res.status(400).send("wrong credentials")
    }
})

router.post("/student-signin",async(req,res)=>{

    const student  = await Student.findOne({username:req.body.username});
    if(student){
        const hashedPassword  = Cryptojs.AES.decrypt(student.password,process.env.PASS_KEY).toString(Cryptojs.enc.Utf8)
        if(req.body.password===hashedPassword){
            const {password,...others} = student._doc;
            const accessToken = jwt.sign({id:student._id,
                isAdmin:true
                },process.env.SECRET_KEY,{expiresIn:"3d"})
            res.status(200).send({...others,accessToken})
        }
        else{
            res.status(400).send("wrong credentials")
        }
    }else{
        res.status(400).send("wrong credentials")
    }
 
})

router.post("/teacher-signup",async(req,res)=>{
    
    const teacher= new Teacher(  {
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        department:req.body.department,
        password:Cryptojs.AES.encrypt(req.body.password,process.env.PASS_KEY).toString()})
          
    try{
        console.log("cllaeds")
        const newTeacher=await teacher.save()
        const {password,...others}= newTeacher._doc;

        const accessToken = jwt.sign({id:newTeacher._id,
            isAdmin:true
            },process.env.SECRET_KEY,{expiresIn:"3d"})

            res.status(200).send({...others,accessToken})
        
    }
    catch(err){
        console.log("er",err)
        res.status(500).send(err)
    }

})

router.post("/student-signup",async(req,res)=>{
    const student= new Student(  {
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        department:req.body.department,
        currentSem:req.body.currentSem,
        password:Cryptojs.AES.encrypt(req.body.password,process.env.PASS_KEY).toString()})
          
    try{
        const newStudent=await student.save()
        const {password,...others}= newStudent._doc;
        const accessToken = jwt.sign({id:newStudent._id,
            isAdmin:true
            },process.env.SECRET_KEY,{expiresIn:"3d"})
            res.status(200).send({...others,accessToken})
        res.status(200).send(others)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

router.post("/verify",async(req,res)=>{
    
})

module.exports=router