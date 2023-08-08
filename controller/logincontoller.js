const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../schema/loginSchema")


module.exports.logincontoller = async (req,res)=>{
    console.log("req ===========================================================",req.body)
   const abcd = await bcrypt
        .hash(req.body.password, saltRounds)
        .then(hash => {
            return hash
        })
    const user = new User({
        email:req.body.email,
        password:abcd,
        firstname:req.body.firstname
    })

    user.save()

    const token = await jwt.sign({user}, process.env.JWT_TOKEN_SECRET, { expiresIn: '1h' });
    res.send({token,email:user.email,firstname:user.firstname})
}