# 10 Javascript Interview Questions You Should Know!


1) What should the following code output? Explain this behavior.

```
(function(){
  var a = b = 3;
})();

console.log(a);
console.log(b);

// uncaught reference error for a
// 3 for console.log(a)

What is actually happening is 
b = 3 (this becomes a global variable)
var a = b

Since a is defined inside the IIF statement, it is not available outside of the function while b is because it is a global variable.
```

2) Consider the code below. Will they return the same thing? Why or why not?

```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

foo1() will return the object { bar: 'hello'}
foo2() will return undefined because when you move the curly brace to the next line, the function will automatically think a semicolon was supposed to be there so it will return nothing
```

3) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
```
(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();

// 1
// 4
// 3
// 2

setTimeout is a method so it will be put on the 'event stack'. After the two console.logs are run, it will then go to the event stack and see how long to wait for each callback function
```

4) What will be the output when the following code is executed? Explain.
```
console.log(false == '0') // true: 0 is a falsey value so since they are both falsey values, false = false so it returns true
console.log(false === '0') // false: false is NOT '0' - trequals means that values are the same thing


```

5) What’s the result of executing this code and why.
```
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// undefined - when the console.log a is called, a has not yet been assigned a value because the assignement of the value will not be hoisted
// 2 - the function foo will be hoisted to the top of the function scope so when you console.log the function foo, it will still return 2. 
```

6) What is the output of the following code?
```javascript
  var a={},
      b={key:'b'},
      c={key:'c'};

  a[b]=123;
  a[c]=456;

  console.log(a[b]);
```


7) Write a function to deliver the expected output
```
duplicate([1,2,3,4,5]);
  => [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
    const newArr = arr;
    const length = arr.length
    for (let i = 0; i < length ; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
```

8) Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++ ) {
        if (i%3 === 0 && i%5 === 0) {
            console.log('fizzbuzz');
        } else if (i%3 === 0) {
            console.log('fizz');
        } else if (i%5 === 0) {
            console.log('buzz');
        } else {
            console.log(i)
        }
    }
}

9) Explain "hoisting".

10) What is a ternary operator? Show an example.
