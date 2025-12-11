

//Union Means A Particuler Variable Contanis Neither This Type Of Data | This Type Of Data
let isActive: boolean | string;

isActive=true;
isActive="yes";

//isActive=1; //Type '1' is not assignable to type 'string | boolean'.


//Any Try To Avoid Any ///Important

let nums=["10","20","30"];


//let findOutNum: string;//Variable 'findOutNum' is used before being assigned.

let findOutNum: string | undefined;

for(let num of nums){
    if(num==="20"){
        findOutNum=num;
        break;
    }
}


console.log(findOutNum);
