// // //1. Dsplay in the console the numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// // //2. Display in the console the odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// // //3. Compute the sum of the elements of an array and display it in the console (add all numbers in the array together)

const myArray = [1, 2, 3];
const rezult = myArray.reduce(sumOfNr);

function sumOfNr(total, value) {
  return total + value;
}
console.log(myArray.reduce(sumOfNr));

// // //4. Compute the maximum of the elements of an array and display it in the console (am facut-o impreuna :) )

function arrayMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }

  console.log(max);
}
arrayMax([10, 2, 3]);

// // //5. Compute how many times a certain element appears in an array (count the number of times one element of your choice is in the array)

function arrayCount(myArray, searchFor) {
  let arrDup = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === searchFor) {
      arrDup.push(myArray[i]);
    }
  }
  console.log(arrDup.length);
}
arrayCount([3, 2, 2, 4, 2, 5, 6, 2], 2);

// // // Expert Challenge:

// // // using nested for loops generate and display in the console the following pattern
// // //            0 1 0 1

// // //            1 0 1 0

// // //            0 1 0 1

// // //            1 0 1 0
