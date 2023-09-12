const Quran = require("../../modal/quran.js");
exports.pos = async (req, res) => {
  const DB = new Quran(req.body);

  try {
    await DB.save();
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//f1
exports.f1 = async (req, res) => {
  const DB = await Quran.find();

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//id
exports.id = async (req, res) => {
  let i = req.params.id;

  const DB = await Quran.find({ book: { $regex: i } });

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//surah
exports.surah = async (req, res) => {
  let surah = req.params.surah;

  const DB = await Quran.find({ _id: surah });

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//subject
exports.subject = async (req, res) => {
  let { book, subject } = req.params;

 const DB = await Quran.find({
      $and: [{$and:[
        { book: { $regex: book } },],
        },
        {
          $or: [
            { verses_arabic: { $regex: subject } },
              { verses_bangla: { $regex: subject } },
            { summary: { $regex: subject } },
          ],
        },
      ],
    });


  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//subjectPageOne
exports.subjectPageOne = async (req, res) => {
  let { subjectPageOne } = req.params;
console.log(subjectPageOne)
  const DB = await Quran.find(
  { 
   $or: [
            { verses_arabic: { $regex: subjectPageOne } },
              { verses_bangla: { $regex: subjectPageOne } },
            { summary: { $regex: subjectPageOne } },
          ],
    }
    );

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//subjectThree
exports.subjectThree = async (req, res) => {
  let { book,surah,subject } = req.params;

    const DB = await Quran.find({
      $and: [{$and:[
        { book: { $regex: book } },
        { name: { $regex: surah } },],
        },
        {
          $or: [
            { verses_arabic: { $regex: subject } },
              { verses_bangla: { $regex: subject } },
            { summary: { $regex: subject } },
          ],
        },
      ],
    });

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};
//subjectTwo
exports.subjectSurah = async (req, res) => {
  let { book, surah, subject } = req.params;

  const DB = await Quran.find({
      $and: [{$and:[
        { book: { $regex: book } },],
        },
        {
          $or: [
            { verses_arabic: { $regex: subject } },
              { verses_bangla: { $regex: subject } },
            { summary: { $regex: subject } },
          ],
        },
      ],
    });

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//surah1
exports.surah1 = async (req, res) => {
  const { books, surah } = req.params;

  const DB = await Quran.find({
    $and: [{ book: { $regex: books } }, { name: { $regex: surah } }],
  });

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//edite
exports.edite = async (req, res) => {
  let id = req.params.id;

  const DB = await Quran.findByIdAndUpdate({ _id: id }, req.body);

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
  const DB = await Quran.findByIdAndDelete({ _id: id });

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};
