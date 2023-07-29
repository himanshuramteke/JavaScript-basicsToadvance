const user = {
    username : "himanshu",
    loginCount : 8,
    loggedIn : true,

  getUserDetails: function(){
       //console.log("Got user details from database");
       console.log(`Username: ${this.username}`);
  }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
} 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);