
//Interface In TypeScript

type student={
    name:string,
    age:number
}

class Student implements student{
    name="Ishan";
    age=20
}



type branch= "CS" | "E"

//A class can only implement an object type or intersection of object types with statically known members.ts(2422)
// class StudentBranch implements branch{

// }

interface st{
    studentBranch:branch
}

function stBranch(stBranch:st){
    console.log(stBranch.studentBranch);
}



/// Optional Property
interface Fruit{
    name:string,
    quantity?:number //Optional Property
}

class MyFruit implements Fruit{
    name="apple";
}


// InterSection
type StName={name:string}
type StAge={age:number};
type StInfo= StName & StAge 
class AllInfo implements StInfo{
    name= "Niraj";
    age=23
}

//ReadOnly

type config={
    readonly name:string,
    total:number
}

const con:config={
    name:"A1",
    total:30
}

// Cannot assign to 'name' because it is a read-only property.
//con.name="20";







