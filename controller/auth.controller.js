const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const authController = {};

authController.authenticate = (req, res, next) => {
  try{
    const tokenString = req.headers.authorization; // Bearer
    if(!tokenString){
      throw new Error('토큰이 없습니다.');
    }
    const token = tokenString.replace('Bearer ', '');
    jwt.verify(token, JWT_SECRET_KEY, (error, payload) => {
      if(error){
        throw new Error('토큰이 만료가 되었거나 올바르지 않습니다.');
      }
      // res.status(200).json({status: 'success', user_id: payload._id});
      req.user_id = payload._id;
    });
    next();
  }catch(e){
    res.status(400).json({status: 'fail', message: e.message});
  }
}

module.exports = authController;

// 미들웨어
