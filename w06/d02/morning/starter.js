console.log('starter.js connected');

// Part 1 - Arenagrams
// const areAnagrams = (wordOne, wordTwo) => {

// };

// const areAnagrams = (wordOne, wordTwo) => {
//   let one = wordOne.split('').sort().join('');
//   let two = wordTwo.split('').sort().join('');
//   if (one === two) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };
const areAnagrams = (wordOne, wordTwo) => {
<<<<<<< HEAD
  if (wordOne.length !== wordTwo.length) {
    return false;
  }
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < wordOne.length; i++) {
    arr1.push(wordOne.charAt(i));
  }
  for ( let j = 0; j < wordTwo.length; j++) {
    arr2.push(wordTwo.charAt(j));
  }
  let x = 0;
  for ( let k = 0; k < arr1.length; k++) {
    if (arr2.includes(arr1[k])) {
      x += 1;
    }
  }
  if ( x === arr1.length) {
    return true;
  } else {
    return false;
  }
};

// Another solution to areAnagrams
const anargrams = (wordOne, wordTwo) => {
  let one = wordOne.toLowerCase.split('').sort().join('');
  let two = wordTwo.toLowerCase.split('').sort().join('');
  if (one === two) {
    return true;
  } else {
    return false;
  }
}


// Squeeze
const squeeze = (string) => {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== string.charAt(i+1)) {
      newWord += string.charAt(i);
    }
  }
  return newWord;
}

// Replace Char
const replaceChar = (string, char, replacementChar) => {
  let replacedWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      replacedWord += replacementChar;
    } else {
      replacedWord += string.charAt(i);
    }
  }
  return replacedWord;
}


// StripRight
let stripRight = (string) => {
  let word = string;
  console.log(word)
  for (let i = string.length + 1; i >= 0; i -1 ) {
    if (string.charAt(i) === ' ') {
      word -= string.charAt(i);
    } else {
      return word;
    }
  }
}











=======
 let letters = ""
 if (wordOne.length == wordTwo.length) {
   for(let i = 0; i<wordOne.length; i++){

     if (wordTwo.includes(wordOne[i])) {
       letters+=wordOne[i]
     }
     else {
       return console.log('not anagrams')
     }

   }
   if (letters.length==wordTwo.length){
       return console.log('they are anagrams!')
     }
 }
 else {
   return console.log('not anagrams')
 }
};


areAnagrams('team', 'meat');
>>>>>>> 22f06cf285a284a59945b57b9cdba17ed3a7a74c
