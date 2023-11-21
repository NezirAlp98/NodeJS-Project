const express=require('express')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const routes=require('./routes/employee.route')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const PORT=3000;

app.get("/",(req,res)=>{
    res.status(200).send("working")
})

app.use("/api",routes)

app.listen(PORT)
console.log(`${PORT} running...`)