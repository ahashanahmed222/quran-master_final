const Book = require("../../modal/book.js");

//pos
exports.pos = async (req, res) => {
  const DB = new Book(req.body);

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
  const DB = await Book.find();

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//f2
exports.f2 = async (req, res) => {
  let i = req.params.id;



  const DB = await Book.find({book:{ $regex: i}});

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//listId
exports.listId = async (req, res) => {
  let i = req.params.listId;

  const DB = await Book.find({
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

  const DB = await Book.findByIdAndUpdate({ _id: id }, req.body);

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//delete
exports.delet = async (req, res) => {
  let id = req.params.id;
  const DB = await Book.findByIdAndDelete({ _id: id });

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};
