// 초기세팅 app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const cors = require("cors");
require('dotenv').config();

const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", indexRouter);


mongoose.connect(MONGODB_URI_PROD)
.then(()=> {
  console.log('몽구스 연결 성공')
})
.catch((err) => 
console.log('연결 실패: ', err));


app.listen(process.env.PORT || 5000, () => {
  console.log('Server On 5000')
});