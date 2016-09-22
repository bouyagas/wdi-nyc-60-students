function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumbers(2, 5));

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
