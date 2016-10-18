// Require that app.js uses these dependencies
const express = require('express');
const logger = require('morgan');

// This is our express object. We are saving an instance of this express server in app.
const app = express();
// process.env.PORT is an environmental variable, but since it is not defined on our computer, we will use 3000 instead.
const port = process.env.PORT || 3000;

// ejs - embedded js, template for a severside
app.set('view engine', 'ejs');
// grab 'views' and save them in location 'views'
app.set('views', 'views');


// Middleware lives between the request and response cycle
app.use(logger('dev'));

// Tell our app what port we want our app to listen on and then execute the callback function
app.listen(port, () => console.log('Sever is listening on port ', port));

// index.ejs lives on our server; embedded JS into our HTML
// <%= %> : embedded tag (we passed the object to our index.html)
// <% %>
app.get('/', (req, res) => {
  // save the links for about and contact pages
  const links = ['/about', '/contact'];
  res.render('index', {
    message: 'This is the homepage',
    links: links
  });
});

// Req and res are arbitraty variable names
// app.get - the client is going to make a get request at the path of /about
// when this gets to our server, response sends back 'About'
app.get('/about', (req, res) => {
  // res.send('<h1>About<h1>');
  const links = ['/', '/contact'];
  res.render('index', {
    message: 'This is the homepage',
    links: links
  });
})

app.get('/contact', (req, res) => {
  const links = ['/', '/about'];
  res.render('index', {
    message: 'This is the contact page',
    links: links
  });
})

fn(){
  for(const i = 0; i < 100; i++){
    console.log(i);
  }
}


