var frameworks = {
  "frontEnd": [
    {
      "name": "React",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces."
    },
    {
      "name": "Angular",
      "description": "HTML enhanced for web apps"
    },
    {
      "name": "Backbone",
      "description": "Give your JS App some Backbone with Models, Views, Collections, and Events"
    }
  ], // ends frontEnd array
  "backEnd": [
    {
      "name": "Express",
      "description": "A minimalist framework for building a host of web and mobile applications as well as application programming interfaces (APIs)"
    },
    {
      "name": "Meteor",
      "description": "An open-source, model-view controller (MVC) framework for building websites and web/mobile applications."
    },
    {
      "name": "Sails",
      "description": "Sails.js offers a model-view controller (MVC) pattern for implementing data-driven application programming interfaces (APIs)."
    }
  ] // ends backendArray
} // ends data json object

// Console.log the name and description of each frontend framework using forEach
frameworks.frontEnd.forEach( object => {
  console.log(object.name + ' is a ' + object.description);
});

// Find the sum of an array using forEach
const arr = [3, 5, 2, 8, 1];

let sum = 0;
arr.forEach( n => {
  sum += n;
});
console.log(sum);

// Use map to create a new array with .js at the end of the names
const modifiedFrontEnd = frameworks.frontEnd.map( object => {
  return {
    'name': object.name + '.js',
    'description': object.description,
  }
});

console.log(modifiedFrontEnd);

const modifiedBackEnd = frameworks.backEnd.map( object => {
  return {
    'name': object.name + '.js',
    'description': object.description,
  }
});

console.log(modifiedBackEnd);

// Retrun a new array of objects that contains only frameworks with a description longer than 30 characters
const frontEndFilter = frameworks.frontEnd.filter( object => {
  if (object.description.length > 30) {
    return object;
  }
});

console.log(frontEndFilter);

// Return a new array of objects that contains only framework's that names begin with a vowel
const backEndFilter = frameworks.backEnd.filter( object => {
  if (object.name.charAt(0).toUpperCase() === 'A' || object.name.charAt(0).toUpperCase() === 'E' || object.name.charAt(0).toUpperCase() === 'I' || object.name.charAt(0).toUpperCase() === 'O' || object.name.charAt(0).toUpperCase() === 'U') {
    return object;
  }
});

console.log(backEndFilter);

// Return a string that concatnates all the names of the frontend frameworks together
// If we do not add the extra parameter of an empty string at the end, the first time we loop through it will find the framework object, not object.name
// By setting the initial value as an empty string, it will loop through and find an empty string the first time and then the second time it will
// find object.name of the first object
const frontEndNames = frameworks.frontEnd.reduce( (str, object) => {
  return str += object.name;
},'');

console.log(frontEndNames);

