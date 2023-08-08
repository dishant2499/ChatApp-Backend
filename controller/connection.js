const mongoose = require('mongoose');

module.exports.connect = ()=>{mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('Error connecting to database', err))}