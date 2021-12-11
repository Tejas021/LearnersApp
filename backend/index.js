const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()
const app = express();

const corsConfig={
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}
let PORT = process.env.PORT||5000


app.use(express.json());
app.use(cors(corsConfig))



mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`connected to ${PORT}`)
    })
})






// ROUTES
const authRoutes = require("./routes/authRoutes")
const subjectRoutes = require("./routes/subjects");
app.use("/api/auth",authRoutes)
app.use("/api/subject",subjectRoutes);


app.get("/",(req,res)=>{
    res.send("hi")
})