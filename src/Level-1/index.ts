// Intro To TypeScript
// TypeScript Add Syntax On Top Of JavaScript
// TypeScript Ensure Type Safety


//Variable
let a:number;
// a="DemoStr" // Type 'string' is not assignable to type 'number'.
a=10;

let b:string;
//b=100  //Type 'number' is not assignable to type 'string'.
b="DemoStr"


//function

//Parameter 'num2' implicitly has an 'any' type.
// function addTwoNumber(num1,num2){
//     return num1+num2;
// }

function addTwoNumber(num1:number,num2:number):number{
    return num1+num2;
}

//addTwoNumber("str",50); //Argument of type 'string' is not assignable to parameter of type 'number'.
addTwoNumber(10,50);



