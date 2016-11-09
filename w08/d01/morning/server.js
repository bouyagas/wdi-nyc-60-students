//SET UP EXPRESS SERVER IN HERE!
'use strict';

const express = require('express');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(logger('dev'));

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log('Server is listening on port ', PORT));

app.get('/', (req, res) => {
  res.render('index');
});
