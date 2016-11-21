
// 1.0
var goldenSnitch = {
  escape: "See ya!",
  capture: "150 points to Gryffindor!",
  logEscape: function() {
    console.log(this.escape);
  }
}

var harryPotter = {
  position: "Seeker",
  broomStick: "Nimbus 2000",
  escape: "Only with the help of friends"
}

console.log(goldenSnitch.capture); // "150 points to Gryffindor!"
goldenSnitch.logEscape(); // "See ya!"

console.log(harryPotter.escape) // "Only with the help of friends!"
// harryPotter.logEscape()
var sayHarryEscape = goldenSnitch.logEscape.bind(harryPotter)
sayHarryEscape(); // "Only with the help of friends!"

// answer
// the goldenSnitch object has the logEscape key which cosole.logs(this.escape). By binding the harryPotter object to the logEscape key, the "this" is referring to the harryPotter object, meaning this.escape will reference harryPotter.escape instead of goldenSnitch.escape.


// // 1.2
var draco = {
  name: "Draco Malfoy",
  house: "Slytherin",
  hasHenchmen: true,
  logYelling: function() {
    if (this.hasHenchmen === true) {
      console.log("Potter! Is it true you fainted? I mean, you actually fainted? ");
    } else if (this.hasHenchmen === false) {
      console.log("Shove off Malfoy!")
    }
  }
}

var ron = {
  name: "Ron Weasley",
  house: "Gryffindor",
  hasHenchmen: false
}

draco.logYelling(); // "Potter! Is it true you fainted? I mean, you actually fainted?"
draco.logYelling.bind(ron)(); // "Shove off Malfoy!""

// answer
// ron.logYelling does not exist so in order to get ron yelling, you must call draco.logYelling and bind the ron object to the function. When the function checks to see if "this.hasHenchmen" is true, it will return false because it is referencing the ron object instead of the draco object.

// 1.7
var dumbledore = {
  name: "Albus Dumbledore",
  prefix: "Professor",
  quote: "In dreams we enter a world that's entirely our own."
}

var snape = {
  name: "Serveus Snape",
  prefix: "Professor",
  quote: "Mr Potter.Our.New.Celebrity",
  sayQuote: function() {
    console.log(this.quote);
  }.bind(dumbledore)
}

snape.sayQuote(); // "In dreams we enter a world that's entirely our own."

// answer
// Here, the function snape.sayQuote is bound to the dumbledore object. When it looks for "this.quote" it is referencing dumbledore.quote rather than snape.quote.


// 1.9
// answer
// When we call hagrid.sayQuote on the button, the this.quote is looking at the "this" object of whatever called it, in this case the button. Since the button does not have a button.quote, it will return undefined. In order to log "you're a wizard harry", we need to bind the hagrid object to the function so the "this" will point to hagrid


// 2.0
var hagrid = {
  name: "Rubeus Hagrid"
}

var longbottom = {
  name: "Neville Longbottom"
}

var say = function(quote){
  console.log(quote + ", said " + this.name);
}

say.call(hagrid, "You're a wizard, Harry!") // You're a wizard, Harry!, said Rubeus Hagrid.

say.call(longbottom,
  "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... "
) // "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... ", said Neville Longbottom.

// answer

// Call



// 3.0
var hagrid = {
  name: "Rubeus Hagrid"
}

var snape = {
  name: "Serveus Snape"
}

var say = function(quote){
  console.log(quote + "," + this.name);
}

var update = function(job, teaches, quote){
  this.job = job,
  this.teaches = teaches,
  this.quote = quote
}

var logMore = function(person, method, args){
  method.apply(person, args)
}

logMore(hagrid, say, ["Yo I'm "]) // "Yo I'm, Rubeus Hagrid"
logMore(snape, say, ["I am ...................................................................."]) // "I am ...... Serveus Snape."

logMore(hagrid, update, ["Keeper of Keys and Grounds", "Care of Magical Creatures", "What's comin' will come and we'll meet it when it does."])

logMore(snape, update , ["Professor at Hogwarts", "Defence Against the Dark Arts", "Turn to page 394."])

console.log(hagrid)
// Object {
//   name: "Rubeus Hagrid",
//   job: "Keeper of Keys and Grounds",
//   teaches: "Care of Magical Creatures",
//   quote: "What's comin' will come and we'll meet it when it does."
// }
<<<<<<< HEAD
console.log(snape)

// answer
=======
//
// logMore(hagrid, say, ["Yo I'm "])
// logMore(snape, say, ["I am ...................................................................."])
//
// logMore(hagrid, update, ["Keeper of Keys and Grounds", "Care of Magical Creatures", "What's comin' will come and we'll meet it when it does."])
//
// logMore(snape, update , ["Professor at Hogwarts", "Defence Against the Dark Arts", "Turn to page 394."])
//
// console.log(hagrid)
// console.log(snape)
//
// // answer
>>>>>>> 570dc2e7295a8c5a8f2dba7777d6e1cd5387882b
