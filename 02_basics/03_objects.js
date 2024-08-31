// singleton
// Object.create-> constructor method of creating objects. singleton comes under this one

// object literals-> const Jsuser = {} --> this is another way of creating object.-> can give anything in object like datatypes, functions, arrays and also object in side a object

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//  should keep the variable name in [] to take the vaue in symbol without [] it will be string type
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)// this is one(common) way of geting the output 
// console.log(JsUser["email"])// this is another way to get same output. watch the different syntax in both ways
// console.log(JsUser["full name"])// here the full name variable is written in string formet and to print it we need to use this way of loging
// console.log(JsUser[mySym])// here we have to use this way to print symbol type the output will be same but the (typeof)type will change // symbol
// console.log(JsUser.mySym)// here we have to use this way to print symbol type the output will be same but the (typeof)type will change // string

// JsUser.email = "hitesh@chatgpt.com"// for changing the value of a variable in object
// // Object.freeze(JsUser)// this is for not changing the value in the future.but this will freeze whole object and willnot allow to make changes in any other value in object
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// reference
// https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16