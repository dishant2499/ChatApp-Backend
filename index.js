const express = require('express');
const bodyparser = require('body-parser')
var cors = require('cors')
const multer = require("multer");
const app = express()
const mongoose = require('mongoose');
const CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');
const { Server } = require("socket.io");
const dotenv= require('dotenv')

const otpGenerator = require('otp-generator')
const {logincontoller} = require( "./controller/logincontoller")
const {messagecontoller} = require( "./controller/messageController")

const {SocketController} = require( "./controller/SocketController")

const  {authentication} = require( "./controller/authentication")
const  {connect} = require( "./controller/connection")


dotenv.config();
connect()

app.use(bodyparser.json())
app.use(cors())
app.use("/uploads",express.static("uploads"))



const storage = multer.diskStorage({
   destination:(req, file, cb)=>{
      cb(null,"uploads/")
   },
   filename : (req, file, cb)=>{
      // console.log("file",file)
      cb(null,file.originalname)
   }
});
const upload = multer({
   storage: storage,
});


app.post("/login",logincontoller)

app.post("/form",upload.single('myFile'),(req,res)=>{
 console.log("req",req.file)
   res.status(200).json({res:`http://localhost:4000/${req.file.path}`,type:req.file.mimetype})
})

app.get("/message",messagecontoller)

SocketController()
app.listen(process.env.PORT,()=>{
   console.log(`application run on port ${process.env.PORT}`)
})