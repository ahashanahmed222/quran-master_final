const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const book = require('./router/book');
const quran = require('./router/quran');
const subject = require('./router/subject');
const dotenv = require('dotenv')
const app = express();

var cors = require("cors");
dotenv.config()
mongoose.connect(process.env.APP_SERVER, () => {
  console.log("connected");
});

app.use(express.json())
app.use(cors())

app.use('/book',book)
app.use('/quran',quran)
app.use('/subject',subject)

app.listen(process.env.PORT, () => {
    console.log(`quran server conncet http://localhost:${process.env.PORT}`)
})



