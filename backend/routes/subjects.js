const express = require("express");
const router = express.Router();
const Subjects = require("../models/Subjects");

// ADD SUBJECT

router.post('/addSubjects', async (req,res)=>{
    const newSubject = new Subjects(req.body);
    console.log(newSubject)
    try{
        const saveSubject = await newSubject.save();
        res.status(200).send(saveSubject);
    } catch(err){
        console.log(err)
    }
});

//UPDATE SUBJECTS
router.put('/updateSubject/:id',  async (req, res) => {
   
        try {
            const updateSearch = await Subjects.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).send(updateSearch)
        } catch (err) {
            res.status(500).send(err)
        }
})

// DELETE SUBJECT
router.delete('/deleteSubject/:id', async (req, res) => {
        try {
            const deleteSubject = await Subjects.findByIdAndDelete(req.params.id)
            res.status(200).send("subject deletd successfully")
        } catch (err) {
            res.status(500).json(err)
        }
    
})

// FETCH SUBJECTS

router.get("/fetchSubject",async (req,res)=>{
    try{
        const data =  await Subjects.find({name:req.query.subject})
        res.status(200).send(data)
    } catch (err){
        res.status(500).send(err)
    }
})

module.exports = router