// console.log(student1,student2);

let date = new Date();
// console.group(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());


document.title = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
setInterval(() => {
  date = new Date();
  document.title = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);