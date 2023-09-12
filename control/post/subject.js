const Subject = require("../../modal/subject.js");
exports.pos = async (req, res) => {
  const DB = new Subject(req.body);

  try {
    await DB.save();
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//f1
exports.f1 = async (req, res) => {
  const DB = await Subject.find();

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//f2
exports.f2 = async (req, res) => {
  let i = req.params.id;

  const DB = await Subject.find({
    book:{$regex:i}
  });

  try {
   
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};


//listId
exports.listId = async (req, res) => {
  let i = req.params.listId;

  const DB = await Subject.find({
    _id: i,
  });

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//edite
exports.edite = async (req, res) => {
  let id = req.params.id;

  const DB = await Subject.findByIdAndUpdate({ _id: id }, req.body);

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//delete
exports.delet = async (req, res) => {
  let id = req.params.id;
  const DB = await Subject.findByIdAndDelete({ _id: id });

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};
