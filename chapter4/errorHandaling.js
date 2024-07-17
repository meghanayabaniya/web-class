// try{
//     let students = await fetch("https://github.com/monu3");
// }
// catch(e){
//     console.log(e);
// }



async function getCountries(){
    let url = "https://restcountries.com/v3.1/all"
    let countries = await fetch(url);
    let countries_arr = await countries.json();
    console.log(countries_arr);
}

getCountries();