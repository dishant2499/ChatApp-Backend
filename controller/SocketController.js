const express = require('express');
const { Server } = require("socket.io");
const multer = require("multer");
const Message = require("../schema/messageSchema")


const io = new Server(4001,{
    cors: {
        origin: "https://chatapp-backend-qd3r.onrender.com",
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});



module.exports.SocketController=async (req,res,next)=> {
    // const abcd =  await User.find()
    //  console.log("abcd",abcd)


    io.on('connection', async(socket) => {

        socket.on("joined user", async(value) => {


            io.emit("joined", value)
        })

        socket.on("message", async(value) => {
            if(value){
                const messageData = new Message({
                    message:value.message,
                    user:value.user,
                })
                await messageData.save()
                console.log("value",value)
            }
            io.emit("response", value)
        })

        socket.on("myFile",async (value) => {
            if(value){
                const messageData = new Message({
                    form:value.form,
                    type:value.type,
                    user:value.user,
                })
                await messageData.save()
                console.log("value",value)
            }

            io.emit("responsefile", value)
        })


    });

}