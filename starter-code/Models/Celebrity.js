const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  
});

const Celebrity = mongoose.model("celebrities", schemaName);
module.exports = Celebrity;