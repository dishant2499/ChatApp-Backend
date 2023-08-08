const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()

module.exports.authentication = (req,res,next)=>{
    console.log("req")
    next()
}