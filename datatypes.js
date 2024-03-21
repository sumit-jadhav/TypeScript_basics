"use strict";
let na;
na = parseInt("35");
console.log(na);
let result;
result = false;
console.log(result);
let empList;
empList = ["sum", "rum", "thu", "23"];
let numList;
numList = [1, 2, 3, 4];
let results = numList.filter((num) => num > 2);
console.log(results);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
let department;
department = "It";
department = 10;
// function add(num1:number,num2:number){
//   return num1+num2
// }
// let newSum=add(10,20)
