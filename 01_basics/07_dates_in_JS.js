//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

//console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 3, 9);
//console.log(myCreatedDate.toDateString());

//let myCreatednewDate = new Date(2023, 3, 8, 5, 3);
//console.log(myCreatednewDate.toLocaleDateString());
//let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("02-23-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})