const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
     },
     password:{
        type:String,
        require:true
     }
})

userSchema.methods.generateAuthToken = function(){
   const token = jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expiresIn:'1hr'});
   return token;
}

const User = mongoose.model('user',userSchema);

const validate =  (data) => {

    const schema = joi.object({

        firstName: joi.string().required().label("First Name"),
        lastName: joi.string().required().label("Last Name"),

        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};
 
module.exports = {User,validate};
