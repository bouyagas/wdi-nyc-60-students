// 1. Create an empty object literal
var krystyna = {};

// 2. Use dot notation to add the following information to your object:
krystyna.firstName = "Krystyna";
krystyna.lastName = "Malewski";
krystyna.age = 27;

// 3. Add another key value pair to your object, where the key is hobbies and the value is an array of strings.
krystyna.hobbies = ["yoga", "reading", "coding"]

// 4. Write a function that will print your first and last name to the console. This function should accept your object as an argument.
function printFistLastName(person) {
  var fullName = (person.firstName) + " " + (person.lastName);
  return fullName;
}

// 5. Now use dot notation to make that function into a method that belongs to your About Me object with the key printName. Try using the this keyword to access information inside of the object!
krystyna.sayFullName = function printFistLastName(person) {
  var fullName = (this.firstName) + " " + (this.lastName);
  return fullName;
}

// 6. Add another method to your object that prints a single string (including your first name, last name, and all of your hobbies) to the console. Iterate through the hobbies array with a for loop and add a comma after each hobby in the string.
krystyna.printData = function printItAll(person) {
  var hobs = null;
  for (var i = 0; i < this.hobbies.length; i++) {
    var data = this.hobbies[i];
    var hobs = hobs + ", " + data;
  }
  return "Hi, I'm " + krystyna.fullName() + " and my hobbies include " + hobs
}

// 7. Bonus!
krystyna.updateData = function newData(person) {
  var key = prompt('What would you like to change?');
  console.log(key);
  var newValue = prompt('What would you like to change it to?')
  var newKey = null;
  console.log(newValue);
  if (key === 'firstName') {
     newKey = this.firstName;
   } else if (key === 'lastName') {
     newKey = this.lastName;
   } else if (locator === 'age') {
     newKey = this.age;
   } else {
     newKey = this.hobbies;
   }
   console.log("Okay, we will change " + key + " from " + newKey + " to " + newValue);
}
