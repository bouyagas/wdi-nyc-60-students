# Express Cheat Sheet 
- How to start a node project:
    * in our command line: `npm init`
    * creates our package.json which is our manifest file 
- Install our dependencies 
    * In our command line: `npm install --save <npm packages>`
    * `express`: our Express Server 
    * `morgan`: Logging middleware utility 
    * `ejs`: Embedded JavaScript. We use this package to renderour views using embedded Js. 
- Create our main server file called `app.js`, `server.js`, or `index.js` all of these are fine it's up to you what you want to use, just make sure your `package.json`'s 'main' attribute reflects it
- In our `app.js` we require our dependencies like: 

```javascript 
const express = require('express');
const logger = require('morgan'); 
```

- Initalize our express server:
// We are invoking the express object below

```javascript
const app = express(); 
```

- Create a variable for what port our server is going to run on

```javascript 
const port = process.env.PORT || 3000; 
```

- Add middlewares using the express method `app.use()`
    * example:
    ```javascript 
    app.use(logger('dev'));
    ```

- Tell our application what port to listen to so we can access our sever 
```javascript
app.listen(port, () => console.log('Sever is listening on port ', port));
```

- Tell our server to use `ejs` as our view engine with:
    * 'veiw engine' is a reserved string in express 
    * you can see the other parameters for app.set are predefined and available for use on express documentation 
// Set our view engine to use EJS
```javascript
app.set('view engine', 'ejs');
// Setting the location of our views to a directory called views 
app.set('views', 'views')
```
    * When creating our views, they should all be located in a directory in the root of our project called `views`, as defined above
    * All of our views will be HTML files, but with a file extension of `.ejs` (e.g. - `index.ejs`)

- EJS rendering tags: 
    * `<%= something %>`
        - This tag renders on the html as the value stored in `something`
    * `<% %>` 
        - This tag is used for embedding JS logic and functionality in your `.ejs` files 
        (_remember looping through an array to render multiple items_)

- We are able to set our server's `GET` routes using `app.get()`
    * The first parameter of our `.get()` is the route that our server will be handling, followed by a callback function that contains the `request` and `response` objects as parameters 

```javascript 
app.get('/', (request, response) => {
    response.render('index', {
    heading: 'Hello World'
    });
});
```
    * We are using the method `render()` on our response object to render an `ejs` view called `index`, and we are passing an object with an attribute of `heading` that will be available to us in our view 
    * We do not change the request object ever. We get information from it (read, only)
    * We can use information from the request object in our response (write, only)

- Our server is able to get dynamic information from our client's using the `request` object by passing that information in the `URL` and it works like:

```javascript
// If we wanted to create a page with all users, we would have to define it before username or else JS would think that 'all' is the username
app.get('/users/all', (req, res) => {
    res.render('about', {
        // pass all users
    });
});

app.get('/users/:username, (req, res) => {
    res.render('about', {
    username: req.params.username ,
    });
});
```
    * Here `req.params` is an object that holds all of our parameters delimited by a `:`


