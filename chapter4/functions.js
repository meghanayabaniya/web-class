//14june (functions)
//mainly pre defined and user defined function
//user defined: Annonymous and Named function

function getStudents(size){
    let container = [];
    for(let i=0;i<size;i++){
        container.push(i);
    }

    return container;

}


let _students= getStudents(20);
console.log(_students);

const _getStudents=(size)=>{
    return Array.from({length:size})
}

let _students1= getStudents(30);
console.log(_students1);


const parseStudent=(name)=>{
    console.log(name);
}


//callback function
function getStudentDetailByID(id,cb){
    // fetch call from server to retrive student details;

    cb("Ram Rai")

}

let studentDetail = getStudentDetailByID(1,parseStudent)
