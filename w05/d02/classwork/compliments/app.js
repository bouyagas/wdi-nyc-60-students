const express = require('express');
const logger = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.listen(port, () => console.log('Sever is listening on port ', port));

app.set('view engine', 'ejs');

app.set('views', 'views')


const compliments = [
  'People behind you in class think you are the perfect height.',
  'Your instructors think you\'re amazing.',
  'Your posture during breaks effectively masks your exhaustion.',
  'Your commit messages are an inspiration to us all',
  'Your fingers are magic on the keys',
  'You are the moon of my life...my sun and star',
  'There was a high school rumor that you are a distant relative of Abraham Lincoln.',
  'Strangers all wanna sit next to you on the bus.',
  'If Einstein could meet you, he\'d be "mildly to moderately" intimidated.'
];


app.get('/', (req, res) => {
  const link1 = '/';
  const link2 = 'http://expressjs.com/';
  res.render('index', {
  compliment: compliments[Math.floor(Math.random()*10)],
  link1: link1,
  link2: link2,
  });
});

app.get('/:name', (req, res) => {
  const name = req.params.name;
  const link1 = '/';
  const link2 = 'http://expressjs.com/';
  res.render('index', {
  name: name,
  compliment: compliments[Math.floor(Math.random()*10)],
  link1: link1,
  link2: link2,
  });
});
