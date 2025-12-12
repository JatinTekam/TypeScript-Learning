//Type Narrowing
// Is Enable Type Safety Before Accessing A Particuler Property

function checkType(value:string | number){
    if(typeof value==="string"){ //If String value Do This
        return value.toLowerCase();
    }
    return value+10; //If Number value Do This
}



// type commerce={type:"commerce",id:number};
// type science={type:"science",id:number};
// type Engg={type:"Engg",id:number};


//
type student={type:"student",id:number}


function getStudentInfo(obj:any):obj is student{
  return(
    typeof obj ==="object" &&
    obj != null && 
    typeof obj.type === "string" &&
    typeof obj.id === "number"
  )
}

function studentEx(randomStuent:student | string){

    if(getStudentInfo(randomStuent)){
        return `This Is Student ${randomStuent.id} And ${randomStuent.type}`;
    }

    return `This Is Student${randomStuent}`;


}

type SStudent={type:"science",id:number}
type ScStudent={type:"CS",id:number}
type Enggstudent={type:"Engg",id:number}

type StudentInfo= SStudent | ScStudent | Enggstudent;

function getStudentDetails(stu:StudentInfo){

    switch(stu.type){
        case "science":
        return `Your Are A ${stu.type}`;
        case "CS":
        return `Your Are A ${stu.type}`;
        case "Engg":
        return `Your Are A ${stu.type}`;
    }
}
