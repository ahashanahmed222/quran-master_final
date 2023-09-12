const express =require( "express");
const Router = express.Router();


const { pos, f1, f2,listId, edite, delet } = require("../control/post/subject.js");
Router.post("/", pos);
Router.get("/", f1);

Router.get("/:id", f2);
Router.get("/list/:listId", listId);
Router.put("/:id", edite);
Router.delete("/:id", delet);


module.exports = Router;
