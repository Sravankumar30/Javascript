// const tinderUser = new Object()// constructor method of creating objects.This is a singleton object
const tinderUser = {}// Non singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }// adding two objects like arrays the output will also be same inside an object two objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)// .assign() will add the two or more objects and prints the output corectly

// const obj3 = {...obj1, ...obj2}// will be using this method more commenly just like array by using spread(...) syntax
// console.log(obj3);

//array of objects
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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// this will show all the keys(variables) that are present in the object
// console.log(Object.values(tinderUser));// this shows the values of the keys in an object
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// By using .hasOwnProperty("key") we can find if that key exists in the object or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor//simple way of calling the key from an object

// const {courseInstructor: instructor} = course //This is called destructuring

// // console.log(courseInstructor);
// console.log(instructor);

// reference
// https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17

//JSON API
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


// reference
// https://www.youtube.com/watch?v=AViTh83k-IE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18