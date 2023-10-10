const express=require("express");
const dotenv=require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors=require("colors");
const userRoutes=require('./routes/userRoutes');


const app=express();
dotenv.config();
connectDB();

app.use(express.json());




//first express API
app.get('/',(req,res)=>{
    res.send("API is running successfully");
})

// app.get("/api/chat",(req,res)=>{
//     res.send(chats);
// });

// app.get("/api/chat/:id",(req,res)=>{
//     const singleChat=chats.find((c)=>c._id===req.params.id);
//     res.send(singleChat);

// });

app.use('/api/user',userRoutes)

const PORT=process.env.PORT || 5000; 
app.listen(5000,console.log(`server is running at PORT ${PORT}`.yellow.bold));
