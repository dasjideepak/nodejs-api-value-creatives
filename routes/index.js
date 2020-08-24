var router = require("express").Router();
var Fruit = require("../models/fruit");

router.get("/", function (req, res, next) {
  res.json({ message: "API is working" });
});

router.post("/fruits/add", async function (req, res, next) {
  try {
    if (req.body.fruits.length > 0) {
      let data = await Fruit.create(req.body);
      res.json({ data });
    } else {
      res.json({ message: "Array should not be empty" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/fruits/view", async function (req, res, next) {
  try {
    let data = await Fruit.find({});
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
