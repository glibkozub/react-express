const express = require('express');
const mongoose = require('mongoose');

const FancifulCreatureModel = require('./fancifulCreatures/models').FancifulCreature;
const fancifulCreatureList = require('./fancifulCreatures/views').fancifulCreatureList;

const app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

mongoose.connect('mongodb://localhost:27017/sisense');

const fancifulCreature = new FancifulCreatureModel({name: 'Lobstorka'});

fancifulCreature.save().then(() => console.log('creature is saved'));

app.get('/', (req, res, next) => {
  res.render('../public/index', fancifulCreatureList)
});

app.get('/api/creatures', (req, res, next) => {
  FancifulCreatureModel.find().exec((err, creatures) => {
    res.json(creatures);
  })
});

app.listen(3001);