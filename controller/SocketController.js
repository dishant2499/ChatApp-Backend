const express = require('express');
const { Server } = require("socket.io");
const multer = require("multer");
const Message = require("../schema/messageSchema")
const socketIo = require('socket.io');


const io = socketIo(3000,{
    cors: {
        origin:"https://chat-app-front-end-o3re-ejg0tg8mx-dishant2499.vercel.app",
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