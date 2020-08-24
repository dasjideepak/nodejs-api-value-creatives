var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fruitSchema = new Schema(
  {
    fruits: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fruit", fruitSchema);
