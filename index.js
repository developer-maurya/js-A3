// Q1. Write a JavaScript program to construct the     following pattern, using a nested for loop.
//       * 
//       * * 
//       * * *  
//       * * * *
//       * * * * *


const n = 5; 
let p = ''; 
for (let i = 1; i <= n; i++) {
     for (let j = 1; j <= i; j++) {
         p += '*'; 
        } console.log(p); 
        p = '';
     }

// Q2. Iterate through all numbers from 1 to 45. Print the following:

//      For multiples of 3 print “Fizz”
//      For multiples of 5 print “Buzz”
//      For multiples of 3 and 5 print “FizzBuzz”
  
  
let i;
for ( i = 1; i <= 45; i++) {
      if (i % 3 === 0) {
        console.log("na");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}

// Q3. Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

let arr = [1,13,22,123,49];
let sum=0 ;
 for(let i=0; i<arr.length; i++){
     sum += arr[i] 
 }
 console.log(sum);

// Q4.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
// let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let sum1=0;
for(let i=0; i<arr1.length; i++){
    sum1 += arr1[i];
}
console.log( "sum1 =", sum1);

let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sum2=0;
for(let i =0; i<arr2.length; i++ )
{
    sum2 +=arr2[i];
}
console.log("sum2 =", sum2)


console.log( "total=", sum1 + sum2 );


// Q5.Using a for loop output the elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
//   true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line

let arr6 = [43, "what", 9, true, "cannot", false, "be", 3, true];
for ( let i = arr6.length - 1; i >= 0; i--){
    console.log(arr6[i]);
}