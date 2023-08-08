const express = require('express');
const { Server } = require("socket.io");
const multer = require("multer");


const io = new Server(4001,{
    cors: {
        origin: "*",
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

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


module.exports.fileUploadController=(req,res,next)=> {



}