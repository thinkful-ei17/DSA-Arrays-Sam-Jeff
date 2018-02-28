'use strict';


//**** DSA-Array Drills **** //

//Input: tauhida parveen
//Output: tauhida%20parveen

//Input: www.thinkful.com /tauh ida parv een
//Output: www.thinkful.com%20/tauh%20ida%20parv%20een

//Replace a string
function replaceString(str) {
  return str = str.replace(/ /g,'%20');
  // return str = str.split(' ').join('20%');
}

// console.log(replaceString('www.thinkful.com /tauh ida parv een'));


//Filtering an array

//Input: [2, 3, 7, 9];
//Output: [7, 9];

function filterArray(arr, num) {
  arr.sort((a, b) =>  a - b);
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let currentElement;
  let currentElementToLeft;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = arr[currentIndex];
    currentElementToLeft = arr[currentIndex - 1];
  
    if (currentElement <= num) {
      minIndex = currentIndex + 1;
    }

    else if (currentElement > num && currentElementToLeft > num) {
      maxIndex = currentIndex - 1;
    }

    else {
      return arr.slice(currentIndex, arr.length);
    }
  }
  return [];
}

console.log(filterArray([2, 3, 4, 7, 8], 5));

