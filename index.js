const express  = require('express')
const authRouter = require('./authRoles')
const mongoose  = require('mongoose')

const PORT  = process.env.PORT || 5000


const app=express()


app.use(express.json())
app.use("/auth" , authRouter)
const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://just_ln:<1234>@cluster0.fgbnzcp.mongodb.net/auth-project?retryWrites=true&w=majority")
    app.listen(PORT, ()=> console.log("server start in 5000"))
} catch (e) {
    console.log(e);
}}

start()