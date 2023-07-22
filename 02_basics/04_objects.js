//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123asc"
tinderUser.name = "himanshu"
tinderUser.email = "himanshu@google.com"
tinderUser.isloggedIn = false


//console.log(tinderUser);

const regularUser = {
    email : "myemail@.com",
    fullName: {
        userFullname :{
            firstName : "Himanshu",
            lastName : "Ramteke"
        }
    }
}

//console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

//const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "JS in Hindi",
    price : 499,
    courseInstructor : "Hitesh"
}

//course.courseInstructor

const {courseInstructor : Instructor} = course  //Destructuring

//console.log(courseInstructorInstructor);
console.log(Instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]