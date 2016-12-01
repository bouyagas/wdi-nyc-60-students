# Underscore.JS

![](https://media.giphy.com/media/13EN2KcqKicYDu/giphy.gif)

This morning you will explore a really helpful Javascript library
called [Underscore.JS](http://underscorejs.org/). Underscore provides very handy helper functions for iterating and manipulating arrays and objects. It also gives more advanced and quite useful feature for function binding, chaining, front - end templates etc. 

Here are some of the methods to review:

1. `each` _.each(list, iteratee, [context])
Alisa: forEach
iterates over a list of elements and performs a function on each element

Example: 
var person = {};
person.friends = {
  name1: true,
  name2: false,
  name3: true,
  name4: true
};

_.each(['name4', 'name2'], function(name){
  // this refers to the friends property of the person object
  alert(this[name]);
}, person.friends);

// this will iterate through the array and alert each number
_.each([1, 2, 3], alert);
=> alerts each number in turn...
_.each({one: 1, two: 2, three: 3}, alert);
=> alerts each number value in turn..


2. `map`, `pluck`
Allias: collect
creates a new array by iterating through an array and performing a function on each index

_.map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]

pluck iterates through an array (like map) of objects and creates a new array with the values of a specific key

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
// pluck goes through the stooges collction and looks for each key 'name'. If takes that value and pushes it into a new array


3. `find`, `findWhere`
Allias: detect

looks through an array for a value that meets the conditions set in a truth test
it returns the first value that meets this condition and does not go through the entire array
if no values meet the condition, it returns undefined 

// iterate through the array 'even' looking for an even number. '1' will return false so it will go on to two and then returns '2' because it returns true and then the iteration will stop there
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> 2

_.findWhere(list, properties) 
findWhere is like find with objects. 
it looks through a list of objects and returns the first object that matches the key-value properties listed after the array 

_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
=> {year: 1918, newsroom: "The New York Times",
  reason: "For its public service in publishing in full so many official reports,
  documents and speeches by European statesmen relating to the progress and
  conduct of the war."}


4. `filter`, `reject`
Alias: select 
similiar to find, it looks in an array for values that pass a truthy test
filter is different though because it returns a new array of ALL the values that pass the truthy test, not just the first value like in find

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]

reject is opposite of filter
it iterates through a list of values and returns a new array of any values that fail the truthy test

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]


5. `every`, `some`, `contains`
Alias: all

every iterates through an array checking to see if all values pass the truthy test
if all values pass the test, it will return true
once one value fails the test, the iteration will stop and the function will return false

_.every([2, 4, 5], function(num) { return num % 2 == 0; });
=> false

similar to every, it iterates through an array check to see if values pass a truthy test. With some, it will stop the circuit and return true once the first truthy value is found

_.some([null, 0, 'yes', false]);
=> true

contains- Alias: includes
iterates through an array checking to see if a specific value is present in that array. It is is present, it will return true. 

_.contains([1, 2, 3], 3);
=> true

6. `uniq` _.uniq(array, [isSorted], [iteratee]) 
this function will iterate through an array to make a new array that does not have any duplicate values. It will only keep the first instance of a value in an array in the new array.
if your array is already sorted, you can pass "true" for isSorted and it will run the algorithm much faster for you. 

_.uniq([1, 2, 1, 4, 1, 3]);
=> [1, 2, 4, 3]

7. `shuffle`
jumbles up a list 

_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]

8. `range`  _.range([start], stop, [step]) 
start if omitted defaults to 0
step if omitted defaults to 1

this function returns a list of intergers starting, and including start and ending, not including, stop. It will increment depending on the "step" parameter provided

_.range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_.range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
_.range(0, -10, -1);
=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
_.range(0);
=> []



Questions to answer for each:

1. What does the function do? Explain it in your own way and don't
   just copy the docs.
2. Provide an instructive example of usage.
3. Provide an extensively  commented version of the source code for
   the function. 
4. How would you accomplish the same thing in Javascript yourselves?
   What makes the underscore implementation better (or worse)?
5. Give an example of where you would use the function in any of your
   own projects, assignments
