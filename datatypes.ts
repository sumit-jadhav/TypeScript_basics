let na:number
na=parseInt("35")
console.log(na)
let result:boolean


result =false
console.log(result)

let empList:string[]
empList=["sum","rum","thu","23"]

let numList:Array<number>

numList=[1,2,3,4]

let results=numList.filter((num)=>num>2)

console.log(results)

let sum=numList.reduce((acc,num)=>acc+num)
console.log(sum)

let swapNumbs:[number,number];

function swapNumbers(num1:number,num2:number):[number,number]{
  return [num2,num1]
}

swapNumbs=swapNumbers(10,20)
console.log(swapNumbs)


let department:any
department="It"
department=10


// function add(num1:number,num2:number){
//   return num1+num2
// }
// let newSum=add(10,20)