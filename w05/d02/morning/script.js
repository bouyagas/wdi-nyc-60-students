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


frameworks.frontEnd.forEach(function(object) {
  console.log(object.name + ' is a ' + object.description);
});

const arr = [3, 5, 2, 8, 1];

let sum = 0;
arr.forEach(function(n) {
  sum += n;
});
console.log(sum);


const modifiedFrontEnd = frameworks.frontEnd.map(function(object) {
  return {
    'name': object.name + '.js',
    'description': object.description,
  }
});

console.log(modifiedFrontEnd);

const modifiedBackEnd = frameworks.backEnd.map(function(object) {
  return {
    'name': object.name + '.js',
    'description': object.description,
  }
});

console.log(modifiedBackEnd);


const frontEndFilter = frameworks.frontEnd.filter(function(object) {
  if (object.description.length > 30) {
    return object;
  }
});

console.log(frontEndFilter);

const backEndFilter = frameworks.backEnd.filter(function(object) {
  if (object.name.charAt(0).toUpperCase() === 'A' || object.name.charAt(0).toUpperCase() === 'E' || object.name.charAt(0).toUpperCase() === 'I' || object.name.charAt(0).toUpperCase() === 'O' || object.name.charAt(0).toUpperCase() === 'U') {
    return object;
  }
});

console.log(backEndFilter);


var frontEndNames = frameworks.frontEnd.reduce(function(str, object) {
  return str += object.name;
} '')

console.log(frontEndNames);

