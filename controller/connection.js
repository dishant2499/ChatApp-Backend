const mongoose = require('mongoose');

module.exports.connect = ()=>{mongoose.connect(process.env.MONGODB, { useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferTimeoutMS: 30000, })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('Error connecting to database', err))}