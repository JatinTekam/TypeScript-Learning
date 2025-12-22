

//Functions -> A Reusable Block Of Code 

function add(numOne:number,numTwo:number){
    console.log(numOne+numTwo);
}

add(20,30);

//add(50,"50"); //Argument of type 'string' is not assignable to parameter of type 'number'.


//Return Type
function sum(numOne:number,numTwo:number):number{
    return numOne+numTwo;
}
sum(20,80);



//Object Type
function userInfo(user:{
    name: string;
    age: number;
    active: boolean
}   
):void{
    console.log(user);
}

