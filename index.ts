import express from "express"

const app = express();



app.get("/",(req,res)=>{
    res.send("First App Home API")
})



app.listen(3000,()=>{
    console.log("First Express App")
})