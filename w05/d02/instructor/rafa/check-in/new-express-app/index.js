const express = require('express');
const logger = require('morgan');

const index = express();

const port = process.env.PORT || 3000;

index.use(logger('dev'));

index.listen(port, () => console.log('Express has been born!'));

index.set('view engine', 'ejs');

index.set('views', 'views');

index.get('/', (req, res) => {
  res.send('Express has been born!')
});

