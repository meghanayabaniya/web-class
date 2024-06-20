window.onload=()=>{
    // let form = document.getElementById('student-form');
    let inputs = document.querySelectorAll('#studentForm input');

    inputs.forEach(input=>{
        input.addEventListener('input',(event)=>{
            console.log(event);
            if(event.target.type ==='number'){

            }
            if(event.target.type ==='text'){
                
            }
        })
    })


    // form.addEventListener('subnit',(e)=>{
    //     e.preventDefault();
    //     let fname = document.getElementById('fname').value
    //     let lname = document.getElementById('lname').value
    //     let age = document.getElementById('age').value
    //     let roll = document.getElementById('roll').value
    //     let address = document.getElementById('address').value

    //     let student = {
    //         fname,
    //         lname,
    //         age,
    //         roll,
    //         address
    //     }

    //     console.log(student);
    // })
}