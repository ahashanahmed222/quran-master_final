const express = require("express");
const Router = express.Router();

const {
  pos,
  f1,
  id,
  surah,
  subject,
  subjectPageOne,
  subjectSurah,
subjectThree,
  surah1,
  edite,
  delet,
} = require("../control/post/quran.js");


Router.post("/", pos);
Router.get("/", f1);

//admin/view/quran
Router.get("/:id", id);

//admin/body
Router.get("/surah/:surah", surah);

//subject PageFour search
Router.get("/subject/:book/:subject", subject);

//subject PageOne Search
Router.get("/subjectOne/:subjectPageOne", subjectPageOne);

//subject Three search
Router.get("/subjectThree/:book/:surah/:subject", subjectThree);

//subjectTwo
Router.get("/subjectSurah/:book/:surah/:subject", subjectSurah);


Router.get("/ayat/:books/:surah", surah1);

//admin put and delete
Router.put("/:id", edite);
Router.delete("/:id", delet);

module.exports = Router;
