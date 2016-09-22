// Function to find the max of two numbers
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(2, 5));

//Function to find the max of three numbers
function maxOfThree(num1, num2, num3) {
  if ((num1 > num2) && (num1 > num3)) {
    return num1;
  } else if ((num2 > num1) && (num2 > num3)) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(5, 8, 1));

//Function to determine if a character is a vowel
function isCharacterAVowel(char) {
  var letter = char.toUpperCase();
  return ((letter === 'A') || (letter === 'E') || (letter === 'I') || (letter === 'O') || (letter === 'U'));
}
console.log(isCharacterAVowel('f'));


//Function to find the sum of numbers in an array
function sumArray(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
var numbers =[1, 2, 3, 4];
console.log(sumArray(numbers));
