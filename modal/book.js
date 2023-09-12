const mongoose = require("mongoose");
const quranSchema = new mongoose.Schema({
  book: String,
  Author_Introduction: String,
 
});

const book = mongoose.model("Book", quranSchema);
module.exports = book;
