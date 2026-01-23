
//Array In TypeScript

const nums: number[]=[20,40,60,80];


//ReadOnly
const num: readonly number[]=[20,40,60,80];


type Users={
    name: string,
    age: number,
    city: string
}

const UserInfo:Users[]=[
    {name:"jatin",age:24,city:"Pune"},
    {name:"Kunal",age:23,city:"Mumbai"},
    {name:"Nick",age:24,city:"Delhi"},
]


// Tuple In TypeScript

const fruits: [string,number]=["apple",23];


//ReadOnly
const cars: readonly [string,number]=["BMW",2300000]
//cars.push() //Property 'push' does not exist on type 'readonly [string, number]'.


//Enum In TypeScript
enum Cities{
    MUMBAI,
    DELHI,
    PUNE
}

const city:Cities=Cities.DELHI;

enum Color{
    RED="red",
    BLUE="blue",
    YELLOW="Yellow"
}


function FavColor(color:Color){
    console.log(color);
}

FavColor(Color.RED);


//Auto Increment The Value So Avoid Using This
enum Status{
   PENDING = 100,
   REJECTED, // 101
   RESLOVED  // 102
}

console.log("hello");

let a:number=30;



