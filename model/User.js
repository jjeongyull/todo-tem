const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_key = process.env.JWT_SECRET_KEY;

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

userSchema.methods.generateToken = function(){
  const token = jwt.sign({ _id: this._id }, jwt_key, {expiresIn: '1d'});
  return token;
}

const User = mongoose.model("User", userSchema);

module.exports = User;