
//Type Assertion
let num:any="20";
let ans=(num as string).length;


// unknown
let nums:unknown
nums=20;
nums="20";
nums=[10,20,30]

if(typeof nums==="string"){
    console.log(nums.length)
}


const user={
    name:"Jatin",
    age:20
}


//Example With Try And Catch
 try {
    
 } catch (error) {
   if(error instanceof Error){
     console.log(error.message);
   }
    console.log(error);
 }



 type obj={
    name:"kunal"
 }
 const res='{"name":"kushal"}';
 const json=(JSON.parse(res) as obj).name;



 //Never
type isUser= "admin" | "user"
function checkUser(user:isUser):void{
    if(user==="admin"){
        console.log(user);
        return;
    }

    if(user=="user"){
        console.log(user);
        return;
    }

    user;
}

function funNeverReturn():never{
    while(true){}
}

