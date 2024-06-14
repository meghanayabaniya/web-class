//june 14(popup boxes)
//alert,confirm,prompt

function displayMessage(msg){
    alert(msg)
}

function redirectToGoogle(){
    let confirmation= confirm("Are you sure you want to google?")
    if (confirmation){
        window.location.href='https://google.com'
    }
}

function addition(){
    let fistnum=prompt("enter the first number");
    let secondnum=prompt("enter the second number");

    alert (Number(fistnum)+Number(secondnum));
}