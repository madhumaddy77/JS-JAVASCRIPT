const prompt = require("prompt-sync")({ sigint: true });
// // function print() {
//   // console.log("functions");
// }

// print()

function add(num1, num2) {
  return num1 + num2;
//   return sum;
}

 let num1 =1 //prompt("enter the number 1:");
 let num2 = 4//prompt("enter the number 2:");
let result = add(num1, num2);

console.log(result);


// function additionFunction(a, b) { 
//     return a + b; 
// } 
  
// let num1 = 5; 
// let num2 = 10; 
// let sum = additionFunction(num1, num2); 
// console.log("Sum of given numbers is :", sum);