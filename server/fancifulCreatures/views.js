const fancifulCreatureModel = require('./models').FancifulCreature;

// const getFancifulCreature = async () => await fancifulCreatureModel.find().exec();

// getFancifulCreature()
//   .then((res) => { module.exports.fancifulCreatureList = { list: res} });

fancifulCreatureModel.find().exec((err, creatures) => {

});