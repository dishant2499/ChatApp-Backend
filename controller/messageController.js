const express = require('express');

const Message = require("../schema/messageSchema")


module.exports.messagecontoller = async (req,res)=>{
   const data = await Message.find()
    res.send({data})
}