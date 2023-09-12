const mongoose =require("mongoose");
const quranSchema =new mongoose.Schema({

    book:String,
      name: String,
      number: String,
      versesNumber:String,
      verses_arabic:String,
      verses_bangla: String,
        summary: String,
    

}


);

 const quran = mongoose.model("Quran", quranSchema);

module.exports = quran;
