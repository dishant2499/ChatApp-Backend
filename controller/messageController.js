const express = require('express');

const Message = require("../schema/messageSchema")


module.exports.messagecontoller = async (req,res)=>{
    try {
        const data = await Message.find()
        res.send({data})
    }
    catch (e) {
        console.log("e",e)
    }
}