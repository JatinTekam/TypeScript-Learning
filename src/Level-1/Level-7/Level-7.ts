//Object's


type studentinfo={
    name: string,
    age: number
}

let stu:studentinfo={name:"Jatin",age:23};

let pgStudent={name:"kunal",age:24,pinCode:440013};

stu=pgStudent;





type studentInfo={
    name: string,
    age: number,
    hobby: string[];
}

const students:studentInfo={
    name:"Harsh",
    age: 25,
    hobby: ["Cricket","Football"]
}



//Partial -> To Make Propertis Optional

type User={
    name: string,
    age: number,
    city: string,
    pin: number
}

const user=(users:Partial<User>)=>{
    console.log('Users',users)
}

user({age:30})
user({})


//Required -> To Make Propertis Required

type ugStudent={
    name?: string,
    age?: number,
    city?: string,
    pin?: number
}

const ugStu=(Stu:Required<ugStudent>)=>{
    console.log('Students',Stu)
}

ugStu({name:"kunal",age:20,city:"Nagpur",pin:440035});




//Pick -> To Make Certain Propertis To Pick

type pgStudent={
    name: string,
    age: number,
    city: string,
    pin: number
}

type st=Pick<pgStudent,"name" | "age">;

const PGSTUDENT:st={
    name:"Vishal",
    age:24
}


//Omit -> To Make Certain Propertis To Omit

type intern={
    name: string,
    age: number,
    city: string,
    pin: number
    password: number
}

type newIntern=Omit<intern,"password">;

const int:newIntern={
    name:"kunal",
    age:20,
    city:"Nagpur",pin:440035
}


