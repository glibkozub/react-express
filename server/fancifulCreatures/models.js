const mongoose = require('mongoose');

const fancifulCreatureSchema = new mongoose.Schema({
  name: String,
  type: String,
  weight: Number,
  height: Number,
  length: Number,
  skinColor: String,
  skinType: String,
  foodChain: String,
  areal: String,
  discovered: Date,
});

module.exports.FancifulCreature = mongoose.model('FancifulCreature', fancifulCreatureSchema);
