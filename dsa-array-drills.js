'use strict';


//**** DSA-Array Drills **** //

// URLify A STRING

//Input: tauhida parveen
//Output: tauhida%20parveen

//Input: www.thinkful.com /tauh ida parv een
//Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function urlifyString(str) {
  return str = str.replace(/ /g,'%20');
  // return str = str.split(' ').join('20%');
}

// console.log(urlifyString('www.thinkful.com /tauh ida parv een'));


//FILTERING AN ARRAY

// SORT THEN LOGARITHMIC SOLUTION -- O(nlog(n))

//Input: [2, 3, 7, 9];
//Output: [7, 9];

// function filterArray(arr, num) {
//   arr.sort((a, b) =>  a - b);
//   let minIndex = 0;
//   let maxIndex = arr.length - 1;
//   let currentIndex;
//   let currentElement;
//   let currentElementToLeft;

//   while (minIndex <= maxIndex) {
//     currentIndex = Math.floor((minIndex + maxIndex) / 2);
//     currentElement = arr[currentIndex];
//     currentElementToLeft = arr[currentIndex - 1];
  
//     if (currentElement <= num) {
//       minIndex = currentIndex + 1;
//     }

//     else if (currentElement > num && currentElementToLeft > num) {
//       maxIndex = currentIndex - 1;
//     }

//     else {
//       return arr.slice(currentIndex, arr.length);
//     }
//   }
//   return [];
// }

// LOOP SOLUTION -- O(n)

// function filterArray(arr, num) {
//   const results = [];
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] > num) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(filterArray([2, 3, 4, 7, 8], 5));

// MAX SUM -- O(n^2)

// Input: [4, 6, -3, 5, -2, 1]

// Output: 12

// function maxSum(arr) {
//   let maxSum = arr[0];
//   for (let i=0; i<arr.length; i++) {
//     let currentSum = 0;
//     for (let j=i; j<arr.length; j++) {
//       currentSum += arr[j];
//       if (maxSum < currentSum) {
//         maxSum = currentSum;
//       }
//     }
//   }
//   return maxSum;
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1, -12]));

// MERGE ARRAYS -- O(n)

// Input: [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]

// Output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// function mergeArrays(arr1, arr2) {
//   const mergedArray = [...arr1, ...arr2];
//   mergedArray.sort((a,b) => a - b);
//   return mergedArray;
// }

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));


/* REMOVE CHARACTERS -- O(n) Inefficient Linear.  It is not Polynomial because
it does not increase at the complexity of n^2 based on the input string.  However,
it runs multiple operations in the replace method for each loop in the for loop, so 
it scales rapidly in proportion to our input. */

// function removeChars(str, char) {

//   let newArr = str;
//   for (let i = 0; i < char.length; i++) {
//     let reg = new RegExp(char[i], 'g');
//     newArr = newArr.replace(reg, '');
//   }

//   return newArr;
// }

// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


/* PRODUCTS - O(n) .  It is essentially O(n) + O(n), but the complexity would just be 
classified as O(n). */

// Input: [1, 3, 9, 4]
//Output: [108, 36, 12, 27]

// function products(arr) {
//   let counter = 1;
//   for (let i = 0; i < arr.length; i++) {
//     counter *= arr[i];
//   }

//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(counter / arr[i]);
//   }

//   return result;
// }

// console.log(products([1, 3, 9, 4]));

// 2D ARRAY - O(n^2)

// Input: 

// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];

// Output:

// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// function twoDimenArray(twoDimArr) {
  
//   let vertical = [];
//   let horizontal = [];
//   for (let i=0; i<twoDimArr.length; i++) {
//     for (let j=0; j<twoDimArr[i].length; j++) {
//       let arr = twoDimArr[i];
//       if (arr[j] === 0) {
//         horizontal[i] = true;
//         vertical[j] = true;
//       }
//     }
//   }
//   for (let i=0; i<twoDimArr.length; i++) {
//     for (let j=0; j<twoDimArr[i].length; j++) {
//       let arr = twoDimArr[i];
//       if (vertical[j] || horizontal[i]) {
//         arr[j] = 0;
//       }
//     }
//   }
//   return twoDimArr;
// }

// console.log(twoDimenArray(
//   [[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]])
// );

// String Rotation - O(n) It only runs one for loop that executes a number of operations that is directly proportional to the input size.

//Input: amazon, azonma
//Output: False
//Input: amazon, azonam
//Output: true

function stringRotation(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }

  let newString = str1;
  for (let i = 0; i < str1.length; i++) {
    newString = newString.slice(1, newString.length) + newString[0];
    if (newString === str2) {
      return true;
    }
  }

  return false;
}

console.log(stringRotation('amazon', 'azonma'));