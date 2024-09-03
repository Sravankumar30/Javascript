//var c = 300// var is ignored in programing because var doesnot support local and global scope. It prints value whatever the scope the value is declared.
let a = 300
if (true) {   // scope helps us from many bugs that can occur
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// scope are of two types 1) Global Scope 2)Local(Block) Scope
// Global scope can be accessed from anywhere from the document
// Local scope can only be accessed from in side {}
// scope in javascript is denoted as {}
// scope in node and console is different.

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) // there wil be no error as the function is declared in normal way and can acess the function from anywhere from the document

// just a normal way to decleare function
function addone(num){
    return num + 1
}


addTwo(5)//hosting error will come as the function is assigned to a variable and can not be acccesed before declaring a it

// declercing a function inside a variable
const addTwo = function(num){
    return num + 2
}

// reference
// https://www.youtube.com/watch?v=cHHU0jXfjKY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=21
// https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22