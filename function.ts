function add(num1:number ,num2:number, num3?:number):number {
  return num3? num1+num2+num3:num1+num2
}
console.log(add(2,3))
console.log(add(2,3,4))

const sub=(num1:number,num2:number,num3:number=10):number=> num1- num2-num3
console.log(sub(5,2))
console.log(sub(5,2,5))

const mul= function(num1:number ,num2:number):number {
  return num1*num2
}
console.log(mul(2,3))

function add2(num1:number,num2:number,...num3:number[]):number{
  return num1+num2+num3.reduce((a,b)=>a+b)
}

console.log(add2(2,3,4,5,6,7))

function getItem<Type>(items:Type[]):Type[]{
  return new Array<Type>().concat(items)
}
let concatResult = getItem <number> ([1,2,3,4])
let concatString = getItem <string> (["a","b","c","d"])