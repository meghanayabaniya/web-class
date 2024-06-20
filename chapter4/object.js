// window.onload=()=>{
//     let form=document.getElementById('student-form');
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault();

//         let fname=document.getElementById('fname').value
//         let lname=document.getElementById('lname').value
//         let age=document.getElementById('age').value
//         let roll=document.getElementById('roll').value
//         let address=document.getElementById('address').value

//         let student = {
//             fname,
//             lname,
//             age,
//             roll,
//             address
//         }



//     console.log(student);
//     })
    
// }


let user ={
    personalDetail:{
        userName:"ram123",
        fullName:"ram rai",
        address:{
            city:"kathmandu",
            pin:"12345678",
            country:"Nepal"
        }
    },
    email:"sdfg23456@gmail.com",

    getFavColor:(day)=>{

        return day?"RED":"BLACK";
    },
    isMarried:false,
    gender:"male",
    age:34,
}

console.log(user.personalDetail.address.pin);
user.personalDetail.fullName="Monu baby";
//delete an item by key 
delete user.isMarried;
console.log(user);
console.log(user.getFavColor(true))
//print array of key
let keys=Object.keys(user);
console.log(keys);
let values=Object.values(user);


