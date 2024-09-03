const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// this. is used to access any variable inside {}(object) scope
        console.log(this);// this will show the current context means it will show the current object({}) in which it is printing. 
    }

}

// user.welcomeMessage()// it will print the function
// user.username = "sam"// the given value is changed
// user.welcomeMessage()// So the output changes and also the context as the value inside the object is changed

// console.log(this);//if we are using this outside the object({}) 1) inside node it will show empty{} 2) inside browser in console it will show as a window.

// function chai(){
//     let username = "hitesh"
    // console.log(this.username);// this one will print undefined
    // console.log(this);// this one prints many values which you can run and see  
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);// this will also print undefined.
        // console.log(this);// this prints loat of empty data like function fetch,clear interval/timeout set intervel/timeout etc
// }
// 
// const chai =  () => {  // Here we removed function() and put =>(arrow function).
//     let username = "hitesh"
//     console.log(this.username)// this will also print undefined
//     console.log(this);// this will also prints {}(empty object)
// }


// chai()

// () => {} // --> syntax for arrow function

// const addTwo = (num1, num2) => {  // basic way to write arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit(i will think) way of writing (implicit return) (i will think to return the values)

// const addTwo = (num1, num2) => ( num1 + num2 ) // if it is written in the arrow function with {} we have to write return and if it is written in () no need to write return 
// it can be written in three different ways

// const addTwo = (num1, num2) => ({username: "hitesh"})  //to return an object we need to wrap the object in {} without {} the output will be undefined


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()