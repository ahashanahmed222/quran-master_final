const mongoose = require("mongoose");
const quranSchema = new mongoose.Schema({
    book:String,
subject_name:String
});

const subject = mongoose.model("Subject", quranSchema);

module.exports = subject;