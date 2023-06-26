const mongoose = require('mongoose');

module.exports = ()=>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology:true
    };

    try {
        mongoose.connect(process.env.DB,connectionParams)
        console.log("Connected succeefully..!");
    } catch (error) {
        console.log("mongoDB Err:",error);
    }
};